import type { SidebarEntry } from "node_modules/@astrojs/starlight/utils/routing/types";

export const checkIsCurrent = (entries: SidebarEntry[]): boolean => {
  return entries.some(entry => entry.type === "link" ? entry.isCurrent : checkIsCurrent(entry.entries))
}

export const getCurrent = (entries: SidebarEntry[]): SidebarEntry[] => {
  for (const entry of entries) {
    if (entry.type === 'link' && entry.isCurrent) return [entry];
    else if (entry.type === "group") {
      for (const subEntry of entry.entries) {
        if (subEntry.type === "link" && subEntry.isCurrent) return [entry, subEntry];
      }
    }
  }
  return [];
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