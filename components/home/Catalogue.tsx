"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { cn } from "@/lib/utils";

type Chapter = {
  id: string;
  index: string;
  label: string;
  heading: string;
  blurb: string;
  items: { name: string; body: string; href: string }[];
};

const chapters: Chapter[] = [
  {
    id: "modules",
    index: "01",
    label: "The modules",
    heading: "Ten building blocks, one live system.",
    blurb:
      "Front of house, kitchen and back office share the same menu, stock, guest and financial data — no exports, no re-entry.",
    items: [
      { name: "Billing", body: "Fast, accurate billing for dine-in, takeaway and delivery on any device.", href: "/products/pos" },
      { name: "KOT & KDS", body: "Every order reaches the right station, on paper or on screen.", href: "/products/kitchen-display-system" },
      { name: "Inventory", body: "Recipe-wise stock deduction with low-stock alerts and counts.", href: "/products/inventory-management" },
      { name: "Recipes", body: "Portion costing and plate margins for every dish you sell.", href: "/products/recipe-management" },
      { name: "Purchase", body: "Indents, purchase orders, GRNs and supplier rates in one flow.", href: "/products/purchase-management" },
      { name: "Vendors", body: "Vendor ledgers, payables and delivery history.", href: "/products/vendor-management" },
      { name: "CRM & loyalty", body: "Guest profiles, points and repeat-visit campaigns.", href: "/products/crm" },
      { name: "Smart QR menu", body: "A live photo menu at every table, ready to order from.", href: "/products/qr-menu" },
      { name: "Online orders", body: "Direct and aggregator orders in a single kitchen queue.", href: "/products/online-ordering" },
      { name: "Accounting", body: "Daily sales, shifts, expenses and reconciliation.", href: "/products/accounting" },
    ],
  },
  {
    id: "apps",
    index: "02",
    label: "The apps",
    heading: "Every screen your restaurant runs on.",
    blurb:
      "The counter, the floor, the kitchen and the owner's phone all work from the same order record, in real time.",
    items: [
      { name: "Recaho POS", body: "Counter billing for dine-in, takeaway and delivery.", href: "/products/pos" },
      { name: "Kitchen display", body: "Live tickets, station routing and prep timers.", href: "/products/kitchen-display-system" },
      { name: "Self-ordering kiosk", body: "Guests browse, customise and pay on their own.", href: "/products/self-ordering-kiosk" },
      { name: "QR ordering", body: "Scan at the table, order and pay from the phone.", href: "/products/qr-menu" },
      { name: "Online ordering", body: "Your own ordering site and connected aggregators.", href: "/products/online-ordering" },
      { name: "Recaho Mind", body: "Ask your sales data a question in plain language.", href: "/products/recaho-mind" },
    ],
  },
  {
    id: "start",
    index: "03",
    label: "Get started",
    heading: "See it running in your restaurant.",
    blurb:
      "A Recaho specialist walks you through the modules and apps that fit your format, outlet count and countries.",
    items: [
      { name: "Book a walkthrough", body: "30 minutes, mapped to how your restaurant actually runs.", href: "/book-demo" },
      { name: "Plan the rollout", body: "Menu, tax, hardware and outlet setup scoped before go-live.", href: "/contact" },
      { name: "Train the team", body: "Counter, floor and kitchen teams trained on their own screens.", href: "/contact" },
    ],
  },
];

export function Catalogue() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];

  return (
    <Section id="catalogue" className="border-b border-line bg-sand">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">The Recaho catalogue</p>
            <h2 className="display-2 mt-3 text-ink">Every module. Every app. One book.</h2>
            <p className="lede mt-3">
              Flip through everything your restaurant runs on with Recaho, from billing at the counter to the display in
              the kitchen.
            </p>
          </div>
          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2.5 text-[0.84rem] font-semibold text-ink transition-colors hover:border-ink/30"
          >
            <BookOpen className="size-4 text-brand" aria-hidden />
            Open the full catalogue
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>

        <div className="mt-9 overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_20px_60px_-50px_rgba(20,22,26,0.5)]">
          <div className="grid lg:grid-cols-[260px_1fr]">
            <div className="border-b border-line bg-ink p-5 lg:border-b-0 lg:border-r">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/45">Contents</p>
              <ul className="mt-3 grid gap-1 sm:grid-cols-3 lg:grid-cols-1">
                {chapters.map((item, index) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-pressed={index === active}
                      onClick={() => setActive(index)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                        index === active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white/85",
                      )}
                    >
                      <span
                        className={cn(
                          "font-display text-[0.7rem] font-bold tabular-nums",
                          index === active ? "text-brand-100" : "text-white/35",
                        )}
                      >
                        {item.index}
                      </span>
                      <span className="text-[0.86rem] font-medium">{item.label}</span>
                      <ArrowRight
                        className={cn("ml-auto size-3.5", index === active ? "opacity-100" : "opacity-0")}
                        aria-hidden
                      />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 hidden rounded-xl border border-white/10 bg-white/[0.04] p-3.5 lg:block">
                <p className="text-[0.72rem] leading-relaxed text-white/55">
                  Every module is included in the same platform. Start with billing and add what your operation needs.
                </p>
                <Link href="/book-demo" className="mt-2.5 inline-flex items-center gap-1.5 text-[0.76rem] font-semibold text-white">
                  Book a free demo
                  <ArrowRight className="size-3" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-5">
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-brand">
                    Chapter {chapter.index}
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.35rem] font-bold text-ink">{chapter.heading}</h3>
                  <p className="mt-1.5 max-w-xl text-[0.87rem] leading-relaxed text-body">{chapter.blurb}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {chapter.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex flex-col rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand/25 hover:bg-sand/70"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-[0.95rem] font-bold text-ink group-hover:text-brand">{item.name}</p>
                      <ArrowRight
                        className="size-3.5 -translate-x-1 text-line-strong opacity-0 transition-all group-hover:translate-x-0 group-hover:text-brand group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">{item.body}</p>
                  </Link>
                ))}
              </div>

              <p className="mt-4 flex items-center gap-2 text-[0.74rem] text-muted">
                <Check className="size-3.5 text-success" aria-hidden />
                Connected by default: every module reads and writes the same order, stock and guest record.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
