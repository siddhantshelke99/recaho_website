import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionApproach, SolutionChallenges, SolutionModules } from "@/components/solutions/SolutionFeatures";
import { CTASection } from "@/components/common/CTASection";
import { Container, Section } from "@/components/common/Container";
import { Accordion } from "@/components/common/Accordion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/common/JsonLd";
import { getSolution, solutions } from "@/data/solutions";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return buildMetadata({
      title: "Solution not found",
      description: "This Recaho solution page could not be found.",
      path: `/solutions/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: solution.metaTitle,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}`,
    keywords: solution.keywords,
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const others = solutions.filter((item) => item.slug !== solution.slug).slice(0, 6);

  return (
    <>
      <SolutionHero solution={solution} />
      <SolutionChallenges solution={solution} />
      <SolutionApproach solution={solution} />
      <SolutionModules solution={solution} />

      <Section id="faqs" className="border-t border-line bg-sand">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <SectionHeading eyebrow="FAQ" title={`${solution.name} questions`} />
              <p className="mt-4 text-[0.85rem] leading-relaxed text-muted">
                Something not covered here? A Recaho specialist can answer it against your own outlets, menu and
                countries.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-[0.83rem] font-semibold text-brand hover:text-brand-600"
              >
                Ask the team
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
            <Accordion items={solution.faqs} defaultOpen={0} className="border-t border-line" />
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Other formats" title="Explore another solution" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className="group flex items-center justify-between rounded-[18px] border border-line bg-white px-4 py-3.5 transition-colors hover:border-brand/30 hover:bg-sand"
              >
                <span className="text-[0.89rem] font-medium text-ink group-hover:text-brand">{item.name}</span>
                <ArrowRight className="size-3.5 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection heading={solution.ctaHeading} description={solution.tagline} eyebrow="Next step" />

      <JsonLd
        data={[
          serviceSchema({
            name: `Recaho for ${solution.name}`,
            description: solution.metaDescription,
            url: `${site.url}/solutions/${solution.slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Solutions", href: "/solutions" },
            { name: solution.name, href: `/solutions/${solution.slug}` },
          ]),
        ]}
      />
    </>
  );
}
