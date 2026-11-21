import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { getProduct } from "@/data/catalogue";
import type { Solution } from "@/data/solutions";

export function SolutionChallenges({ solution }: { solution: Solution }) {
  return (
    <Section id="challenges" className="bg-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <SectionHeading
            eyebrow="The challenge"
            title={`What makes ${solution.name.toLowerCase()} hard to run`}
            description={solution.intro}
          />
          <div className="grid gap-3">
            {solution.challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="flex items-start gap-4 rounded-[18px] border border-line bg-sand/60 p-4 sm:p-5"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-white font-display text-[0.72rem] font-bold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1rem] font-bold leading-snug text-ink">{challenge.title}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-body">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function SolutionApproach({ solution }: { solution: Solution }) {
  return (
    <Section id="approach" className="relative overflow-hidden bg-ink">
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-40" />
      <div aria-hidden className="absolute -right-24 top-0 size-[26rem] rounded-full bg-brand/25 blur-[110px]" />
      <Container className="relative">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading tone="dark" eyebrow="How Recaho solves it" title="Configured around your service model" />
          <p className="max-w-sm text-[0.85rem] leading-relaxed text-white/55">
            Each of these is a capability already running in production restaurants, not a roadmap item.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-3">
          {solution.approach.map((item, index) => (
            <div key={item.title} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-9 place-items-center rounded-xl bg-white/10">
                  <Check className="size-4 text-brand-100" aria-hidden />
                </span>
                <span className="font-display text-[0.7rem] font-bold text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-3.5 font-display text-[1.02rem] font-bold leading-snug text-white">{item.title}</h3>
              <p className="mt-2 text-[0.87rem] leading-relaxed text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function SolutionModules({ solution }: { solution: Solution }) {
  return (
    <Section id="modules" className="bg-white">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Recommended modules" title="The stack for this format" />
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-ink transition-colors hover:text-brand"
          >
            View all products
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {solution.modules.map((slug) => {
            const product = getProduct(slug);
            if (!product) return null;
            return (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className="group flex items-start justify-between gap-4 rounded-[20px] border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_18px_40px_-32px_rgba(20,22,26,0.45)]"
              >
                <div>
                  <p className="font-display text-[1rem] font-bold text-ink group-hover:text-brand">
                    {product.navName}
                  </p>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-body">{product.tagline}</p>
                </div>
                <ArrowRight
                  className="mt-1 size-4 shrink-0 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
