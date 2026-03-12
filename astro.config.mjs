// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://guidelines.luckymedia.dev",
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer", "external"],
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss({ optimize: { minify: true } })],
    ssr: {
      noExternal: ["axobject-query", "zod"],
    },
  },
  integrations: [
    alpinejs(),
    starlight({
      title: "Lucky Media Developer Guide",
      description: "Lucky Media Developer Guide",
      lastUpdated: true,
      logo: {
        src: "/src/assets/logo.svg",
        alt: "Developers Guide",
        replacesTitle: true,
      },
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
            property: "og:title",
            content: "Lucky Media Developer Guide",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: new URL(
              "/favicon.svg",
              "https://guidelines.luckymedia.dev",
            ).href,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:url",
            content: "https://guidelines.luckymedia.dev",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lucky-media/guidelines",
        },
      ],
      components: {
        Header: "./src/overrides/Header.astro",
        Sidebar: "./src/overrides/Sidebar.astro",
        Pagination: "./src/overrides/Pagination.astro",
        PageFrame: "./src/overrides/PageFrame.astro",
        TwoColumnContent: "./src/overrides/TwoColumnContent.astro",
        // This injects your breadcrumbs above every page title
        PageTitle: "./src/components/Breadcrumbs.astro",
      },
      expressiveCode: {
        styleOverrides: {
          borderRadius: "10px",
          borderColor: "#8099e9",
        },
      },
      customCss: [
        "./src/styles/global.css",
        "@fontsource-variable/manrope",
        "@fontsource-variable/roboto-mono",
      ],
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
