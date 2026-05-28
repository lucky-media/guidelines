---
title: Tailwind
slug: frontend/tailwind
sidebar:
  order: 1
---

# Tailwind CSS

Tailwind CSS is our go-to styling framework. This page covers installation, plugins, and a few tips we use across projects.

## Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

## Installation

Run the following to install Tailwind and its dependencies:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Create a `postcss.config.js` file in the root of your project:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Now generate your configuration file:

```bash
npx tailwindcss init
```

This will produce a minimal config at the root of your project:

```javascript
module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add the Tailwind directives to your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Plugins

Most of our projects use these plugins:

- [Tailwind Debug Screens](https://github.com/jorenvanhee/tailwindcss-debug-screens)
- [Tailwind Boostrap Grid](https://github.com/karolis-sh/tailwind-bootstrap-grid)
- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)

### Adding Plugins

Add plugins inside `tailwind.config.js` at the root of your project:

```javascript
module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  corePlugins: {
    // To use the Bootstrap plugin, the default container must be disabled
    container: false,
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      gridGutterWidth: "32px",
      containerMaxWidths: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    }),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/typography"),
  ],
};
```

#### Tailwind Debug Screens

This plugin shows the active responsive breakpoint on the page. Add the `debug-screens` class to your `<body>` tag or root layout component. Here's how to set it up in React so it only shows in development:

```jsx
const Layout = ({ children }) => {
  const inDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className={`${inDevelopment ? "debug-screens" : ""}`}>{children}</div>
  );
};

export default Layout;
```

The `debug-screens` class is applied only when `NODE_ENV` is `development`. It won't show up in production.

#### Tailwind Bootstrap Grid

This plugin brings Bootstrap-style grid class names into Tailwind. So you can use `col-6` instead of `w-3/5`. It includes default gutters and is configurable via the plugin options.

Here's a basic grid example using this plugin:

```html
<div class="container">
  <div class="row">
    <div class="md:col-6 lg:col-3"></div>
    <div class="md:col-6 lg:col-3"></div>
    <div class="md:col-6 lg:col-3"></div>
    <div class="md:col-6 lg:col-3"></div>
  </div>
</div>
```
