import { cn } from "@/lib/utils";

type Props = {
  items: readonly string[];
  className?: string;
  reverse?: boolean;
  tone?: "light" | "dark";
  ariaLabel: string;
};

/**
 * Pure-CSS marquee: duplicated track, paused on hover, static when the
 * visitor prefers reduced motion (handled globally in globals.css).
 */
export function LogoMarquee({ items, className, reverse = false, tone = "light", ariaLabel }: Props) {
  const track = [...items, ...items];

  return (
    <div className={cn("marquee-mask pause-on-hover overflow-hidden", className)} role="group" aria-label={ariaLabel}>
      <div
        className="marquee-track gap-3 sm:gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            className={cn(
              "inline-flex shrink-0 items-center whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium",
              tone === "light"
                ? "border-line bg-white text-ink-700 shadow-[0_1px_2px_rgba(20,22,26,0.03)]"
                : "border-white/12 bg-white/[0.06] text-white/80",
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
