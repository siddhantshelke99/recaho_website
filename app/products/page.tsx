import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTASection } from "@/components/common/CTASection";
import { ButtonLink } from "@/components/common/Button";
import { JsonLd } from "@/components/common/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { productCategories, products } from "@/data/catalogue";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = buildMetadata({
  title: "All Products — Restaurant POS, Inventory, CRM & AI",
  description:
    "Explore the complete Recaho platform: POS and billing, Recaho Mind AI, inventory, recipes, purchase, vendors, CRM, online ordering, QR menu, accounting, KDS, kiosk, reservations, queue, tokens and kitchen analytics.",
  path: "/products",
  keywords: ["restaurant management software modules", "restaurant POS modules", "recaho products"],
});

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_110%_at_30%_-10%,#fdf1ec_0%,#fdf7f3_45%,#ffffff_100%)]"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] dot-field opacity-55" />
        <Container className="relative py-9 sm:py-11 lg:py-14">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products" }]} />
          <div className="mt-6 max-w-3xl">
            <p className="eyebrow">The Recaho platform</p>
            <h1 className="display-1 mt-3">Every module your restaurant runs on</h1>
            <p className="lede mt-4">
              Sixteen products across billing, artificial intelligence, back-office operations, guest engagement and
              peripheral apps. Choose the modules you need today and add the rest as you grow — the data stays connected.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row">
              <ButtonLink href="/book-demo" size="lg" withArrow>
                Book a Free Demo
              </ButtonLink>
              <ButtonLink href="/integrations" size="lg" variant="secondary">
                See integrations
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">The catalogue</p>
              <h2 className="display-2 mt-3">Sixteen modules. One connected system.</h2>
            </div>
            <p className="max-w-sm text-[0.85rem] leading-relaxed text-muted">
              Every card below is a product you can buy, deploy and add to over time. All of them read and write the
              same order, stock and guest data.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const category = productCategories.find((item) => item.id === product.category);
              const Icon = getIcon(category?.icon ?? "layers");

              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex flex-col rounded-[20px] border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_18px_40px_-32px_rgba(20,22,26,0.45)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-brand-50">
                      <Icon className="size-[1.1rem] text-brand" aria-hidden />
                    </span>
                    <ArrowRight
                      className="mt-1 size-3.5 shrink-0 text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-4 font-display text-[1.02rem] font-bold text-ink group-hover:text-brand">
                    {product.navName}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-[0.85rem] leading-relaxed text-body">{product.tagline}</p>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-sand px-2.5 py-0.5 text-[0.68rem] font-medium text-muted">
                    {category?.name ?? product.eyebrow}
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Not sure which modules you need?"
        description="Tell us how your restaurant runs and a Recaho specialist will map the modules, integrations and rollout for your format."
        eyebrow="Talk to a specialist"
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
        ])}
      />
    </>
  );
}
