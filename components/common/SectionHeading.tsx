import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "display-2" | "display-3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
  size = "display-2",
}: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow mb-3", tone === "dark" && "text-brand-100")}>{eyebrow}</p>
      ) : null}
      <Tag className={cn(size, tone === "dark" ? "text-white" : "text-ink")}>{title}</Tag>
      {description ? (
        <p className={cn("lede mt-4", tone === "dark" && "text-white/70", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
