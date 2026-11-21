import type { LeadInput } from "./validation";
import { site } from "./site";

/**
 * Lead delivery adapter.
 *
 * Two channels, both optional and server-only:
 *
 * 1. Webhook (`CRM_WEBHOOK_URL`, optional `CRM_API_KEY`) — the primary path when
 *    Recaho points the site at a CRM, helpdesk or automation endpoint.
 * 2. Email (`RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL`) — a zero-code fallback that
 *    delivers the enquiry straight to the sales inbox when no CRM exists yet.
 *
 * Until one of them is configured `isCrmConfigured()` is false, the API answers
 * `503 not_configured` and the UI states clearly that nothing was sent. The site
 * never reports a successful submission it cannot confirm.
 */
export type LeadPayload = LeadInput & {
  submittedAt: string;
  source: string;
  pageUrl: string;
};

export type SubmitResult =
  | { ok: true; reference?: string }
  | { ok: false; code: "not_configured" | "delivery_failed"; message: string };

const NOT_CONFIGURED =
  "Demo requests are not connected to a delivery channel yet, so this submission was not sent. Please email or call the sales team and we will respond directly.";

function emailChannel(): { apiKey: string; to: string; from: string } | null {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!apiKey || !to) return null;
  return { apiKey, to, from: process.env.LEAD_FROM_EMAIL ?? `Recaho website <onboarding@resend.dev>` };
}

export function isCrmConfigured(): boolean {
  return Boolean(process.env.CRM_WEBHOOK_URL) || emailChannel() !== null;
}

function toPayload(input: LeadInput): LeadPayload {
  return {
    ...input,
    website: undefined,
    submittedAt: new Date().toISOString(),
    source: process.env.CRM_SOURCE ?? "recaho-website",
    pageUrl: input.sourcePath ?? "/book-demo",
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailBody(payload: LeadPayload): string {
  const rows: [string, string][] = [
    ["Type", payload.type === "demo" ? "Demo request" : "Contact message"],
    ["Name", payload.fullName],
    ["Email", payload.email],
    ["Phone", `${payload.countryCode} ${payload.phone}`],
    ["Restaurant", payload.restaurantName || "—"],
    ["Country", payload.country || "—"],
    ["Restaurant type", payload.restaurantType || "—"],
    ["Outlets", payload.outlets || "—"],
    ["Interested in", payload.product || "—"],
    ["Page", payload.pageUrl],
    ["Received", payload.submittedAt],
  ];

  return `<h2>New ${payload.type === "demo" ? "demo request" : "enquiry"} from recaho.com</h2>
<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="color:#6b7280">${escapeHtml(label)}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`,
  )
  .join("\n")}
</table>
${payload.message ? `<p style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(payload.message)}</p>` : ""}`;
}

async function deliverByEmail(payload: LeadPayload): Promise<SubmitResult> {
  const channel = emailChannel();
  if (!channel) return { ok: false, code: "not_configured", message: NOT_CONFIGURED };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${channel.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: channel.from,
        to: [channel.to],
        reply_to: payload.email,
        subject: `New demo request — ${payload.restaurantName || payload.fullName}`,
        html: emailBody(payload),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ok: false,
        code: "delivery_failed",
        message: "We could not confirm this enquiry by email. Please try again, or email sales@recaho.com so nothing is missed.",
      };
    }

    const body = (await response.json().catch(() => ({}))) as { id?: string };
    return { ok: true, reference: body.id };
  } catch {
    return {
      ok: false,
      code: "delivery_failed",
      message: "The enquiry could not be delivered. Please try again in a moment, or email sales@recaho.com directly.",
    };
  }
}

async function deliverByWebhook(payload: LeadPayload, endpoint: string): Promise<SubmitResult> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CRM_API_KEY ? { Authorization: `Bearer ${process.env.CRM_API_KEY}` } : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ok: false,
        code: "delivery_failed",
        message: "We could not confirm this enquiry with our CRM. Please try again, or email sales@recaho.com so nothing is missed.",
      };
    }

    let reference: string | undefined;
    try {
      const body = (await response.json()) as { id?: string; reference?: string };
      reference = body.reference ?? body.id;
    } catch {
      reference = undefined;
    }

    return { ok: true, reference };
  } catch {
    return {
      ok: false,
      code: "delivery_failed",
      message: "The enquiry could not be delivered. Please try again in a moment, or email sales@recaho.com directly.",
    };
  }
}

export async function submitLead(input: LeadInput): Promise<SubmitResult> {
  const payload = toPayload(input);
  const endpoint = process.env.CRM_WEBHOOK_URL;

  if (endpoint) return deliverByWebhook(payload, endpoint);
  if (emailChannel()) return deliverByEmail(payload);

  return { ok: false, code: "not_configured", message: NOT_CONFIGURED };
}

/** Sales address used in fallback copy, kept in one place. */
export const salesEmail = site.email;

/** Very small in-memory throttle — good enough for a single-region deployment. */
const hits = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const record = hits.get(key);

  if (!record || record.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  record.count += 1;
  if (hits.size > 5000) hits.clear();
  return record.count > limit;
}
