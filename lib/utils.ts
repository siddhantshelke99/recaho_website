import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Joins path segments into a single absolute-path string. */
export function path(...segments: string[]) {
  return "/" + segments.filter(Boolean).join("/");
}
