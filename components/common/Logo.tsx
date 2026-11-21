import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Renders the wordmark in white for dark panels (footer, mobile drawer header). */
  onDark?: boolean;
};

/**
 * Recaho lockup: the brand's red play mark plus the lowercase wordmark.
 * The supplied PNG has a white wordmark and is retained at
 * /logos/recaho-logo.png for dark backgrounds only; this vector lockup keeps
 * the same mark legible on the light header and footer.
 */
export function Logo({ className, onDark = false }: Props) {
  return (
    <Link
      href="/"
      aria-label="Recaho — home"
      className={cn("inline-flex items-center gap-2 transition-opacity hover:opacity-85", className)}
    >
      <svg viewBox="0 0 40 40" aria-hidden className="size-7 shrink-0 sm:size-8">
        <circle cx="20" cy="20" r="19" fill="#C21E1C" />
        <path d="M13 26.5V13.5l14.5 6.5L13 26.5Z" fill="#fff" />
        <circle cx="34.5" cy="7" r="3.5" fill="#2FBF71" />
      </svg>
      <span
        className={cn(
          "font-display text-[1.55rem] font-extrabold leading-none tracking-[-0.055em]",
          onDark ? "text-white" : "text-ink",
        )}
      >
        recaho
      </span>
    </Link>
  );
}
