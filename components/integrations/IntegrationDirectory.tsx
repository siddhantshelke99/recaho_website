"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { integrationCategories } from "@/data/integrations";
import { cn } from "@/lib/utils";

export function IntegrationDirectory() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const results = useMemo(() => {
    const normalised = query.trim().toLowerCase();
    return integrationCategories
      .filter((category) => activeCategory === "all" || category.id === activeCategory)
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          normalised ? `${item.name} ${item.note ?? ""} ${category.name}`.toLowerCase().includes(normalised) : true,
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [query, activeCategory]);

  const total = results.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <label htmlFor="integration-search" className="sr-only">
            Search integrations
          </label>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
          <input
            id="integration-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by platform or category"
            className="h-11 w-full rounded-lg border border-line bg-white pl-9 pr-3 text-[0.88rem] text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
          />
        </div>
        <p className="text-[0.78rem] text-muted">
          Showing <strong className="font-semibold text-ink">{total}</strong> connected platforms
        </p>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          aria-pressed={activeCategory === "all"}
          className={cn(
            "shrink-0 rounded-full border px-3.5 py-1.5 text-[0.8rem] font-medium transition-colors",
            activeCategory === "all" ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-700 hover:bg-sand",
          )}
        >
          All
        </button>
        {integrationCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            aria-pressed={activeCategory === category.id}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-1.5 text-[0.8rem] font-medium transition-colors",
              activeCategory === category.id
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-ink-700 hover:bg-sand",
            )}
          >
            {category.shortName}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-6">
        {results.length === 0 ? (
          <div className="rounded-xl border border-line bg-white p-8 text-center">
            <p className="font-display text-[1rem] font-bold text-ink">No match for “{query}”</p>
            <p className="mt-1 text-[0.85rem] text-body">
              Tell us which platform you use and the team will confirm whether an integration exists or can be built.
            </p>
            <Link
              href="/contact?topic=integration"
              className="mt-4 inline-flex rounded-[var(--radius-btn)] bg-brand px-4 py-2 text-[0.82rem] font-medium text-white hover:bg-brand-600"
            >
              Ask about an integration
            </Link>
          </div>
        ) : (
          results.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-28">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-[1.05rem] font-bold text-ink">{category.name}</h3>
                <span className="text-[0.72rem] text-muted">{category.items.length} platforms</span>
              </div>
              <p className="mt-1 max-w-2xl text-[0.84rem] leading-relaxed text-body">{category.description}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={`${category.id}-${item.name}`}
                    className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-3 py-2.5"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-md bg-brand-50 font-display text-[0.62rem] font-bold text-brand">
                      {item.name.slice(0, 2).toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[0.82rem] font-medium text-ink">{item.name}</p>
                      {item.note ? <p className="truncate text-[0.68rem] text-muted">{item.note}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
