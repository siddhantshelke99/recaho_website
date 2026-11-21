"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled ? "border-line bg-white/90 backdrop-blur-xl" : "border-transparent bg-white/75 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[74px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8">
          <Logo />

          <DesktopNavigation />

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.phones[0].replace(/\s/g, "")}`}
              className="hidden items-center gap-1.5 text-[0.82rem] font-medium text-body transition-colors hover:text-brand 2xl:flex"
            >
              <Phone className="size-3.5" aria-hidden />
              {site.phones[0]}
            </a>
            <Link
              href="/contact"
              className="hidden text-[0.85rem] font-medium text-ink-700 transition-colors hover:text-brand xl:inline-flex"
            >
              Talk to sales
            </Link>
            <Link
              href="/book-demo"
              className="group hidden h-11 items-center gap-2.5 rounded-full bg-brand pl-5 pr-1.5 text-[0.875rem] font-semibold text-white shadow-[0_8px_20px_-10px_rgba(194,30,28,0.7)] transition-colors hover:bg-brand-600 sm:inline-flex"
            >
              Book a demo
              <span className="grid size-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" aria-hidden />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-sand lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
