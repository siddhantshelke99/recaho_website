/**
 * Single source of truth for company facts.
 * Every value here is taken from recaho.com or supplied by the client.
 */
export const site = {
  name: "Recaho",
  legalName: "Amonex Technologies Pvt. Ltd.",
  url: "https://www.recaho.com",
  tagline: "AI-powered restaurant operating platform",
  description:
    "Recaho is an AI-powered restaurant management platform connecting billing, POS, inventory, kitchen operations, CRM, accounting and business intelligence in one cloud system.",
  email: "sales@recaho.com",
  supportEmail: "support@amonex.in",
  phones: ["+91 8956852960", "+91 7028249188", "+91 8956852961"],
  supportPhone: "07969990111",
  address: {
    line1: "Urja Business Park, 3rd Floor, Sopan Baug",
    line2: "Balewadi, Pune 411045",
    country: "India",
    mapUrl: "https://goo.gl/maps/vN3ZhfFeATQcn1gA6",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/recaho-digital-pvt-ltd/",
    instagram: "https://www.instagram.com/recaho_pos/",
    facebook: "https://www.facebook.com/recahodigital.pvt.ltd",
    x: "https://x.com/RecahoD34094",
    youtube: "https://www.youtube.com/channel/UC4cI5WvkXGY4sT6RWqlO5mg",
  },
  /** Verified public destinations on the existing Recaho site. */
  links: {
    blog: "https://www.recaho.com/m/blog",
    news: "https://www.recaho.com/s/recaho-news",
    careers: "https://www.recaho.com/order-menu/career",
    partner: "https://www.recaho.com/s/book-a-free-demo",
    privacy: "https://www.recaho.com/s/recaho-privacy-policy",
    terms: "https://www.recaho.com/s/recaho-terms-and-conditions",
    refund: "https://www.recaho.com/s/recaho-refund-and-cancellation",
    shipping: "https://www.recaho.com/s/recaho-shipping-and-delivery-policy",
  },
  /** Login destination is configured at deploy time (see docs/DEPLOYMENT.md). */
  loginUrl: process.env.NEXT_PUBLIC_LOGIN_URL ?? "https://www.recaho.com/",
} as const;

/**
 * Verified platform statistics published on recaho.com.
 * Client sign-off is still required before launch — do not add new numbers.
 */
export const stats = [
  { value: "15,000+", label: "Restaurants on Recaho", detail: "Businesses running on the platform" },
  { value: "18+", label: "Countries", detail: "Global deployment footprint" },
  { value: "300+", label: "Cities", detail: "Where Recaho restaurants operate" },
  { value: "99.998%", label: "Uptime", detail: "Cloud availability with offline fallback" },
] as const;

export const trustHighlights = [
  "Cloud POS with offline billing",
  "AI insights with Recaho Mind",
  "50+ integrations",
  "Multi-outlet ready",
] as const;

/** Claims still awaiting client confirmation before launch. */
export const pendingVerification = [
  "Statistics (15,000+ businesses, 18+ countries, 300+ cities, 99.998% uptime)",
  "Named customer logos and the integrations listed on /integrations",
] as const;
