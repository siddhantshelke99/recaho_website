"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { productCategories } from "@/data/catalogue";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Ecosystem() {
  const [active, setActive] = useState(0);
  const category = productCategories[active];
  const Icon = getIcon(category.icon);

  return (
    <Section id="ecosystem" className="border-b border-line bg-white">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The Recaho ecosystem"
            title={
              <>
                Everything your restaurant needs.{" "}
                <span className="text-brand">One powerful platform.</span>
              </>
            }
            description="Six connected layers cover the full service day — from the moment an order is placed to the numbers your accountant closes."
          />
          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-2 text-[0.875rem] font-semibold text-ink transition-colors hover:text-brand"
          >
            Explore the full platform
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[340px_1fr] lg:gap-8">
          <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Recaho ecosystem layers" aria-orientation="vertical">
            {productCategories.map((item, index) => {
              const ItemIcon = getIcon(item.icon);
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  role="tab"
                  type="button"
                  id={`eco-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`eco-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault();
                      setActive((index + 1) % productCategories.length);
                    }
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      setActive((index - 1 + productCategories.length) % productCategories.length);
                    }
                  }}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-200",
                    selected
                      ? "border-brand/25 bg-brand-50 text-ink shadow-[0_1px_2px_rgba(194,30,28,0.06)]"
                      : "border-transparent text-ink-700 hover:border-line hover:bg-sand",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-lg transition-colors",
                      selected ? "bg-brand text-white" : "bg-sand-200 text-ink-700 group-hover:bg-white",
                    )}
                  >
                    <ItemIcon className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.9rem] font-semibold leading-tight">{item.name}</span>
                    <span className="block text-[0.74rem] text-muted">{item.shortName}</span>
                  </span>
                  <ArrowRight
                    className={cn(
                      "ml-auto size-3.5 shrink-0 transition-all",
                      selected ? "text-brand opacity-100" : "text-line-strong opacity-0 group-hover:opacity-100",
                    )}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`eco-panel-${category.id}`}
            aria-labelledby={`eco-tab-${category.id}`}
            className="relative overflow-hidden rounded-[var(--radius-panel)] border border-line bg-sand p-6 sm:p-8"
          >
            <div aria-hidden className="absolute inset-0 grid-lines opacity-40" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-white shadow-[0_1px_2px_rgba(20,22,26,0.06)]">
                  <Icon className="size-5 text-brand" aria-hidden />
                </span>
                <div>
                  <p className="eyebrow">Layer {String(active + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-xl font-bold text-ink">{category.name}</h3>
                </div>
              </div>

              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-body">{category.description}</p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {category.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-2 rounded-lg border border-line bg-white px-3 py-2.5 text-[0.84rem] font-medium text-ink-700"
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden />
                    {capability}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href={category.exploreHref}
                  className="inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-ink px-4 py-2.5 text-[0.84rem] font-medium text-white transition-colors hover:bg-ink-800"
                >
                  Explore more
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
                <p className="text-[0.78rem] text-muted">Connected to every other Recaho module by default.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
