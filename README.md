# Recaho website

Marketing site for **Recaho**, the AI-powered restaurant operating platform. Next.js App Router, TypeScript, Tailwind CSS v4.

## Stack

- Next.js 16 (App Router, React 19) · TypeScript strict
- Tailwind CSS v4 with the Recaho design tokens in `app/globals.css` (`shell`, `display-*`, `lede`, `eyebrow`, …)
- Lucide icons, Framer Motion (respects `prefers-reduced-motion`)
- Outfit, the brand typeface, self-hosted through `next/font`
- Metadata, JSON-LD, sitemap and robots generated from `lib/seo.ts` and `lib/site.ts`

## Getting started

```bash
npm install
cp .env.example .env.local   # optional; see below
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run build` | Production build |
| `npm start` | Serve the production build |

Node 20.9+ is required.

## Structure

```
app/                 routes: home, /products, /solutions, /integrations, /about, /contact, /book-demo, /api/demo
components/          layout chrome, sections, product & solution templates, form, code-drawn product visuals
data/                navigation, catalogue, solutions, integrations — the content model
lib/                 site facts, SEO helpers, lead validation, delivery adapter
docs/DEPLOYMENT.md   environment variables, URL migration map, launch checklist
```

Product and solution pages are data-driven: add an entry to `data/catalogue.ts` or `data/solutions.ts` and the page
renders through the shared template. Company facts live only in `lib/site.ts`.

## Forms

`/book-demo` and `/contact` post to `app/api/demo`. The route re-validates every field server-side, drops honeypot
submissions and throttles per IP, then delivers the lead through `lib/crm.ts`:

- `CRM_WEBHOOK_URL` (+ optional `CRM_API_KEY`) — CRM, helpdesk or automation endpoint
- `RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL` — email fallback to the sales inbox

With neither configured the API answers `503`, and the UI says the enquiry was **not** sent and offers email and
phone fallbacks. A success screen is only shown after a confirmed 2xx from the delivery channel.

## Content

Statistics, customer names, integrations and contact details were taken from recaho.com and still need client
sign-off before launch. Approved testimonials, a hi-res logo and the real login URL are pending — see
`docs/DEPLOYMENT.md`.
