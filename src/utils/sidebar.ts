import type { SidebarEntry } from "node_modules/@astrojs/starlight/utils/routing/types";

export const checkIsCurrent = (entries: SidebarEntry[]): boolean => {
    return entries.some(entry => entry.type === "link" ? entry.isCurrent : checkIsCurrent(entry.entries))
}

export const slugify = (...names: (string | false | undefined | null)[]) => {
  return names.filter(s => !!(typeof s === "string" ? s.trim() : s))
  .join("-")
    .normalize("NFD")                  // split accented letters
    .replace(/[\u0300-\u036f]/g, "")   // remove accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};
