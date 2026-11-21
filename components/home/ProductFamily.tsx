"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { ProductVisual } from "@/components/visuals/SimpleMock";
import { getProduct } from "@/data/catalogue";
import { cn } from "@/lib/utils";

const family = [
  { slug: "pos", label: "Recaho POS", meta: "Counter · Windows & Android" },
  { slug: "kitchen-display-system", label: "Kitchen display", meta: "Kitchen · Screen & printer" },
  { slug: "self-ordering-kiosk", label: "Self-ordering kiosk", meta: "Guest-facing · Kiosk" },
  { slug: "online-ordering", label: "Digital ordering", meta: "QR · Web · Aggregators" },
  { slug: "recaho-mind", label: "Recaho Mind", meta: "AI · Web & mobile" },
];

export function ProductFamily() {
  const [active, setActive] = useState(0);
  const entry = family[active];
  const product = getProduct(entry.slug);
  if (!product) return null;

  return (
    <Section id="product-family" className="border-b border-line bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The product family</p>
          <h2 className="display-2 mt-3 text-ink">Five products. Every screen your restaurant runs on.</h2>
          <p className="lede mt-3">
            The counter, the kitchen, the kiosk, digital ordering and the AI layer — built on one order record, so what
            happens on one screen is already visible on the next.
          </p>
        </div>

        <div className="mt-9 flex gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Recaho products">
          {family.map((item, index) => (
            <button
              key={item.slug}
              role="tab"
              type="button"
              aria-selected={index === active}
              onClick={() => setActive(index)}
              className={cn(
                "flex shrink-0 items-center gap-2.5 rounded-full border px-3.5 py-2 text-left transition-colors",
                index === active
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink-700 hover:border-ink/25 hover:bg-sand",
              )}
            >
              <span
                className={cn(
                  "font-display text-[0.62rem] font-bold tabular-nums",
                  index === active ? "text-white/50" : "text-muted",
                )}
              >
                0{index + 1}
              </span>
              <span>
                <span className="block whitespace-nowrap text-[0.82rem] font-semibold leading-tight">{item.label}</span>
                <span
                  className={cn(
                    "block whitespace-nowrap text-[0.63rem] leading-tight",
                    index === active ? "text-white/55" : "text-muted",
                  )}
                >
                  {item.meta}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-[26px] border border-line bg-sand">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center border-b border-line p-6 sm:p-9 lg:border-b-0 lg:border-r">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand">
                0{active + 1} / 0{family.length} · {entry.meta}
              </p>
              <h3 className="mt-2 font-display text-[1.7rem] font-bold leading-tight text-ink">{product.h1}</h3>
              <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-body">{product.tagline}</p>

              <ul className="mt-5 space-y-2.5">
                {product.benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit.title} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white">
                      <Check className="size-3 text-brand" aria-hidden />
                    </span>
                    <span className="text-[0.87rem] leading-relaxed text-ink-700">
                      <strong className="font-semibold text-ink">{benefit.title}.</strong> {benefit.description}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/products/${product.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-[0.84rem] font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Explore {product.navName}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link href="/book-demo" className="text-[0.84rem] font-semibold text-ink hover:text-brand">
                  See it in a demo
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center p-5 sm:p-8">
              <div aria-hidden className="absolute inset-0 grid-lines opacity-40" />
              <div className="relative w-full">
                <ProductVisual visual={product.visual} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
