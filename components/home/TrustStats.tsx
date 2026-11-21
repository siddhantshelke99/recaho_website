"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Globe2, MapPin, ServerCog, Store } from "lucide-react";
import { Container } from "@/components/common/Container";
import { stats } from "@/lib/site";

const iconMap = [Store, Globe2, MapPin, ServerCog];

function useCountUp(target: number, decimals: number, active: boolean, reduceMotion: boolean) {
  const [value, setValue] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((target * eased).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, decimals, reduceMotion, target]);

  return value;
}

function StatValue({ value, active }: { value: string; active: boolean }) {
  const reduceMotion = useReducedMotion();
  const match = value.match(/^([\d,.]+)(.*)$/);

  if (!match) return <>{value}</>;

  const numeric = Number(match[1].replace(/,/g, ""));
  const suffix = match[2];
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const animated = useCountUp(numeric, decimals, active, Boolean(reduceMotion));

  const formatted =
    decimals > 0 ? animated.toFixed(decimals) : Math.round(animated).toLocaleString("en-US");

  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

export function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-ink py-14 sm:py-16">
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-50" />
      <div aria-hidden className="absolute -right-20 top-0 size-[22rem] rounded-full bg-brand/20 blur-[100px]" />
      <Container className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-display text-[1.35rem] font-bold leading-snug text-white sm:text-[1.6rem]">
            The platform behind restaurants in 18+ countries
          </h2>
          <p className="max-w-sm text-[0.86rem] leading-relaxed text-white/55">
            Figures published by Recaho. Verified operations data is shared with clients under NDA on request.
          </p>
        </div>

        <div ref={ref} className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = iconMap[index] ?? Store;
            return (
              <div key={stat.label} className="border-l border-white/10 pl-5 first:border-l-0 first:pl-0 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
                <Icon className="size-4 text-brand-100/70" aria-hidden />
                <p className="mt-3 font-display text-[2rem] font-bold leading-none text-white sm:text-[2.4rem]">
                  <StatValue value={stat.value} active={inView} />
                </p>
                <p className="mt-2 text-[0.85rem] font-medium text-white/85">{stat.label}</p>
                <p className="mt-0.5 text-[0.75rem] text-white/45">{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
