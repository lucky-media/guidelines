/**
 * Sidebar types derived from Starlight's public route data.
 * Avoids fragile node_modules path imports.
 */
import type { StarlightRouteData } from "@astrojs/starlight/route-data";

/** Single sidebar entry (link or group) from Starlight's sidebar array. */
export type SidebarEntry = StarlightRouteData["sidebar"][number];

/** Sidebar link entry. */
export type SidebarLink = Extract<SidebarEntry, { type: "link" }>;

/** Sidebar group entry with nested entries. */
export type SidebarGroup = Extract<SidebarEntry, { type: "group" }>;
