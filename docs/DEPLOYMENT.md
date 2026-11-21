# Recaho website — deployment and configuration

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Lucide · Framer Motion.

## Commands

| Task | Command |
| --- | --- |
| Install | `npm install` |
| Local development | `npm run dev` (http://localhost:3000) |
| Type check | `npm run typecheck` |
| Production build | `npm run build` |
| Serve the build | `npm start` |

Node 20.9+ is required (Next.js 16). The project can be deployed to any Node host, Vercel, or a container.
Do not deploy the `docs/` folder or `.env*` files to a public static host.

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | recommended | Canonical production origin. Currently `lib/site.ts` uses `https://www.recaho.com`; change it there if the launch domain differs. |
| `NEXT_PUBLIC_LOGIN_URL` | required before launch | Destination of the header **Login** link. No login URL is published on recaho.com today, so it currently falls back to the existing Recaho site. Set it to the real POS/back-office login URL. |
| `CRM_WEBHOOK_URL` | one of two channels | HTTPS endpoint that receives demo/contact enquiries. Takes priority over email. |
| `CRM_API_KEY` | optional | Bearer token sent to the CRM endpoint. Server-only — never prefix with `NEXT_PUBLIC_`. |
| `CRM_SOURCE` | optional | Label added to each lead payload (defaults to `recaho-website`). |
| `RESEND_API_KEY` | one of two channels | Resend API key. Used only when `CRM_WEBHOOK_URL` is empty. |
| `LEAD_NOTIFY_EMAIL` | with Resend | Sales inbox that receives each enquiry (e.g. `sales@recaho.com`). |
| `LEAD_FROM_EMAIL` | optional | Verified sender. Keep the Resend test sender until `recaho.com` is verified in Resend. |

Copy `.env.example` to `.env.local` for local development. Secrets belong in the host's environment settings, not in the repository.

## Form integration layer

Both `/book-demo` and `/contact` post to `app/api/demo/route.ts`.

Flow:

1. Client-side validation using the shared rules in `lib/validation.ts`.
2. Server-side re-validation of the same rules (never trusts the browser).
3. Honeypot field (`website`) rejects bots.
4. In-memory throttle: 5 submissions per IP per 10 minutes.
5. Delivery through `lib/crm.ts` (`submitLead`): the CRM webhook if `CRM_WEBHOOK_URL` is set, otherwise the Resend
   email channel if `RESEND_API_KEY` and `LEAD_NOTIFY_EMAIL` are set.

**Until at least one channel is configured, the API returns HTTP 503 `not_configured` and the UI explicitly states the
enquiry was not delivered**, with prefilled email and phone fallbacks. The site never displays a success message
without a confirmed 2xx response from the delivery channel.

Lead payload (flat JSON, easy to map in any CRM or automation tool):

```json
{
  "type": "demo",
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "countryCode": "+91",
  "restaurantName": "string",
  "country": "string",
  "restaurantType": "string",
  "outlets": "2 – 5",
  "product": "Recaho POS",
  "message": "string",
  "sourcePath": "/book-demo",
  "submittedAt": "ISO-8601",
  "source": "recaho-website",
  "pageUrl": "/book-demo"
}
```

If the CRM expects a different shape, map the payload inside `submitLead` only — no component changes are required.
The in-memory throttle resets on redeploy; replace it with a shared store (Redis/Upstash) if the site scales horizontally.
Consider adding a CAPTCHA provider for stronger spam protection if bot traffic appears.

## Deployment

1. Set the production domain to `https://www.recaho.com` (or update `lib/site.ts` and `NEXT_PUBLIC_SITE_URL`).
2. Configure the environment variables above.
3. Run `npm run build` and `npm start`, or connect the repository to the host.
4. Point DNS at the host (A/ALIAS for the apex, CNAME for `www`). Keep a single canonical host and redirect the other.
5. Confirm HTTPS, HSTS at the CDN/host level, and gzip/brotli compression.
6. Verify `/sitemap.xml`, `/robots.txt` and `/opengraph-image` resolve on the live domain.
7. Submit the sitemap in Google Search Console and Bing Webmaster Tools.

## URL migration map

Legacy `/s/...` URLs are permanently redirected in `next.config.ts` (308). Notably:

- `/s/restaurant-pos-software`, `/s/restaurant-billing-software-system-pos` → `/products/pos`
- `/s/recaho-mind-ai`, `/s/inventory-management`, `/s/restaurant-crm`, `/s/qr-code-menu` → matching product pages
- `/s/kitchen-display-system`, `/s/self-ordering-kiosk`, `/s/token-management-system`,
  `/s/restaurant-reservation-and-table-management`, `/s/queue-management-screen`,
  `/s/kitchen-performance-dashboard-recaho` → matching peripheral product pages
- `/s/cafe`, `/s/quick-service-restaurant-pos-system`, `/s/cloud-kitchen-software`, `/s/bakery-pos-system`,
  `/s/sweet-shop-pos-software`, `/s/pizza-joint-restaurant-management-system`,
  `/s/ice-cream-parlor-pos-software`, `/s/foodcourt-pos-billing-software`, `/s/foodtruck-restaurant-pos`,
  `/s/multioutlet-restaurant-pos`, `/s/finedine-restaurant-billing-software`, `/s/pbcl-billing-software` → `/solutions/...`
- `/s/about-us`, `/s/contact-recaho-rms`, `/s/book-a-free-demo` → `/about`, `/contact`, `/book-demo`
- `/products/integrations`, `/demo`, `/solutions/pubs` → `/integrations`, `/book-demo`, `/solutions/pub-brewery`

Add a row here for any additional legacy URL found in Search Console before launch, and re-crawl the site afterwards.

## SEO checklist before launch

- [ ] Confirm the canonical host and update `lib/site.ts` if it is not `https://www.recaho.com`.
- [ ] Every page has one `<h1>`, a unique title and description (see `lib/seo.ts` usage per route).
- [ ] `/sitemap.xml` includes all product and solution pages; check for 404s/redirects in the sitemap.
- [ ] Verify redirects with `curl -I` for each legacy URL in the map.
- [ ] Validate Organization, SoftwareApplication, Service and BreadcrumbList JSON-LD.
- [ ] FAQPage schema is intentionally **not** emitted: Google restricts FAQ rich results to authoritative government and
      health sites, so the visible FAQ copy is the correct implementation.
- [ ] Add the production logo and social images if the client supplies an updated brand asset.
- [ ] Re-check Core Web Vitals in the field after launch (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1).

## Content requiring client sign-off

These items are taken from recaho.com and are flagged rather than invented:

1. **Statistics** — 15,000+ businesses, 18+ countries, 300+ cities, 99.998% uptime.
2. **Customer references** — names, cities and formats only. No written testimonials or logos are published because
   Recaho has not published approved quotes; add them once approved.
3. **Integrations** — the directory mirrors Recaho's published integration list. Availability differs by country and
   may change; confirm before launch and per market.
4. **Login URL** — no public login destination exists on recaho.com; set `NEXT_PUBLIC_LOGIN_URL`.
5. **Logo asset** — the header uses the official PNG from the existing site (`public/logos/recaho-logo.png`, 197×38).
   Replace it with a higher-resolution SVG/PNG if available; the component (`components/common/Logo.tsx`) needs no change.
6. **Product screenshots** — every product visual is an original code-rendered interface with sample data, not a
   screenshot of a live account. Swap in real screenshots when approved UI captures are available.
