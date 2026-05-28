---
title: Astro Migration
slug: guides/astro-migration
draft: true
sidebar:
  hidden: true
  badge:
    text: Draft
    variant: caution
  order: 3
---

# Migrating from Next.js to Astro

## Introduction

If you use **Next.js**, you're used to React-first development, SSR, and a clear opinion on how to build web apps. That works great, until you realize most of your app is static content and you're shipping a ton of JavaScript for no good reason.

That's where **Astro** fits in. Astro is a web framework built for **content-driven websites**. Its core idea: ship zero JavaScript by default, and only hydrate what actually needs it.

This guide covers:

- **Why you might want to migrate**
- **The steps we took** (with real examples)
- **How to plan and run your own migration**

## Why Migrate from Next.js to Astro?

1. **Zero JS by default**
   Astro ships no JavaScript to the browser unless you opt in. This cuts bundle sizes significantly compared to React apps that hydrate globally.

2. **Simpler for static sites**
   Many projects don't need full SSR. Astro defaults to **static site generation (SSG)** but supports SSR when you need it.

3. **Framework flexibility**
   Astro supports **React, Vue, Svelte, Solid, and more** inside `.astro` components. You don't have to throw away your existing React code.

4. **Built-in optimizations**
   Image optimization, partial hydration (`client:load`, `client:visible`, etc.), and solid defaults for SEO and accessibility come out of the box.

## The Migration Process

Here's the step-by-step process we followed.

### 1. Create a New Astro Project

Start fresh with a new Astro project. Don't try to convert your Next.js repo in place.

```bash
# Create new project
npm create astro@latest my-project

# Choose options
cd my-project
npm install
```

This gives you a clean setup with a `src/` folder, `astro.config.mjs`, and a working `npm run dev`.

> **Tip:** Set up the new Astro project in a separate folder so it doesn't mix with your existing files. Once the migration is done, remove the starter code and move your project files into the root.

### 2. Install Tailwind CSS

If you were already using Tailwind in Next.js, adding it to Astro takes one command:

```bash
npx astro add tailwind
```

This adds `tailwind.config.js`, `postcss.config.mjs`, and updates `astro.config.mjs`. You can start writing Tailwind classes in `.astro` files or React components right away.

Example:

```astro
---
// src/components/Hero.astro
---
<section class="bg-gray-900 text-white p-12">
  <h1 class="text-4xl font-bold">Welcome to Astro 🚀</h1>
  <p class="mt-4 text-lg">Blazing fast, zero-JS by default.</p>
</section>
```

### 3. Migrate Pages

In Next.js, pages live in `/pages`. In Astro, they live in `/src/pages`. The routing works the same way — the file path maps to the URL.

- **Next.js:** `pages/index.js` → `http://localhost:3000/`
- **Astro:** `src/pages/index.astro` → `http://localhost:4321/`

Start with your static pages. Here's a simple example:

**Next.js (`index.js`):**

```jsx
export default function Home() {
  return (
    <main>
      <h1>Hello from Next.js</h1>
    </main>
  );
}
```

**Astro (index.astro):**

```astro
---
import Layout from "../layouts/BaseLayout.astro";
---
<Layout>
  <h1>Hello from Astro</h1>
</Layout>
```

Two things to note:
- No hydration needed for static content.
- The layout system replaces `_app.js`.

### 4. Keep Using React Where Needed

You don't have to rewrite your React components. Drop them into Astro and mark how they should hydrate:

Example:

```astro
---
import Counter from "../components/Counter.jsx";
---
<h2>Interactive Part</h2>
<Counter client:load />
```

`client:load` tells Astro to hydrate `Counter` on the client. Everything else on the page stays static. Most of our existing React components needed little or no changes.

Our existing React components needed little to no change — we just dropped them into Astro and marked hydration.

### 5. Add Global Styles & Assets

In Next.js, global CSS goes in `pages/_app.js`.

In Astro, create `src/styles/global.css`:

```css
@import "tailwindcss";

body {
  font-family: system-ui, sans-serif;
}
```

