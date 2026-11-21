"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import type { NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

type Props = {
  item: NavItem;
  id: string;
  onNavigate?: () => void;
};

export function MegaMenu({ item, id, onNavigate }: Props) {
  const panel = item.panel;
  const [activeTab, setActiveTab] = useState(0);

  if (!panel) return null;

  return (
    <div
      id={id}
      className="fixed left-1/2 top-[66px] w-[min(1140px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_30px_80px_-24px_rgba(20,22,26,0.28)]"
    >
      {panel.kind === "tabs" ? (
        <div>
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
            <p className="text-[0.95rem] font-semibold text-ink">
              <span className="mr-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand">
                {panel.eyebrow}
              </span>
              {panel.title}
            </p>
            <Link
              href={panel.footer.href}
              onClick={onNavigate}
              className="inline-flex shrink-0 items-center gap-1.5 text-[0.8rem] font-semibold text-ink transition-colors hover:text-brand"
            >
              {panel.footer.label}
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>

          <div className="grid lg:grid-cols-[248px_1fr]">
            <div className="border-b border-line bg-sand/60 p-3 lg:border-b-0 lg:border-r">
              <ul className="grid grid-cols-2 gap-1 lg:grid-cols-1">
                {panel.tabs.map((tab, index) => {
                  const selected = index === activeTab;
                  return (
                    <li key={tab.id}>
                      <button
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setActiveTab(index)}
                        onMouseEnter={() => setActiveTab(index)}
                        className={cn(
                          "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[0.84rem] font-medium transition-colors",
                          selected ? "bg-white text-ink shadow-[0_1px_2px_rgba(20,22,26,0.06)]" : "text-body hover:bg-white/70",
                        )}
                      >
                        <span
                          className={cn(
                            "font-display text-[0.66rem] font-bold tabular-nums",
                            selected ? "text-brand" : "text-muted",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {tab.label}
                        <ArrowRight
                          className={cn(
                            "ml-auto size-3.5 shrink-0 transition-opacity",
                            selected ? "text-brand opacity-100" : "opacity-0",
                          )}
                          aria-hidden
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    {panel.tabs[activeTab].heading}
                  </p>
                  <p className="font-display text-lg font-bold text-ink">{panel.tabs[activeTab].blurb}</p>
                </div>
                <Link
                  href={panel.tabs[activeTab].href}
                  onClick={onNavigate}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-[0.76rem] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Explore
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </div>

              <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                {panel.tabs[activeTab].links.map((link) => (
                  <li key={`${panel.tabs[activeTab].id}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group flex h-full items-start gap-2.5 rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-line hover:bg-sand/70"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand/40 transition-colors group-hover:bg-brand" />
                      <span className="min-w-0">
                        <span className="block text-[0.85rem] font-semibold leading-snug text-ink group-hover:text-brand">
                          {link.label}
                        </span>
                        {link.description ? (
                          <span className="mt-0.5 block text-[0.755rem] leading-snug text-muted">{link.description}</span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-0 lg:grid-cols-[1fr_260px]">
          <div className="p-6">
            <p className="text-[0.95rem] font-semibold text-ink">
              <span className="mr-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand">
                {panel.eyebrow}
              </span>
              {panel.title}
            </p>
            <div className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-3">
              {panel.columns.map((column) => (
                <div key={column.title}>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted">{column.title}</p>
                  <ul className="mt-2 space-y-0.5">
                    {column.links.map((link) => (
                      <li key={`${column.title}-${link.label}`}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onNavigate}
                            className="group flex items-start gap-1 rounded-lg px-2 py-1.5 transition-colors hover:bg-sand"
                          >
                            <span>
                              <span className="block text-[0.84rem] font-medium text-ink group-hover:text-brand">
                                {link.label}
                              </span>
                              {link.description ? (
                                <span className="block text-[0.72rem] leading-snug text-muted">{link.description}</span>
                              ) : null}
                            </span>
                            <ArrowUpRight className="mt-1 size-3 shrink-0 text-line-strong" aria-hidden />
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={onNavigate}
                            className="group block rounded-lg px-2 py-1.5 transition-colors hover:bg-sand"
                          >
                            <span className="block text-[0.84rem] font-medium text-ink group-hover:text-brand">
                              {link.label}
                            </span>
                            {link.description ? (
                              <span className="block text-[0.72rem] leading-snug text-muted">{link.description}</span>
                            ) : null}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {panel.feature ? (
            <div className="relative overflow-hidden border-t border-line bg-ink p-6 lg:border-l lg:border-t-0">
              <div aria-hidden className="absolute -bottom-14 -right-10 size-40 rounded-full bg-brand/40 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <span className="grid size-9 place-items-center rounded-xl bg-white/10">
                  <Sparkles className="size-4 text-brand-100" aria-hidden />
                </span>
                <p className="mt-4 font-display text-[1.05rem] font-bold leading-snug text-white">
                  {panel.feature.title}
                </p>
                <p className="mt-2 text-[0.79rem] leading-relaxed text-white/60">{panel.feature.body}</p>
                <Link
                  href={panel.feature.href}
                  onClick={onNavigate}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.8rem] font-semibold text-white transition-colors hover:text-brand-100"
                >
                  {panel.feature.linkLabel}
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-sand/60 px-6 py-2.5">
        <p className="text-[0.76rem] text-muted">Not sure where to start? A Recaho specialist can map it for you.</p>
        <Link href="/book-demo" onClick={onNavigate} className="text-[0.76rem] font-semibold text-brand hover:text-brand-600">
          Book a free demo →
        </Link>
      </div>
    </div>
  );
}
