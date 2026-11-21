"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Phone, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { ButtonLink } from "@/components/common/Button";
import { Logo } from "@/components/common/Logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={cn("fixed inset-0 z-[60] lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-[26rem] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-sand"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-3">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isExpanded = expanded === item.label;

              return (
                <li key={item.label} className="border-b border-line/70 pb-1 last:border-0">
                  <div className="flex items-center">
                    <Link href={item.href} onClick={onClose} className="flex-1 py-3 text-[0.98rem] font-medium text-ink">
                      {item.label}
                    </Link>
                    {item.panel ? (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                        onClick={() => setExpanded(isExpanded ? null : item.label)}
                        className="grid size-9 place-items-center rounded-full border border-line text-muted"
                      >
                        <ChevronDown className={cn("size-4 transition-transform", isExpanded && "rotate-180")} aria-hidden />
                      </button>
                    ) : null}
                  </div>

                  {item.panel && isExpanded ? (
                    <div className="mb-3 space-y-3 rounded-2xl bg-sand/70 p-3">
                      {item.panel.kind === "tabs"
                        ? item.panel.tabs.map((tab) => (
                            <div key={tab.id}>
                              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted">
                                {tab.label}
                              </p>
                              <ul className="mt-1">
                                {tab.links.map((link) => (
                                  <li key={`${tab.id}-${link.label}`}>
                                    <Link
                                      href={link.href}
                                      onClick={onClose}
                                      className="block py-1.5 text-[0.86rem] text-ink-700"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                        : item.panel.columns.map((group) => (
                            <div key={group.title}>
                              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted">
                                {group.title}
                              </p>
                              <ul className="mt-1">
                                {group.links.map((link) => (
                                  <li key={`${group.title}-${link.label}`}>
                                    <Link
                                      href={link.href}
                                      onClick={onClose}
                                      className="block py-1.5 text-[0.86rem] text-ink-700"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-2 border-t border-line px-5 py-4">
          <ButtonLink href="/book-demo" size="lg" className="w-full" onClick={onClose}>
            Book a Free Demo
          </ButtonLink>
          <a
            href={`tel:${site.phones[0].replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 py-2 text-[0.85rem] font-medium text-muted"
          >
            <Phone className="size-3.5" aria-hidden /> {site.phones[0]}
          </a>
        </div>
      </div>
    </div>
  );
}
