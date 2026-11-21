import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, RefreshCw, ShieldCheck, Workflow } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ButtonLink } from "@/components/common/Button";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { IntegrationDirectory } from "@/components/integrations/IntegrationDirectory";
import { CTASection } from "@/components/common/CTASection";
import { JsonLd } from "@/components/common/JsonLd";
import { LogoMarquee } from "@/components/common/LogoMarquee";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { integrationCategories } from "@/data/integrations";

export const metadata: Metadata = buildMetadata({
  title: "Restaurant Integrations — Aggregators, Payments & Accounting",
  description:
    "Connect Recaho with Zomato, Swiggy, ONDC, Shopify, payment gateways, WhatsApp, Tally, SAP, ZATCA, GST and the POS hardware your restaurant already uses.",
  path: "/integrations",
  keywords: [
    "restaurant aggregator integration",
    "Zomato Swiggy POS integration",
    "restaurant payment integration",
    "Tally restaurant integration",
  ],
});

const flow = [
  {
    icon: Workflow,
    title: "Connect once",
    description:
      "Authorise the platform from the Recaho dashboard. Menu, outlet and tax configuration stays in one place.",
  },
  {
    icon: RefreshCw,
    title: "Sync continuously",
    description:
      "Orders, availability, payments and sales data move between systems without manual export or re-entry.",
  },
  {
    icon: ShieldCheck,
    title: "Reconcile with confidence",
    description:
      "Every synced transaction remains tied to the bill and report it belongs to, so finance closes cleanly.",
  },
];

export default function IntegrationsPage() {
  const allNames = integrationCategories.flatMap((category) =>
    category.items.map((item) => (item.note ? `${item.name} · ${item.note}` : item.name)),
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-sand">
        <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 size-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(194,30,28,0.16),transparent_65%)]"
        />
        <Container className="relative py-10 lg:py-14">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Integrations", href: "/integrations" }]} />
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Integrations ecosystem</p>
              <h1 className="display-1 mt-3">Connected to the tools your restaurant already uses</h1>
              <p className="lede mt-4 max-w-2xl">
                Aggregators, payment providers, accounting platforms, messaging APIs, compliance requirements and
                hardware — connected so operational data moves without double entry.
              </p>
              <div className="mt-7 flex flex-col gap-3 xs:flex-row">
                <ButtonLink href="/book-demo" size="lg" withArrow>
                  Book a Free Demo
                </ButtonLink>
                <ButtonLink href="/contact?topic=integration" size="lg" variant="secondary">
                  Ask about an integration
                </ButtonLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {integrationCategories.slice(0, 6).map((category) => (
                <a
                  key={category.id}
                  href={`#directory`}
                  className="rounded-xl border border-line bg-white px-3.5 py-3 transition-colors hover:border-brand/30"
                >
                  <p className="text-[0.82rem] font-semibold text-ink">{category.shortName}</p>
                  <p className="mt-0.5 text-[0.7rem] text-muted">{category.items.length} platforms</p>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div className="border-b border-line bg-white py-4">
        <Container>
          <LogoMarquee items={allNames} ariaLabel="Platforms integrated with Recaho" />
        </Container>
      </div>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="How integrations work"
            title="One platform in the middle, not five in parallel"
            description="Recaho keeps the menu, orders, payments and financial data in a single flow so each connected tool receives the same source of truth."
          />
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {flow.map((step, index) => (
              <div key={step.title} className="rounded-[var(--radius-card)] border border-line bg-sand/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-lg bg-white">
                    <step.icon className="size-4 text-brand" aria-hidden />
                  </span>
                  <span className="font-display text-[0.7rem] font-bold text-line-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[0.98rem] font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-body">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="directory" className="border-y border-line bg-sand scroll-mt-20">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Integration directory"
              title="Search the connected platforms"
              description="This directory lists the integrations Recaho publishes today. Availability can differ by country and plan, so the team confirms the live list for your outlets."
            />
            <Link
              href="/contact?topic=integration"
              className="inline-flex shrink-0 items-center gap-2 text-[0.85rem] font-semibold text-brand hover:text-brand-600"
            >
              Request an integration
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 rounded-[var(--radius-panel)] border border-line bg-white p-5 sm:p-6">
            <IntegrationDirectory />
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Integration enquiry"
        heading="Using a platform that is not listed?"
        description="Tell us which system your restaurant depends on. The Recaho team will confirm whether an integration exists today or can be scoped for your market."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact?topic=integration"
        secondaryLabel="Book a Free Demo"
        secondaryHref="/book-demo"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Integrations", href: "/integrations" },
        ])}
      />
    </>
  );
}
