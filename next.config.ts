import type { NextConfig } from "next";

/**
 * Legacy URL map.
 * Recaho's current site uses /s/<slug> URLs. Every indexed marketing URL that
 * has a direct equivalent in the new architecture is permanently redirected so
 * existing search equity and inbound links keep working.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/s/restaurant-pos-software", destination: "/products/pos" },
  { source: "/s/restaurant-billing-software-and-pos", destination: "/products" },
  { source: "/s/restaurant-billing-software-system-pos", destination: "/products/pos" },
  { source: "/s/restaurant-integrations", destination: "/integrations" },
  { source: "/s/recaho-peripheral-apps", destination: "/products" },
  { source: "/s/recaho-mind-ai", destination: "/products/recaho-mind" },
  { source: "/s/inventory-management", destination: "/products/inventory-management" },
  { source: "/s/restaurant-crm", destination: "/products/crm" },
  { source: "/s/qr-code-menu", destination: "/products/qr-menu" },
  { source: "/s/smart-call-center-ordering-system", destination: "/products/online-ordering" },
  { source: "/s/restaurant-captain-app", destination: "/products/pos" },
  { source: "/s/kitchen-display-system", destination: "/products/kitchen-display-system" },
  { source: "/s/kitchen-performance-dashboard-recaho", destination: "/products/kot-performance-dashboard" },
  { source: "/s/token-management-system", destination: "/products/token-management" },
  { source: "/s/restaurant-reservation-and-table-management", destination: "/products/table-reservation" },
  { source: "/s/queue-management-screen", destination: "/products/queue-management" },
  { source: "/s/self-ordering-kiosk", destination: "/products/self-ordering-kiosk" },
  { source: "/s/kiosk-restaurant-pos-software", destination: "/products/self-ordering-kiosk" },
  { source: "/s/about-us", destination: "/about" },
  { source: "/s/contact-recaho-rms", destination: "/contact" },
  { source: "/s/book-a-free-demo", destination: "/book-demo" },
  { source: "/s/customer-success-recaho", destination: "/#customers" },
  { source: "/s/frequently-asked-questions", destination: "/#faq" },
  { source: "/s/finedine-restaurant-billing-software", destination: "/solutions/fine-dining" },
  { source: "/s/cafe", destination: "/solutions/cafe" },
  { source: "/s/quick-service-restaurant-pos-system", destination: "/solutions/qsr" },
  { source: "/s/pbcl-billing-software", destination: "/solutions/pub-brewery" },
  { source: "/s/cloud-kitchen-software", destination: "/solutions/cloud-kitchen" },
  { source: "/s/bakery-pos-system", destination: "/solutions/bakery" },
  { source: "/s/sweet-shop-pos-software", destination: "/solutions/sweet-shop" },
  { source: "/s/pizza-joint-restaurant-management-system", destination: "/solutions/pizza-restaurant" },
  { source: "/s/ice-cream-parlor-pos-software", destination: "/solutions/ice-cream-parlour" },
  { source: "/s/foodcourt-pos-billing-software", destination: "/solutions/food-court" },
  { source: "/s/foodtruck-restaurant-pos", destination: "/solutions/food-truck" },
  { source: "/s/multioutlet-restaurant-pos", destination: "/solutions/multi-outlet" },
  { source: "/s/centralwarehouse-pos-system", destination: "/products/inventory-management" },
  { source: "/s/centralkitchen-billing-software", destination: "/products/inventory-management" },
  { source: "/s/zatca-pos-saudi-arabia", destination: "/integrations" },
  { source: "/s/india-gsteinvoice", destination: "/integrations" },
  { source: "/s/mra-compliance-mauritius", destination: "/integrations" },
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536, 1920],
  },
  async redirects() {
    return [
      ...legacyRedirects.map((r) => ({ ...r, permanent: true })),
      { source: "/products/integrations", destination: "/integrations", permanent: true },
      { source: "/solutions/pub-breweries", destination: "/solutions/pub-brewery", permanent: true },
      { source: "/solutions/pubs", destination: "/solutions/pub-brewery", permanent: true },
      { source: "/demo", destination: "/book-demo", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
