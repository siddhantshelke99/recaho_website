import Link from "next/link";
import { ArrowRight, ArrowDown, Globe2, Layers, ShieldCheck, Store } from "lucide-react";
import { Container } from "@/components/common/Container";
import { LogoMarquee } from "@/components/common/LogoMarquee";
import { integrationCategories } from "@/data/integrations";
import { stats } from "@/lib/site";

const integrationNames = integrationCategories.flatMap((category) =>
  category.items.map((item) => (item.note ? `${item.name} · ${item.note}` : item.name)),
);

const strip = [
  { icon: Store, value: stats[0].value, label: "restaurants", detail: "and counting" },
  { icon: Globe2, value: stats[1].value, label: "countries", detail: "See where we are", href: "#global-presence" },
  { icon: Layers, value: "One", label: "platform", detail: "POS to accounting" },
  { icon: ShieldCheck, value: stats[3].value, label: "uptime", detail: "Cloud with offline billing" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(125%_115%_at_50%_-15%,#fff2ee_0%,#fdf6f2_38%,#faf7f3_68%,#ffffff_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[720px] dot-field opacity-70" />
      <div
        aria-hidden
        className="absolute -left-40 top-24 size-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,75,42,0.14),transparent_65%)]"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-40 size-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(194,30,28,0.12),transparent_65%)]"
      />

      <Container className="relative pt-14 pb-10 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-3.5 py-1.5 text-[0.74rem] font-semibold text-ink shadow-[0_1px_2px_rgba(20,22,26,0.04)] backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            AI-powered restaurant operating system
          </p>

          <h1 className="display-hero mx-auto mt-6 max-w-6xl text-ink">
            Serve <span className="chip">great food.</span>
            <br className="hidden sm:block" /> Leave the <span className="text-brand">technology</span> to Recaho.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-body sm:text-[1.12rem]">
            Recaho is the cloud restaurant operating system that connects{" "}
            <span className="chip-soft">billing</span>, <span className="chip-soft">kitchen</span>,{" "}
            <span className="chip-soft">inventory</span>, <span className="chip-soft">online orders</span> and{" "}
            <span className="chip-soft">guest engagement</span> on one platform — built for every restaurant format.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 xs:flex-row">
            <Link
              href="/book-demo"
              className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-brand px-6 text-[0.95rem] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(194,30,28,0.85)] transition-colors hover:bg-brand-600 xs:w-auto"
            >
              Book a Free Demo
              <span className="grid size-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
            <Link
              href="#catalogue"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-sand xs:w-auto"
            >
              Explore the Platform
              <ArrowDown className="size-4 text-muted" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[24px] border border-line bg-white/90 shadow-[0_20px_60px_-40px_rgba(20,22,26,0.45)] backdrop-blur sm:mt-14">
          <ul className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {strip.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-center gap-3.5 px-5 py-5 sm:px-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50">
                    <Icon className="size-5 text-brand" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[1.55rem] font-extrabold leading-none text-ink">
                      {item.value}
                      <span className="ml-1.5 align-middle text-[0.9rem] font-semibold text-body">{item.label}</span>
                    </p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-[0.78rem] text-muted hover:text-brand">
                        {item.detail} →
                      </a>
                    ) : (
                      <p className="mt-1 text-[0.78rem] text-muted">{item.detail}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-10 text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted">
          Recaho powers 15,000+ restaurants in 18+ countries
        </p>

        <div className="mt-5 pb-2">
          <LogoMarquee items={integrationNames} ariaLabel="Platforms connected to Recaho" />
        </div>
      </Container>
    </section>
  );
}
