import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Accordion } from "@/components/common/Accordion";
import { getRelatedProducts, productCategories, type Product } from "@/data/catalogue";
import { getIcon } from "@/lib/icons";

export function RelatedProducts({ slug }: { slug: string }) {
  const related = getRelatedProducts(slug);

  if (related.length === 0) return null;

  return (
    <Section className="border-t border-line bg-sand">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Related products" title="Works well with" />
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-ink transition-colors hover:text-brand"
          >
            View all 16 products
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((product) => {
            const category = productCategories.find((item) => item.id === product.category);
            const Icon = getIcon(category?.icon ?? "layers");
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group rounded-[20px] border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_18px_40px_-30px_rgba(20,22,26,0.4)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-50">
                    <Icon className="size-4 text-brand" aria-hidden />
                  </span>
                  <ArrowRight
                    className="size-3.5 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                    aria-hidden
                  />
                </div>
                <p className="mt-3.5 font-display text-[0.98rem] font-bold text-ink group-hover:text-brand">
                  {product.navName}
                </p>
                <p className="mt-1.5 line-clamp-2 text-[0.8rem] leading-relaxed text-muted">{product.heroPoints[0]}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export function ProductFAQ({ product }: { product: Product }) {
  return (
    <Section id="faqs" className="bg-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="FAQ" title={`${product.navName} questions`} />
            <p className="mt-4 text-[0.85rem] leading-relaxed text-muted">
              Something not covered here? A Recaho specialist can answer it against your own menu, outlets and
              hardware.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.83rem] font-semibold text-brand hover:text-brand-600"
            >
              Ask the team
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
          <Accordion items={product.faqs} defaultOpen={0} className="border-t border-line" />
        </div>
      </Container>
    </Section>
  );
}
