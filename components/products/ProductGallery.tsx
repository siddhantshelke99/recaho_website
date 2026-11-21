import { Check } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductVisual } from "@/components/visuals/SimpleMock";
import type { Product } from "@/data/catalogue";
import { cn } from "@/lib/utils";

export function ProductGallery({ product }: { product: Product }) {
  return (
    <Section id="screens" className="border-y border-line bg-sand">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The screen"
            title="A screen your team can learn in a shift"
            description="Illustrative interfaces built on Recaho's design system, showing how the module is used during service."
          />
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[0.72rem] font-medium text-muted">
            <span className="size-1.5 rounded-full bg-success" aria-hidden />
            Sample data · not a customer record
          </span>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[26px] border border-line bg-white p-3 sm:p-4">
            <ProductVisual visual={product.visual} />
            <p className="mt-3 px-1 text-[0.72rem] text-muted">
              {product.navName} · illustrative interface with sample data
            </p>
          </div>

          <div className="grid gap-3">
            {product.features.slice(0, 3).map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "flex flex-col rounded-[20px] border p-4 sm:p-5",
                  index === 0 ? "border-ink bg-ink text-white" : "border-line bg-white",
                )}
              >
                <p
                  className={cn(
                    "text-[0.66rem] font-semibold uppercase tracking-[0.12em]",
                    index === 0 ? "text-white/50" : "text-muted",
                  )}
                >
                  Screen {String(index + 1).padStart(2, "0")}
                </p>
                <p className={cn("mt-1.5 font-display text-[0.98rem] font-bold", index === 0 ? "text-white" : "text-ink")}>
                  {feature.title}
                </p>
                <p
                  className={cn(
                    "mt-1.5 text-[0.82rem] leading-relaxed",
                    index === 0 ? "text-white/60" : "text-body",
                  )}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ProductHowItWorks({ product }: { product: Product }) {
  return (
    <Section id="how-it-works" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From setup to daily use"
          description="The same four-stage rollout used across Recaho deployments, scoped to your outlets and menu."
        />

        <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {product.howItWorks.map((step, index) => (
            <li key={step.title} className="relative rounded-[20px] border border-line bg-sand/60 p-5">
              <span className="inline-flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-brand">
                <span className="grid size-5 place-items-center rounded-full bg-brand-50 text-[0.6rem] font-bold">
                  {index + 1}
                </span>
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2.5 font-display text-[1rem] font-bold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-[0.855rem] leading-relaxed text-body">{step.description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 flex items-start gap-2 text-[0.8rem] text-muted">
          <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden />
          Data from this module flows to connected Recaho modules automatically — no exports between systems.
        </p>
      </Container>
    </Section>
  );
}
