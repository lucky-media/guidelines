import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

/**
 * Merges Tailwind classes with proper conflict resolution.
 * Use for conditional and composed class names.
 */
export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}

export default cn;