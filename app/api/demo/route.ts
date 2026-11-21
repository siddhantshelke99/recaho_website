import { NextResponse } from "next/server";
import { isCrmConfigured, isRateLimited, submitLead } from "@/lib/crm";
import { validateLead } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const result = validateLead(body);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, code: "validation_failed", errors: result.errors },
      { status: 422 },
    );
  }

  // Honeypot: pretend success so bots do not learn the rule, but deliver nothing.
  if (result.data.website) {
    return NextResponse.json({ ok: true, queued: false });
  }

  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      { ok: false, code: "rate_limited", message: "Too many submissions. Please try again shortly." },
      { status: 429 },
    );
  }

  if (!isCrmConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
        message:
          "This form is not connected to a delivery channel yet, so your enquiry was not sent. Please email sales@recaho.com or call the sales team and we will respond directly.",
      },
      { status: 503 },
    );
  }

  const delivery = await submitLead(result.data);

  if (!delivery.ok) {
    return NextResponse.json(
      { ok: false, code: delivery.code, message: delivery.message },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, reference: delivery.reference });
}
