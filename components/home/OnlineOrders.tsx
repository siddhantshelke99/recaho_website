"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Radio } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { cn } from "@/lib/utils";

const tabs = ["All", "Preparing", "Food ready", "Dispatched"] as const;

const orders = [
  { id: "6190-0166", channel: "Zomato", items: "1 × Butter Chicken, 2 × Naan", value: "₹842", state: "Preparing" },
  { id: "6190-0171", channel: "Direct web", items: "1 × Chicken Biryani, 1 × Lassi", value: "₹498", state: "Food ready" },
  { id: "4412-9081", channel: "Swiggy", items: "2 × Paneer Tikka, 1 × Cola", value: "₹664", state: "Preparing" },
  { id: "4412-9084", channel: "ONDC", items: "1 × Family Combo", value: "₹1,240", state: "Dispatched" },
];

const stateTone: Record<string, string> = {
  Preparing: "bg-warning/10 text-warning",
  "Food ready": "bg-success/10 text-success",
  Dispatched: "bg-brand/10 text-brand",
};

const points = [
  "Auto-accept and KOT print the moment an order lands",
  "One menu synced to every connected platform",
  "Status updates pushed back to each channel",
  "One report for revenue and prep times across apps",
];

export function OnlineOrders() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const visible = active === "All" ? orders : orders.filter((order) => order.state === active);

  return (
    <Section id="online-orders" className="relative overflow-hidden border-y border-line bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="eyebrow">Online orders · every channel</p>
            <h2 className="display-2 mt-3 text-ink">One screen for every online order.</h2>
            <p className="lede mt-4 max-w-xl">
              Zomato, Swiggy, ONDC, your own ordering site and the counter all land in the same queue. Accept, print the
              KOT, mark food ready and track every rider — without a tablet per platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["1 screen for every app", "0 extra counter tablets", "Live menu & status sync"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-sand px-3 py-1.5 text-[0.76rem] font-medium text-ink-700"
                >
                  {chip}
                </span>
              ))}
            </div>

            <ul className="mt-7 grid gap-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[0.9rem] text-ink-700">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50">
                    <Check className="size-3 text-brand" aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="/products/online-ordering"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[0.84rem] font-semibold text-white transition-colors hover:bg-ink-800"
              >
                Explore online ordering
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link href="/integrations" className="text-[0.84rem] font-semibold text-brand hover:text-brand-600">
                See all integrations
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[28px] border border-line bg-sand/60 sm:-inset-5"
            />
            <div className="relative overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_60px_-40px_rgba(20,22,26,0.6)]">
              <div className="flex items-center justify-between border-b border-line bg-sand/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-lg bg-white">
                    <Radio className="size-3.5 text-brand" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold text-ink">Incoming orders</p>
                    <p className="text-[0.6rem] text-muted">All channels · one queue</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.08em] text-success">
                  <span className="size-1.5 animate-pulse rounded-full bg-success" aria-hidden />
                  Live
                </span>
              </div>

              <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
                {[
                  { label: "Orders today", value: "186" },
                  { label: "Avg. accept", value: "9s" },
                  { label: "Menu sync", value: "Live" },
                ].map((stat) => (
                  <div key={stat.label} className="px-4 py-3">
                    <p className="text-[0.58rem] font-medium uppercase tracking-[0.08em] text-muted">{stat.label}</p>
                    <p className="mt-0.5 font-display text-[1rem] font-bold text-ink">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 border-b border-line px-3 py-2.5">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    aria-pressed={active === tab}
                    onClick={() => setActive(tab)}
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[0.66rem] font-semibold transition-colors",
                      active === tab ? "bg-ink text-white" : "bg-sand-200 text-body hover:bg-sand-300",
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <ul className="divide-y divide-line">
                {visible.map((order) => (
                  <li key={order.id} className="flex items-center gap-3 px-4 py-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-50 font-display text-[0.6rem] font-bold text-brand">
                      {order.channel.slice(0, 2).toUpperCase()}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[0.76rem] font-semibold text-ink">
                        #{order.id} · {order.channel}
                      </p>
                      <p className="truncate text-[0.66rem] text-muted">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[0.74rem] font-semibold text-ink">{order.value}</p>
                      <span
                        className={cn(
                          "mt-0.5 inline-flex rounded-full px-1.5 py-0.5 text-[0.54rem] font-semibold",
                          stateTone[order.state],
                        )}
                      >
                        {order.state}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-line bg-sand/60 px-4 py-2.5">
                <p className="text-[0.62rem] text-muted">Orders via {orders.length} channels</p>
                <p className="text-[0.62rem] font-semibold text-ink">One kitchen queue</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
