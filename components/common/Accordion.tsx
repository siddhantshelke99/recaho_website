"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { question: string; answer: string };

type Props = {
  items: readonly AccordionItem[];
  className?: string;
  defaultOpen?: number | null;
  tone?: "light" | "dark";
};

export function Accordion({ items, className, defaultOpen = 0, tone = "light" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("divide-y", tone === "dark" ? "divide-white/10" : "divide-line", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className={cn(
                  "flex w-full items-start justify-between gap-4 py-5 text-left transition-colors",
                  tone === "dark" ? "text-white hover:text-brand-100" : "text-ink hover:text-brand",
                )}
              >
                <span className="font-display text-[1.02rem] font-semibold leading-snug sm:text-[1.08rem]">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    tone === "dark" ? "border-white/20" : "border-line-strong",
                    open && "rotate-45 border-brand bg-brand text-white",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={cn("pb-5 pr-10 text-[0.95rem] leading-relaxed", tone === "dark" ? "text-white/70" : "text-body")}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
