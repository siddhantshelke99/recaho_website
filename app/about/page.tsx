import type { Metadata } from "next";
import { ArrowUpRight, Cloud, Globe2, Layers, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ButtonLink } from "@/components/common/Button";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTASection } from "@/components/common/CTASection";
import { JsonLd } from "@/components/common/JsonLd";
import { LogoMarquee } from "@/components/common/LogoMarquee";
import { breadcrumbSchema, buildMetadata, organizationSchema } from "@/lib/seo";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Recaho — Restaurant Technology Company",
  description:
    "Recaho is built by Amonex Technologies Pvt. Ltd. in Pune, India, and powers 15,000+ restaurants across 18+ countries with an AI-powered restaurant management platform.",
  path: "/about",
  keywords: ["about Recaho", "Amonex Technologies", "restaurant technology company"],
});

const pillars = [
  {
    icon: Layers,
    title: "One platform, not a bundle",
    description:
      "Recaho is designed as a single system. Billing, inventory, kitchen, CRM and accounting share the same data model instead of being stitched together after the fact.",
  },
  {
    icon: Sparkles,
    title: "AI where it saves time",
    description:
      "Recaho Mind answers operational questions in plain language and prepares campaign and menu recommendations — always reviewed by the restaurant team before they take effect.",
  },
  {
    icon: Globe2,
    title: "Built for multiple markets",
    description:
      "Country-specific tax and compliance requirements, multiple currencies and multi-outlet structures are part of the platform, not a custom project per country.",
  },
  {
    icon: Cloud,
    title: "Cloud with an offline backstop",
    description:
      "A cloud architecture gives owners visibility from anywhere. Offline billing keeps service running when connectivity does not.",
  },
  {
    icon: ShieldCheck,
    title: "Security and access control",
    description:
      "Recaho is AWS-hosted and encrypted, with role-based access so staff see the screens their role requires and financial data stays restricted.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant-first focus",
    description:
      "Every workflow is shaped around service: peak hours, kitchen timing, table turns, takeaway handover and end-of-day reconciliation.",
  },
];

const cities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Indore", "Surat", "Nagpur"];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-sand">
        <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
        <div
          aria-hidden
          className="absolute -left-24 -top-28 size-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(194,30,28,0.14),transparent_65%)]"
        />
        <Container className="relative py-10 lg:py-14">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }]} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="eyebrow">About Recaho</p>
              <h1 className="display-1 mt-3">Restaurant technology, built around service</h1>
              <p className="lede mt-4 max-w-2xl">
                Recaho is an AI-powered restaurant management platform from {site.legalName}. It connects the front desk,
                the kitchen, the back office and the guest relationship in one cloud system used by restaurants in 18+
                countries.
              </p>
              <div className="mt-7 flex flex-col gap-3 xs:flex-row">
                <ButtonLink href="/book-demo" size="lg" withArrow>
                  Book a Free Demo
                </ButtonLink>
                <ButtonLink href="/contact" size="lg" variant="secondary">
                  Contact the team
                </ButtonLink>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-line bg-white p-4">
                  <p className="font-display text-[1.5rem] font-bold leading-none text-ink">{stat.value}</p>
                  <p className="mt-1.5 text-[0.78rem] font-medium text-ink-700">{stat.label}</p>
                  <p className="mt-0.5 text-[0.68rem] leading-snug text-muted">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <SectionHeading eyebrow="Our story" title="From the billing counter outward" />
            </div>
            <div className="prose-recaho max-w-none">
              <p>
                Recaho started with a practical problem restaurants face every day: the bill is where every operation
                meets a customer. A dish sold has to reach the kitchen, consume stock, post to accounts and become part of
                a guest&apos;s history. When those steps live in separate systems, each one becomes a manual task.
              </p>
              <p>
                The platform was built outward from that moment. Billing and POS remain the operational core, and the
                surrounding modules — inventory, recipes, purchasing, kitchen display, CRM, accounting and analytics —
                were designed to work from the same transaction rather than beside it.
              </p>
              <p>
                Today Recaho supports single-outlet restaurants and multi-country chains, with implementations delivered
                by teams who understand service hours. The product roadmap continues to prioritise the work restaurants
                actually do: faster service, tighter stock control and clearer decisions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-sand">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[var(--radius-panel)] border border-line bg-white p-6 sm:p-8">
              <p className="eyebrow">Vision</p>
              <h2 className="display-3 mt-3">Every restaurant should run on enterprise-grade technology</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-body">
                A single café and a hundred-outlet chain should have access to the same quality of operational
                intelligence. Recaho exists to make that technology practical, affordable to operate and genuinely used
                by the team on the floor.
              </p>
            </div>
            <div className="rounded-[var(--radius-panel)] border border-line bg-ink p-6 sm:p-8">
              <p className="eyebrow text-brand-100">Mission</p>
              <h2 className="display-3 mt-3 text-white">Connect the operations behind every order</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-white/65">
                To give restaurants one connected system for billing, kitchen, stock, guests and finance — so data is
                captured once, decisions are based on live numbers, and technology stops being the constraint on service.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="How we build"
            title="Principles behind the platform"
            description="These are the engineering and product choices that shape how Recaho behaves in a live restaurant."
          />
          <div className="mt-9 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white p-5 sm:p-6">
                <span className="grid size-9 place-items-center rounded-lg bg-brand-50">
                  <pillar.icon className="size-4 text-brand" aria-hidden />
                </span>
                <h3 className="mt-3.5 font-display text-[0.98rem] font-bold text-ink">{pillar.title}</h3>
                <p className="mt-1.5 text-[0.845rem] leading-relaxed text-body">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-sand">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Global presence"
                title="One platform across 18+ countries"
                description="Recaho implementations run in India, the Middle East, Asia-Pacific and beyond, with tax and compliance configuration for each market."
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {["India", "UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Singapore", "Maldives", "Mauritius", "Sri Lanka"].map(
                  (market) => (
                    <span
                      key={market}
                      className="rounded-full border border-line bg-white px-3 py-1 text-[0.75rem] font-medium text-ink-700"
                    >
                      {market}
                    </span>
                  ),
                )}
              </div>
              <p className="mt-4 text-[0.8rem] text-muted">
                Market list reflects published customer references. Confirm current coverage with the Recaho team.
              </p>
            </div>

            <div className="rounded-[var(--radius-panel)] border border-line bg-white p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Cities where Recaho restaurants operate
              </p>
              <div className="mt-4 grid grid-cols-2 gap-y-2 text-[0.86rem] font-medium text-ink-700 sm:grid-cols-3">
                {cities.map((city) => (
                  <span key={city} className="flex items-center gap-1.5">
                    <span className="size-1 rounded-full bg-brand" aria-hidden />
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-5 border-t border-line pt-4 text-[0.78rem] leading-relaxed text-muted">
                A selection from 300+ cities. Local implementation and support are delivered by regional teams.
              </p>
              <a
                href={site.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-brand hover:text-brand-600"
              >
                Visit the head office in Pune
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
              Formats and markets
            </p>
            <LogoMarquee
              items={["Fine dining", "Cafés", "QSR", "Pubs & breweries", "Cloud kitchens", "Bakeries", "Sweet shops", "Multi-outlet chains", "Food courts"]}
              ariaLabel="Restaurant formats supported by Recaho"
            />
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Work with a team that understands restaurant hours"
        description="See the platform, ask the difficult questions and get a rollout plan for your outlets."
        eyebrow="Talk to Recaho"
      />

      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
          ]),
        ]}
      />
    </>
  );
}
