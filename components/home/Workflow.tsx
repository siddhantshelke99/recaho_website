"use client";

import { useState } from "react";
import { ArrowRight, Check, CircleDot } from "lucide-react";
import { Container, Section } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ButtonLink } from "@/components/common/Button";
import { workflowSteps } from "@/data/home";
import { cn } from "@/lib/utils";

export function Workflow() {
  const [active, setActive] = useState(0);
  const step = workflowSteps[active];

  return (
    <Section id="how-it-works" className="relative overflow-hidden border-y border-line bg-sand">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />
      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="How it works"
            title="One order, from QR scan to sales report."
            description="Follow a single order through the platform. Every step below is a capability Recaho already runs in production restaurants."
          />
          <div className="flex items-center gap-2 text-[0.78rem] text-muted">
            <CircleDot className="size-3.5 text-brand" aria-hidden />
            Step {active + 1} of {workflowSteps.length}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-10">
          <ol className="relative space-y-0.5" aria-label="Order lifecycle steps">
            {workflowSteps.map((item, index) => {
              const selected = index === active;
              return (
                <li key={item.step}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={selected ? "step" : undefined}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                      selected ? "bg-white shadow-[0_1px_2px_rgba(20,22,26,0.05)]" : "hover:bg-white/60",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-[0.7rem] font-bold tabular-nums",
                        selected ? "text-brand" : "text-muted",
                      )}
                    >
                      {item.step}
                    </span>
                    <span
                      className={cn(
                        "min-w-0 flex-1 truncate text-[0.86rem]",
                        selected ? "font-semibold text-ink" : "text-body",
                      )}
                    >
                      {item.title}
                    </span>
                    {selected ? (
                      <ArrowRight className="size-3.5 text-brand" aria-hidden />
                    ) : (
                      <span className="text-[0.66rem] uppercase tracking-[0.06em] text-line-strong">{item.tag}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-line bg-white p-6 sm:p-8">
            <div
              aria-hidden
              className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(194,30,28,0.07),transparent_70%)]"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{step.tag}</p>
                  <h3 className="display-3 mt-2 max-w-md">{step.title}</h3>
                </div>
                <span className="font-display text-[3rem] font-bold leading-none text-brand/12 sm:text-[4rem]">
                  {step.step}
                </span>
              </div>

              <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-body">{step.description}</p>

              <div className="mt-7 rounded-xl border border-line bg-sand/70 p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted">System activity</p>
                <ul className="mt-3 space-y-2">
                  {[
                    `${step.tag} event recorded with timestamp`,
                    "Data flows to connected modules automatically",
                    "Available in reports and audit history",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[0.82rem] text-ink-700">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {workflowSteps.map((item, index) => (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Go to step ${item.step}: ${item.title}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      index === active ? "w-8 bg-brand" : "w-4 bg-line-strong hover:bg-brand/40",
                    )}
                  />
                ))}
                <div className="ml-auto flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActive((active - 1 + workflowSteps.length) % workflowSteps.length)}
                    className="rounded-lg border border-line px-2.5 py-1.5 text-[0.74rem] font-medium text-ink-700 transition-colors hover:border-ink/20"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive((active + 1) % workflowSteps.length)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-2.5 py-1.5 text-[0.74rem] font-medium text-white transition-colors hover:bg-ink-800"
                  >
                    Next step
                    <ArrowRight className="size-3" aria-hidden />
                  </button>
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <ButtonLink href="/book-demo" variant="secondary" size="sm" withArrow>
                  See this flow in a live demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
