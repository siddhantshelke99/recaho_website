import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Container, Section } from "@/components/common/Container";
import { CTASection } from "@/components/common/CTASection";
import { ButtonLink } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/common/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = buildMetadata({
  title: "Restaurant Solutions by Format — Fine Dining to QSR",
  description:
    "Restaurant software configured for your format: fine dining, cafés, QSR, pubs, cloud kitchens, bakeries, sweet shops, pizza, ice cream, food courts, food trucks and multi-outlet chains.",
  path: "/solutions",
  keywords: ["restaurant software by type", "fine dining POS", "QSR software", "cloud kitchen software"],
});

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_110%_at_30%_-10%,#fdf1ec_0%,#fdf7f3_45%,#ffffff_100%)]"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] dot-field opacity-55" />
        <Container className="relative py-9 sm:py-11 lg:py-14">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }]} />
          <div className="mt-6 max-w-3xl">
            <p className="eyebrow">Solutions</p>
            <h1 className="display-1 mt-3">One platform. Every type of restaurant.</h1>
            <p className="lede mt-4">
              A food truck and a fine dining room do not share a service model. Recaho is configured around the way your
              format actually bills, prepares, serves and reports.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row">
              <ButtonLink href="/book-demo" size="lg" withArrow>
                Book a Free Demo
              </ButtonLink>
              <ButtonLink href="/products" size="lg" variant="secondary">
                Explore products
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Choose your format"
            title="Solutions built around real service models"
            description="Each page covers the operational challenges of that format, the modules that address them and the workflow improvements to expect."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = getIcon(solution.icon);
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_18px_40px_-30px_rgba(20,22,26,0.4)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-10 place-items-center rounded-lg bg-brand-50">
                      <Icon className="size-4 text-brand" aria-hidden />
                    </span>
                    <ArrowRight className="size-3.5 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden />
                  </div>
                  <h2 className="mt-4 font-display text-[1.05rem] font-bold text-ink">{solution.name}</h2>
                  <p className="mt-1.5 line-clamp-3 text-[0.85rem] leading-relaxed text-body">{solution.tagline}</p>
                  <span className="mt-4 text-[0.78rem] font-semibold text-brand">Explore solution</span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Tell us how your restaurant runs"
        description="A Recaho specialist will map modules, integrations and rollout to your format, country and outlet count."
        eyebrow="Get matched"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
        ])}
      />
    </>
  );
}
