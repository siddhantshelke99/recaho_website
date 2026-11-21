import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("shell", className)}>{children}</div>;
}

export function ContainerNarrow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("shell-narrow", className)}>{children}</div>;
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
  spacing?: "default" | "compact" | "none";
};

export function Section({ children, className, as: Tag = "section", id, spacing = "default" }: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        spacing === "default" && "py-16 sm:py-20 lg:py-28",
        spacing === "compact" && "py-10 sm:py-14",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
