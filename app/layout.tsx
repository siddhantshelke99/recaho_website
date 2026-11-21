import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/common/JsonLd";
import { organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * Recaho's brand typeface, as used on recaho.com: Outfit.
 * One family carries both display and interface copy.
 */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Recaho — Restaurant Billing Software, POS & AI Management Platform",
    template: "%s | Recaho",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: site.url },
  keywords: [
    "restaurant billing software",
    "restaurant POS software",
    "restaurant management software",
    "AI restaurant management software",
    "restaurant inventory management software",
    "restaurant CRM software",
    "restaurant QR ordering system",
    "kitchen display system",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logos/recaho-logo.png" }],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: "Recaho — Restaurant Billing Software, POS & AI Management Platform",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Recaho — Restaurant Billing Software, POS & AI Management Platform",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
