"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Globe2 } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { cn } from "@/lib/utils";

type City = { city: string; country: string; tz: string; currency: string; region: string };

const cities: City[] = [
  { city: "Pune", country: "India", tz: "Asia/Kolkata", currency: "INR", region: "Asia-Pacific" },
  { city: "Dubai", country: "UAE", tz: "Asia/Dubai", currency: "AED", region: "Middle East" },
  { city: "Doha", country: "Qatar", tz: "Asia/Qatar", currency: "QAR", region: "Middle East" },
  { city: "Muscat", country: "Oman", tz: "Asia/Muscat", currency: "OMR", region: "Middle East" },
  { city: "Singapore", country: "Singapore", tz: "Asia/Singapore", currency: "SGD", region: "Asia-Pacific" },
  { city: "London", country: "United Kingdom", tz: "Europe/London", currency: "GBP", region: "Europe" },
  { city: "New York", country: "USA", tz: "America/New_York", currency: "USD", region: "Americas" },
  { city: "Sydney", country: "Australia", tz: "Australia/Sydney", currency: "AUD", region: "Asia-Pacific" },
];

const regions = ["All regions", "Middle East", "Asia-Pacific", "Europe", "Americas"] as const;

function timeIn(timeZone: string, now: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(now);
}

export function GlobalPresence() {
  const [region, setRegion] = useState<(typeof regions)[number]>("All regions");
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  const visible = region === "All regions" ? cities : cities.filter((city) => city.region === region);

  return (
    <Section id="global-presence" className="relative overflow-hidden border-b border-line bg-sand">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-45" />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="eyebrow">Global presence</p>
            <h2 className="display-2 mt-3 text-ink">From one café to 18+ countries.</h2>
            <p className="lede mt-4 max-w-xl">
              Wherever you open next, Recaho bills in the local currency and time zone — and head office sees every
              outlet live, on one screen.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { value: "15,000+", label: "restaurants" },
                { value: "18+", label: "countries" },
                { value: "300+", label: "cities" },
                { value: "99.998%", label: "uptime" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-line bg-white px-4 py-3">
                  <p className="font-display text-[1.3rem] font-extrabold leading-none text-ink">{stat.value}</p>
                  <p className="mt-1 text-[0.72rem] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Multi-currency billing", "Local tax & compliance", "Outlet-level time zones", "Central head-office view"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white px-3 py-1.5 text-[0.75rem] font-medium text-ink-700"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[0.84rem] font-semibold text-white transition-colors hover:bg-ink-800"
            >
              Talk to us about your market
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_24px_60px_-50px_rgba(20,22,26,0.55)]">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-xl bg-brand-50">
                  <Globe2 className="size-4 text-brand" aria-hidden />
                </span>
                <div>
                  <p className="text-[0.8rem] font-semibold text-ink">Recaho Cloud · Outlets worldwide</p>
                  <p className="text-[0.66rem] text-muted">Illustrative cities across live deployment regions</p>
                </div>
              </div>
              <span className="hidden rounded-full bg-success/10 px-2 py-1 text-[0.56rem] font-bold uppercase tracking-[0.08em] text-success sm:inline-flex">
                Live
              </span>
            </div>

            <div className="flex gap-1.5 overflow-x-auto border-b border-line px-3 py-2.5 no-scrollbar">
              {regions.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={region === item}
                  onClick={() => setRegion(item)}
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold transition-colors",
                    region === item ? "bg-ink text-white" : "bg-sand-200 text-body hover:bg-sand-300",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0">
              {visible.map((city, index) => (
                <li
                  key={city.city}
                  className={cn(
                    "flex items-center justify-between gap-2 px-4 py-3",
                    index % 2 === 0 ? "sm:border-r sm:border-line" : "",
                    index < visible.length - 2 ? "sm:border-b sm:border-line" : "",
                  )}
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <div className="min-w-0">
                      <p className="truncate text-[0.8rem] font-semibold text-ink">{city.city}</p>
                      <p className="truncate text-[0.64rem] text-muted">
                        {city.country} · billing in {city.currency}
                      </p>
                    </div>
                  </div>
                  <p className="shrink-0 font-display text-[0.78rem] font-bold tabular-nums text-ink-700">
                    {now ? timeIn(city.tz, now) : "--:--"}
                  </p>
                </li>
              ))}
            </ul>

            <div className="border-t border-line bg-sand/60 px-5 py-3">
              <p className="text-[0.66rem] leading-relaxed text-muted">
                Recaho publishes operations in 18+ countries and 300+ cities. The live country list and tax setup for
                your outlets are confirmed during the demo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
