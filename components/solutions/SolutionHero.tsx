import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { getProduct } from "@/data/catalogue";
import { getIcon } from "@/lib/icons";
import type { Solution } from "@/data/solutions";

const sectionLinks = [
  { label: "The challenge", href: "#challenges" },
  { label: "How Recaho helps", href: "#approach" },
  { label: "Modules", href: "#modules" },
  { label: "FAQs", href: "#faqs" },
];

export function SolutionHero({ solution }: { solution: Solution }) {
  const Icon = getIcon(solution.icon);
  const modules = solution.modules
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_110%_at_25%_-10%,#fdf1ec_0%,#fdf7f3_45%,#ffffff_100%)]"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[460px] dot-field opacity-55" />

        <Container className="relative py-7 sm:py-9 lg:py-12">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: solution.name, href: `/solutions/${solution.slug}` },
            ]}
          />

          <div className="mt-6 grid items-start gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3 py-1.5 text-[0.72rem] font-semibold text-brand shadow-[0_1px_2px_rgba(20,22,26,0.04)]">
                <Icon className="size-3.5" aria-hidden />
                Built for {solution.name.toLowerCase()}
              </span>

              <h1 className="display-1 mt-4 max-w-2xl">{solution.h1}</h1>
              <p className="lede mt-4 max-w-2xl">{solution.tagline}</p>

              <div className="mt-7 flex flex-col gap-3 xs:flex-row">
                <ButtonLink href="/book-demo" size="lg" withArrow>
                  Book a Free Demo
                </ButtonLink>
                <ButtonLink href="/solutions" size="lg" variant="secondary">
                  All solutions
                </ButtonLink>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">Modules</span>
                {modules.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-2.5 py-1 text-[0.7rem] font-medium text-ink-700 transition-colors hover:border-brand/30 hover:text-brand"
                  >
                    {product.navName}
                    <ArrowRight className="size-2.5" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div aria-hidden className="absolute -inset-3 rounded-[26px] border border-line bg-white/60" />
              <div className="relative rounded-[22px] border border-line bg-white p-5 shadow-[0_20px_60px_-45px_rgba(20,22,26,0.5)] sm:p-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  What this setup delivers
                </p>
                <ul className="mt-3.5 space-y-2.5">
                  {solution.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-[0.86rem] leading-snug text-ink-700">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50">
                        <Check className="size-3 text-brand" aria-hidden />
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <p className="text-[0.72rem] text-muted">Scoped for your outlets</p>
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-brand hover:text-brand-600"
                  >
                    Talk to sales
                    <ArrowRight className="size-3" aria-hidden />
                  </Link>
                </div>
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
