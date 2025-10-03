// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Lucky Media Developer Guide",
      description: "Lucky Media Developer Guide",
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
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lucky-media/guidelines",
        },
        {
          icon: "external",
          label: "Website",
          href: "https://luckymedia.dev",
        },
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
