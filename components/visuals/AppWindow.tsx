import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
  badge?: string;
  bodyClassName?: string;
};

/**
 * Browser/POS style chrome for the code-rendered product mockups.
 * All screens are illustrative product interfaces built from Recaho's design
 * tokens — not screenshots of TMBill or stock imagery.
 */
export function AppWindow({
  title,
  subtitle,
  children,
  className,
  tone = "light",
  badge = "Demo data",
  bodyClassName,
}: Props) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border shadow-[0_20px_60px_-24px_rgba(20,22,26,0.35)]",
        dark ? "border-white/10 bg-ink-800" : "border-line bg-white",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b px-3.5 py-2.5",
          dark ? "border-white/10 bg-white/[0.03]" : "border-line bg-sand/70",
        )}
      >
        <span aria-hidden className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-[#e8685f]" />
          <span className="size-2 rounded-full bg-[#e8bf5f]" />
          <span className="size-2 rounded-full bg-[#7cbf8c]" />
        </span>
        <div className="ml-1.5 min-w-0">
          <p className={cn("truncate text-[0.68rem] font-semibold", dark ? "text-white/80" : "text-ink")}>{title}</p>
          {subtitle ? (
            <p className={cn("truncate text-[0.6rem]", dark ? "text-white/40" : "text-muted")}>{subtitle}</p>
          ) : null}
        </div>
        {badge ? (
          <span
            className={cn(
              "ml-auto shrink-0 rounded-full border px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.08em]",
              dark ? "border-white/15 text-white/50" : "border-line bg-white text-muted",
            )}
          >
            {badge}
          </span>
        ) : null}
      </div>
      <div className={cn("p-3 sm:p-4", bodyClassName)}>{children}</div>
    </div>
  );
}

export function MiniStat({
  label,
  value,
  delta,
  tone = "light",
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-2.5",
        tone === "dark" ? "border-white/10 bg-white/[0.04]" : "border-line bg-white",
      )}
    >
      <p className={cn("text-[0.58rem] font-medium uppercase tracking-[0.08em]", tone === "dark" ? "text-white/45" : "text-muted")}>
        {label}
      </p>
      <p className={cn("mt-1 font-display text-[1.05rem] font-bold leading-none", tone === "dark" ? "text-white" : "text-ink")}>
        {value}
      </p>
      {delta ? <p className="mt-1 text-[0.58rem] font-medium text-success">{delta}</p> : null}
    </div>
  );
}
