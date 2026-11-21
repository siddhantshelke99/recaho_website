"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { MegaMenu } from "./MegaMenu";

export function DesktopNavigation() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  return (
    <div ref={navRef} className="relative hidden lg:block" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
      <nav aria-label="Primary">
        <ul className="flex items-center gap-0.5 rounded-full border border-line/90 bg-white/70 px-1.5 py-1.5 shadow-[0_1px_2px_rgba(20,22,26,0.04)] backdrop-blur">
          {navigation.map((item) => {
            const base = item.href.split("?")[0].split("#")[0];
            const active = base === "/" ? pathname === "/" : pathname.startsWith(base);
            const menuOpen = openMenu === item.label;
            const menuId = `menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

            if (!item.panel) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex h-9 items-center whitespace-nowrap rounded-full px-3 text-[0.85rem] font-medium transition-colors",
                      active ? "bg-sand-200 text-ink" : "text-ink-700 hover:bg-sand hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.label} className="relative">
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(item.label)}
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(item.label);
                  }}
                  onFocus={() => {
                    cancelClose();
                    setOpenMenu(item.label);
                  }}
                  className={cn(
                    "inline-flex h-9 items-center gap-1 whitespace-nowrap rounded-full px-3 text-[0.85rem] font-medium transition-colors",
                    menuOpen ? "bg-sand-200 text-ink" : "text-ink-700 hover:bg-sand hover:text-ink",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={cn("size-3.5 text-muted transition-transform duration-200", menuOpen && "rotate-180")}
                  />
                </button>
                {menuOpen ? <MegaMenu item={item} id={menuId} onNavigate={() => setOpenMenu(null)} /> : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