Import it in `astro.config.mjs` or directly in `src/layouts/BaseLayout.astro`.

Static assets like `favicon.svg` and images go in the `/public` folder — same as Next.js.

### 6. Set Up Routing and i18n

Astro uses file-based routing, just like Next.js. For multi-language support, use dynamic routes:

```
src/pages/[lang]/index.astro
```

```astro
---
export async function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "sq" } },
    { params: { lang: "mk" } },
  ];
}
---
<h1>Welcome in {Astro.params.lang}!</h1>
```

### 7. Configure Build & Deploy

Astro supports two output modes:

- **Static (default):** Works with Netlify, Vercel, GitHub Pages.
- **SSR:** For when you need server-side rendering or API routes.

Example from our `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  integrations: [tailwind()],
  output: "static", // or "server"
});
```

## Your Migration Playbook
Here's a checklist you can follow for your own migration:

1. **Audit your Next.js app**
   - Which pages are static? Migrate those first.
   - Which parts need client-side interactivity? Use React/Vue/Svelte inside Astro.
   - Are you using server functions or API routes? You may need SSR or Astro API routes.

2. **Create a fresh Astro project**
   Don't mutate your Next.js repo. Start clean.

3. **Install integrations**
   Tailwind, MDX, i18n — whatever you need.

4. **Move static pages**
   Convert `pages/*.js` files to `.astro` files.

5. **Move layouts**
   Replace `_app.js` and `_document.js` with `src/layouts`.

6. **Add interactive components gradually**
   Use `client:load`, `client:visible`, or `client:idle` to hydrate only when needed.

7. **Set up global styles and assets**
   Import CSS files and put static assets in `/public`.

8. **Configure your build**
   Set up `.env`, update `astro.config.mjs`, and test with `npm run build`.

9. **Deploy**
   Vercel, Netlify, or your preferred hosting provider all work well with Astro.

10. **Iterate**
    Replace React pages with Astro components over time as it makes sense.

## Summary

Migrating from Next.js to Astro isn't about abandoning React. It's about **using React where you need it and skipping it where you don't**. The result is faster pages, smaller bundles, and a simpler codebase.

What made our migration smooth:
- We started with static pages.
- We reused existing React components as-is.
- Tailwind and i18n required minimal changes.

If you're building **content-heavy sites**, marketing pages, blogs, docs, product pages, then Astro is worth a serious look.

## Our Custom Astro Starter Kit

Our in-house **Astro Starter Kit** is a production-ready base for building content-focused sites quickly and consistently. Every new project starts from the same reliable setup so we're not reinventing the wheel each time.

### What's Included

- **Unified Stack** - Pre-configured with **Astro 5**, **TypeScript**, **Tailwind CSS 4**, and **Alpine.js**.
- **Team Standards Built-In** - ESLint, Prettier, Husky, and Commitlint are set up out of the box to keep code style consistent and commits clean.

### Core Features

| Feature | Description |
|---|---|
| Astro 5 | Fast, content-driven architecture with zero-JS by default |
| Tailwind CSS 4 | Utility-first CSS with dark-mode and design-token support |
| Alpine.js | Lightweight reactive JS for drop-in interactivity |
| Responsive Design | Mobile-first breakpoints and fluid layouts |
| SEO & Open Graph | Pre-built SEO component, sitemap generation, and link prefetching |
| TypeScript | Strict typing with path aliases (`@/`) for cleaner imports |
| Component Library | Reusable, theme-aware components with variants |
| Favicon & Assets | Centralized favicon management and optimized asset pipeline |

### Quick Start

```bash
git clone git@github.com:your-org/astro-starter-kit.git my-new-project
cd my-new-project
npm install
npm run dev
```

Open `http://localhost:4321` and start building.

This starter kit makes sure every project at _Lucky Media_ begins with the same proven stack, less setup time, consistent performance, accessibility, and maintainability across all client sites.

For full setup and usage instructions, see the [GitHub repository](https://github.com/lucky-media/astrostarter).