import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ProductVisual } from "@/components/visuals/SimpleMock";
import { catalogueProducts, flagshipProducts, productCategories } from "@/data/catalogue";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  return (
    <Section id="products" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Product showcase"
          title="Sixteen modules. One connected system."
          description="Start with billing, then add the modules your operation needs. Every product below shares the same menu, stock, guest and financial data."
        />

        <div className="mt-14 space-y-16 lg:space-y-24">
          {flagshipProducts.map((product, index) => {
            const reversed = index % 2 === 1;
            const category = productCategories.find((item) => item.id === product.category);

            return (
              <Reveal key={product.slug}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={cn(reversed && "lg:order-2")}>
                    <p className="eyebrow">
                      0{index + 1} · {category?.name ?? "Recaho"}
                    </p>
                    <h3 className="display-3 mt-3">{product.h1}</h3>
                    <p className="mt-3 text-[0.98rem] leading-relaxed text-body">{product.tagline}</p>

                    <ul className="mt-6 space-y-2.5">
                      {product.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit.title} className="flex items-start gap-2.5">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50">
                            <Check className="size-3 text-brand" aria-hidden />
                          </span>
                          <span className="text-[0.9rem] text-ink-700">
                            <strong className="font-semibold text-ink">{benefit.title}.</strong>{" "}
                            <span className="text-body">{benefit.description}</span>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/products/${product.slug}`}
                        className="group inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-ink px-4 py-2.5 text-[0.84rem] font-medium text-white transition-colors hover:bg-ink-800"
                      >
                        Explore {product.navName}
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </Link>
                      <Link
                        href="/book-demo"
                        className="text-[0.84rem] font-semibold text-brand transition-colors hover:text-brand-600"
                      >
                        Book a demo
                      </Link>
                    </div>
                  </div>

                  <div className={cn("relative", reversed && "lg:order-1")}>
                    <div
                      aria-hidden
                      className="absolute -inset-3 rounded-[26px] border border-line bg-sand/70 sm:-inset-4"
                    />
                    <div className="relative">
                      <ProductVisual visual={product.visual} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 border-t border-line pt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">The complete catalogue</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">The rest of the platform</h3>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[0.86rem] font-semibold text-ink transition-colors hover:text-brand"
            >
              View all products
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {catalogueProducts.map((product) => {
              const Icon = getIcon(
                productCategories.find((category) => category.id === product.category)?.icon ?? "layers",
              );
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group relative bg-white p-5 transition-colors hover:bg-sand"
                >
                  <div className="flex items-start justify-between gap-3">
                    <Icon className="size-4 text-brand" aria-hidden />
                    <ArrowRight
                      className="size-3.5 -translate-x-1 text-line-strong opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-3 font-display text-[1rem] font-bold text-ink group-hover:text-brand">
                    {product.navName}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[0.815rem] leading-relaxed text-muted">
                    {product.heroPoints[0]}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
