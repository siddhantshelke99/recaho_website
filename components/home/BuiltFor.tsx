"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { getSolution } from "@/data/solutions";
import { getProduct } from "@/data/catalogue";
import { cn } from "@/lib/utils";

const formats = [
  { slug: "fine-dining", label: "Dine-in" },
  { slug: "qsr", label: "QSR" },
  { slug: "cafe", label: "Cafés" },
  { slug: "cloud-kitchen", label: "Cloud kitchens" },
  { slug: "bakery", label: "Bakeries" },
  { slug: "ice-cream-parlour", label: "Ice cream" },
  { slug: "pub-brewery", label: "Pubs & bars" },
  { slug: "food-court", label: "Food courts" },
  { slug: "multi-outlet", label: "Multi-outlet chains" },
];

export function BuiltFor() {
  const [active, setActive] = useState(0);
  const solution = getSolution(formats[active].slug);
  if (!solution) return null;

  const modules = solution.modules
    .map((slug) => getProduct(slug)?.navName)
    .filter((name): name is string => Boolean(name));

  return (
    <Section id="solutions" className="border-b border-line bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Built for every outlet</p>
          <h2 className="display-2 mt-3 text-ink">Whatever you serve, Recaho fits the way you run.</h2>
          <p className="lede mt-3">
            Formats differ in service style, menu complexity and reporting needs. Pick yours to see how Recaho is
            configured for it.
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Restaurant formats">
          {formats.map((format, index) => (
            <li key={format.slug}>
              <button
                type="button"
                aria-pressed={index === active}
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[0.8rem] font-medium transition-colors",
                  index === active
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-ink-700 hover:border-ink/25 hover:bg-sand",
                )}
              >
                {format.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-7 overflow-hidden rounded-[26px] border border-line bg-sand">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand">
                {String(active + 1).padStart(2, "0")} / {String(formats.length).padStart(2, "0")} ·{" "}
                {formats[active].label}
              </p>
              <h3 className="mt-2 max-w-lg font-display text-[1.5rem] font-bold leading-tight text-ink">
                {solution.h1}
              </h3>
              <p className="mt-2.5 max-w-xl text-[0.92rem] leading-relaxed text-body">{solution.tagline}</p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                {solution.approach.map((item) => (
                  <div key={item.title} className="rounded-xl border border-line bg-white p-3">
                    <p className="text-[0.8rem] font-semibold leading-snug text-ink">{item.title}</p>
                    <p className="mt-1 text-[0.72rem] leading-relaxed text-muted">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[0.82rem] font-semibold text-white transition-colors hover:bg-ink-800"
                >
                  Learn more about Recaho for {formats[active].label.toLowerCase()}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="border-t border-line bg-white p-6 lg:border-l lg:border-t-0">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted">What changes</p>
              <ul className="mt-3 space-y-2.5">
                {solution.outcomes.slice(0, 4).map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-[0.82rem] leading-relaxed text-ink-700">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden />
                    {outcome}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted">Key modules</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {modules.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-line bg-sand px-2.5 py-1 text-[0.72rem] font-medium text-ink-700"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-ink transition-colors hover:text-brand"
          >
            Compare all solutions
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
