import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/common/Button";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Container } from "@/components/common/Container";
import { ProductVisual } from "@/components/visuals/SimpleMock";
import { productCategories, type Product } from "@/data/catalogue";

const sectionLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Benefits", href: "#benefits" },
  { label: "Features", href: "#features" },
  { label: "The screen", href: "#screens" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
];

export function ProductHero({ product }: { product: Product }) {
  const category = productCategories.find((item) => item.id === product.category);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_110%_at_70%_-10%,#fdf1ec_0%,#fdf7f3_45%,#ffffff_100%)]"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] dot-field opacity-60" />

        <Container className="relative py-7 sm:py-9 lg:py-12">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: product.navName, href: `/products/${product.slug}` },
            ]}
          />

          <div className="mt-6 grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3 py-1.5 text-[0.72rem] font-semibold text-brand shadow-[0_1px_2px_rgba(20,22,26,0.04)]">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                {product.eyebrow}
              </p>

              <h1 className="display-1 mt-4 max-w-xl text-ink">{product.h1}</h1>
              <p className="lede mt-4 max-w-xl">{product.tagline}</p>

              <ul className="mt-6 grid gap-2">
                {product.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[0.9rem] text-ink-700">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50">
                      <Check className="size-3 text-brand" aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:items-center">
                <ButtonLink href="/book-demo" size="lg" withArrow className="w-full xs:w-auto">
                  Book a Free Demo
                </ButtonLink>
                <ButtonLink href="/products" size="lg" variant="secondary" className="w-full xs:w-auto">
                  All products
                </ButtonLink>
              </div>

              {category ? (
                <p className="mt-5 text-[0.78rem] text-muted">
                  Part of{" "}
                  <Link href={category.exploreHref} className="font-semibold text-ink hover:text-brand">
                    {category.name}
                  </Link>{" "}
                  · {category.capabilities.length} connected capabilities
                </p>
              ) : null}
            </div>

            <div className="relative">
              <div aria-hidden className="absolute -inset-3 rounded-[28px] border border-line bg-white/60 sm:-inset-5" />
              <div className="relative">
                <ProductVisual visual={product.visual} />
              </div>
              <div className="absolute -bottom-4 left-4 hidden items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 shadow-[0_10px_30px_-18px_rgba(20,22,26,0.5)] sm:flex">
                <span className="size-1.5 rounded-full bg-success" aria-hidden />
                <p className="text-[0.66rem] font-semibold text-ink">Illustrative screen · sample data</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="sticky top-[73px] z-30 border-b border-line bg-white/90 backdrop-blur">
        <Container>
          <nav aria-label="On this page">
            <ul className="flex gap-1 overflow-x-auto py-2 no-scrollbar">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-[0.78rem] font-medium text-ink-700 transition-colors hover:bg-sand hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="ml-auto hidden sm:block">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[0.78rem] font-semibold text-white transition-colors hover:bg-ink-800"
                >
                  Book a demo
                  <ArrowRight className="size-3" aria-hidden />
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
}
