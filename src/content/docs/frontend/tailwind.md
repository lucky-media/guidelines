---
title: Tailwind
slug: frontend/tailwind
---

# Tailwind CSS: Styling with Flair

Infuse your projects with the vibrant hues of Tailwind CSS, our go-to styling framework. We've compiled tips, tricks, and best practices to make your Tailwind journey a breeze.

## Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

## Installation

Kick things off by running:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Create a fresh `postcss.config.js` file in the root directory with the following code:

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

Inject Tailwind into your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Plugins

Most of our projects fancy these indispensable plugins:

- [Tailwind Debug Screens](https://github.com/jorenvanhee/tailwindcss-debug-screens)
- [Tailwind Boostrap Grid](https://github.com/karolis-sh/tailwind-bootstrap-grid)
- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)

### Harnessing Plugins

Slot in the plugins within the `tailwind.config.js` file at the root of your project:

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

A nifty Tailwind CSS component that displays the active screen (responsive breakpoint) on the page. To power it up, include it in the `<body>` tag or `<Layout>` component. See the React example below:

```jsx
const Layout = ({ children }) => {
  const inDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className={`${inDevelopment ? "debug-screens" : ""}`}>{children}</div>
  );
};

export default Layout;
```

The code checks if the environment is in `development`, revealing the responsive indicator. In `production`, it remains concealed.

#### Tailwind Bootstrap Grid

This plugin gifts you with every Bootstrap grid name in Tailwind style, making `col-6` in lieu of `w-3/5` more appealing. It comes equipped with default gutters and allows for easy adjustments via config.

Here's a grid example crafted with this plugin:

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
