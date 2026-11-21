import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { getIcon } from "@/lib/icons";
import type { Product } from "@/data/catalogue";

export function ProductOverview({ product }: { product: Product }) {
  return (
    <Section id="overview" className="bg-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="display-2 mt-3">{product.overview.heading}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.heroPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-line bg-sand px-3 py-1.5 text-[0.75rem] font-medium text-ink-700"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="prose-recaho max-w-none">
            {product.overview.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ProductBenefits({ product }: { product: Product }) {
  return (
    <Section id="benefits" className="border-y border-line bg-sand">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Key benefits" title="What changes when this is running" />
          <p className="max-w-sm text-[0.85rem] leading-relaxed text-muted">
            Outcomes reported by restaurants using this module, with scope confirmed during implementation.
          </p>
        </div>

        <div className="mt-9 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {product.benefits.map((benefit, index) => {
            const Icon = getIcon(benefit.icon);
            return (
              <div key={benefit.title} className="group bg-white p-6 transition-colors hover:bg-brand-50/40">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl bg-brand-50">
                    <Icon className="size-[1.15rem] text-brand" aria-hidden />
                  </span>
                  <span className="font-display text-[0.72rem] font-bold text-line-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[1.05rem] font-bold leading-snug text-ink">{benefit.title}</h3>
                <p className="mt-2 text-[0.87rem] leading-relaxed text-body">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export function ProductFeatures({ product }: { product: Product }) {
  return (
    <Section id="features" className="bg-white">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Detailed features" title="Inside the module" />
          <p className="max-w-sm text-[0.85rem] leading-relaxed text-muted">
            Capabilities listed here are part of the {product.navName} module. Scope is confirmed during implementation.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          {product.features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-[20px] border border-line bg-white p-5 transition-colors hover:border-brand/25 hover:bg-sand/60 sm:p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[0.74rem] font-bold tabular-nums text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.02rem] font-bold text-ink">{feature.title}</h3>
              </div>
              <p className="mt-2 text-[0.885rem] leading-relaxed text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
