import type { Metadata } from "next";
import { site } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  noIndex?: boolean;
};

const DEFAULT_KEYWORDS = [
  "restaurant management software",
  "restaurant POS software",
  "restaurant billing software",
  "restaurant inventory management software",
  "restaurant CRM software",
  "AI restaurant management software",
];

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
  noIndex = false,
}: SeoInput): Metadata {
  const canonical = path === "/" ? site.url : `${site.url}${path}`;
  // Page titles already carry the brand; strip it before the template appends it again.
  const cleanTitle = title.replace(/\s*[|—]\s*Recaho\s*$/i, "");
  // The root layout applies the `%s | Recaho` template, so the brand must not be added here as well.
  const fullTitle = path === "/" ? title : `${cleanTitle} | Recaho`;

  return {
    title: path === "/" ? title : cleanTitle,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: ogType,
      url: canonical,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: "en_US",
      images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${site.url}/opengraph-image`],
    },
  };
}

/** Organization JSON-LD, rendered once in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logos/recaho-logo.png`,
    description: site.description,
    email: site.email,
    telephone: site.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Pune",
      postalCode: "411045",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: Object.values(site.social),
    areaServed: "Worldwide",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phones[0],
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: input.url,
    applicationCategory: input.category ?? "BusinessApplication",
    applicationSubCategory: "Restaurant Management Software",
    operatingSystem: "Web, Android, iOS, Windows",
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Pricing is shared during a personalised demo.",
      availability: "https://schema.org/InStock",
    },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href === "/" ? site.url : `${site.url}${item.href}`,
    })),
  };
}

export function serviceSchema(input: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "Worldwide",
    serviceType: "Restaurant management software",
  };
}
