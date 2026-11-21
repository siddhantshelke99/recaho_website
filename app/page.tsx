import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { OnlineOrders } from "@/components/home/OnlineOrders";
import { Integrations } from "@/components/home/Integrations";
import { Brands } from "@/components/home/Brands";
import { Catalogue } from "@/components/home/Catalogue";
import { ProductFamily } from "@/components/home/ProductFamily";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { WhyRecaho } from "@/components/home/WhyRecaho";
import { Workflow } from "@/components/home/Workflow";
import { BuiltFor } from "@/components/home/BuiltFor";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/common/JsonLd";
import { buildMetadata, softwareApplicationSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Restaurant Billing Software & POS Platform — Recaho",
  description:
    "Recaho is an AI-powered restaurant management platform for billing, POS, inventory, kitchen operations, CRM, accounting and analytics. Trusted by 15,000+ restaurants in 18+ countries.",
  path: "/",
  keywords: [
    "restaurant billing software",
    "restaurant management software India",
    "restaurant POS system",
    "AI restaurant management software",
    "restaurant software for multi outlet",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <OnlineOrders />
      <Integrations />
      <Brands />
      <Catalogue />
      <ProductFamily />
      <GlobalPresence />
      <WhyRecaho />
      <Workflow />
      <BuiltFor />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <JsonLd
        data={softwareApplicationSchema({
          name: "Recaho Restaurant Management Platform",
          description: site.description,
          url: site.url,
        })}
      />
    </>
  );
}
