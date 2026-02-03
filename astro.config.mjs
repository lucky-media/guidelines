// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";

const override = (/** @type {string} */ name) =>
  `./src/overrides/${name}.astro`;

// https://astro.build/config
export default defineConfig({
  site: "https://guidelines.luckymedia.dev",
  vite: {
    plugins: [tailwindcss({ optimize: { minify: true } })],
  },
  integrations: [
    alpinejs({ entrypoint: "./src/alpine.ts" }),
    starlight({
      pagefind: true,
      title: "Developer Guide",
      description: "Lucky Media Developer Guide",
      head: [
        {
          tag: "meta",
          attrs: {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "description",
            content: "Lucky Media Developer Guide",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "og:title",
            content: "Lucky Media Developer Guide",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "og:image",
            content: "/meta.jpeg",
          },
        },
      ],
      components: {
        Sidebar: override("Sidebar"),
        Header: override("Header"),
        Search: override("Search"),
        SiteTitle: override("SiteTitle"),
        ContentPanel: override("ContentPanel"),
        PageTitle: override("PageTitle"),
        TableOfContents: override("TableOfContents"),
        TwoColumnContent: override("TwoColumnContent"),
        PageFrame: override("PageFrame"),
        PageSidebar: override("PageSidebar"),
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Introduction",
          slug: "/",
        },
        {
          label: "Onboarding",
          slug: "onboarding",
        },
        {
          label: "Roadmaps",
          autogenerate: { directory: "roadmaps" },
          collapsed: true,
        },
        {
          label: "Version Control",
          autogenerate: { directory: "version-control" },
          collapsed: true,
        },
        {
          label: "Design",
          autogenerate: { directory: "design" },
          collapsed: true,
        },
        {
          label: "Frontend",
          autogenerate: { directory: "frontend" },
          collapsed: true,
        },
        {
          label: "Backend",
          autogenerate: { directory: "backend" },
          collapsed: true,
        },
        {
          label: "Debugging",
          slug: "debugging",
        },
        {
          label: "Testing",
          autogenerate: { directory: "testing" },
          collapsed: true,
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          collapsed: true,
        },
        {
          label: "Team",
          slug: "team",
        },
      ],
    }),
  ],
});
