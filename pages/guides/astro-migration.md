
# Migrating from Next.js to Astro: A Step-by-Step Guide

## Introduction

If you’ve been working with **Next.js**, you’re used to React-first development, server-side rendering, and an opinionated approach to building modern web apps. But what if most of your app is static content, and you don’t need the full overhead of React on every page?

That’s where **Astro** shines. Astro is a modern web framework built for **content-driven websites**. Its philosophy: *“Bring your own UI framework, but only ship what you need to the browser.”*

Our team recently migrated one of our projects from Next.js to Astro, and in this article, I’ll walk you through:

* **Why we migrated**
* **Steps we took** (with real examples)
* **How you can plan and execute your own migration**



## Why Migrate from Next.js to Astro?

Before diving into the how, let’s look at the *why*:

1. **Performance (Zero JS by default)**
   Astro ships **no JavaScript** to the browser unless you explicitly opt in. This can reduce bundle sizes dramatically compared to React apps where hydration happens globally.

2. **Simplicity for static sites**
   Many projects don’t need full SSR. Astro defaults to **static site generation (SSG)** but still supports SSR if needed.

3. **Framework flexibility**
   Astro supports **React, Vue, Svelte, Solid, and more** inside `.astro` components. You don’t have to throw away existing React code — you can use it alongside new Astro components.

4. **Built-in optimizations**
   Image optimization, partial hydration (`client:load`, `client:visible`, etc.), and great defaults for SEO and accessibility.



## Our Migration Process

Here’s the high-level flow we followed when migrating from Next.js to Astro.

### 1. Create a New Astro Project

We started fresh with a new Astro project.

```bash
# Create new project
npm create astro@latest my-project

# Choose options
cd my-project
npm install
```

This gave us a clean Astro setup with a `src/` folder, `astro.config.mjs`, and ready-to-go `npm run dev`.


Tip: When creating a new Astro project, it’s a good idea to set it up in a separate folder so you don’t mix it with your existing files. Once you’ve finished the migration, you can delete the default starter code and move your project files into the root folder.

### 2. Install Tailwind CSS

In our Next.js project, we were already using Tailwind. Astro integrates with it easily.

```bash
npx astro add tailwind
```

This command added:

* `tailwind.config.js`
* `postcss.config.mjs`
* Updated `astro.config.mjs`

Now we could start writing classes in `.astro` files or React components immediately.

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

In Next.js, pages live in `/pages`. In Astro, they also live in `/src/pages`. The difference:

* **Next.js:** `pages/index.js` → `http://localhost:3000/`
* **Astro:** `src/pages/index.astro` → `http://localhost:4321/`

We moved static pages first. Example migration:

**Next.js (index.js):**

```jsx
export default function Home() {
  return (
    <main>
      <h1>Hello from Next.js</h1>
    </main>
  )
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

Notice:

* No hydration needed for static text.
* Layout system replaces `_app.js`.


### 4. Keep Using React Where Needed

Astro lets you bring over **existing React components**.

Example:

```astro
---
import Counter from "../components/Counter.jsx";
---
<h2>Interactive Part</h2>
<Counter client:load />
```

Here, `client:load` tells Astro to only hydrate the `Counter` component on the client, while the rest of the page stays static.

Our existing React components needed little to no change — we just dropped them into Astro and marked hydration.



### 5. Add Global Styles & Assets

In Next.js, global CSS lives in `pages/_app.js`.

In Astro, we created `src/styles/global.css`:

```css
@import "tailwindcss";

body {
  font-family: system-ui, sans-serif;
}
```

Then imported it in `astro.config.mjs` or directly in `src/layouts/BaseLayout.astro`.

Assets like `favicon.svg` and images go in the `/public` folder (similar to Next.js).



### 6. Setup Routing & i18n

Astro supports file-based routing just like Next.js. For multi-language support, we used dynamic routes:

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

Astro supports different outputs:

* **Static (default):** Great for Netlify, Vercel, GitHub Pages
* **SSR:** If you need server functions

Example from our `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  integrations: [tailwind()],
  output: "static", // or "server"
});
```



## What Others Can Do (Your Migration Playbook)

If you’re considering a migration, here’s a practical step-by-step you can follow:

1. **Audit your Next.js app**

   * Which parts are **static**? (Migrate first)
   * Which parts need **client-side interactivity**? (Use React/Vue/Svelte inside Astro)
   * Which APIs or server functions are being used? (Might need SSR or API routes in Astro)

2. **Create a fresh Astro project**

   * Don’t try to mutate your Next.js repo into Astro. Start clean.

3. **Install necessary integrations**

   * Tailwind, MDX, i18n, etc.

4. **Move static pages**

   * Convert `pages/*.js` into `.astro` files.

5. **Move layouts**

   * Replace `_app.js` and `_document.js` with `src/layouts`.

6. **Bring in interactive components gradually**

   * Use `client:load`, `client:visible`, or `client:idle` to hydrate only when needed.

7. **Set up global styles & assets**

   * Import CSS and put static assets in `/public`.

8. **Configure environment & build**

   * Set up `.env`, update `astro.config.mjs`, test with `npm run build`.

9. **Deploy**

   * Try Vercel, Netlify, or your hosting provider.

10. **Iterate**

* Optimize, replace React pages with Astro components as you go.



## Closing Thoughts

Migrating from Next.js to Astro isn’t about abandoning React — it’s about **using React where you need it and dropping it where you don’t**. The payoff is faster sites, simpler codebases, and less JavaScript shipped to the client.

For us, the migration was smooth because we:

* Started with static pages
* Reused existing React components
* Leveraged Tailwind & i18n with minimal changes

If you’re building **content-heavy sites** (marketing sites, blogs, documentation, product pages), Astro is worth serious consideration.


## Our Custom Astro Starter Kit

Our in-house **Astro Starter Kit** is a production-ready foundation for building content-focused websites quickly and consistently across projects.
It combines a modern tech stack with a curated developer experience, so every new site starts with the same reliable, best-practice setup.

###  What Sets It Apart

* **Unified Stack** – Pre-configured with **Astro 5**, **TypeScript**, **Tailwind CSS 4**, and **Alpine.js**, giving you the flexibility of modern static-site generation plus interactive UI components.
* **Team Standards Built-In** – ESLint, Prettier, Husky, and Commitlint are ready out of the box to enforce code style, automate formatting, and keep commits clean.

###  Core Features

*  Astro 5 – Fast, content-driven architecture with zero-JS by default.
*  Tailwind CSS 4 – Latest utility-first framework with dark-mode and design-token support.
*  Alpine.js – Lightweight, reactive JavaScript for drop-in interactivity.
*  Responsive Design – Mobile-first breakpoints and fluid layouts.
*  SEO & Open Graph – Pre-built SEO component with meta tags, sitemap generation, and link prefetching.
*  TypeScript – Strict typing and path aliases (`@/`) for cleaner imports.
*  Component Library – Reusable, theme-aware components with variants to speed up UI work.
*  Favicon & Assets – Centralized favicon management and optimized asset pipeline.

###  Quick Start

Clone the repository and install dependencies:

```bash
git clone git@github.com:your-org/astro-starter-kit.git my-new-project
cd my-new-project
npm install
npm run dev
```

Open `http://localhost:4321` and start building.



**Why we built it:**
This starter kit ensures every project at *Lucky Media* begins with the same proven stack, cutting setup time and guaranteeing consistent performance, accessibility, and maintainability across all client sites.

For detailed setup and usage instructions, visit the
[GitHub repository](https://github.com/lucky-media/astrostarter).


