# Tailwind CSS: Styling with Flair

Infuse your projects with the vibrant hues of Tailwind CSS, our go-to styling framework. We've compiled tips, tricks, and best practices to make your Tailwind journey a breeze.

## Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

## Installation

Start by creating a new Vite project:

```bash
npm create vite@latest my-project
cd my-project
```

Continue by installing tailwindcss and ``@tailwindcss/vite``:

```bash
npm install tailwindcss @tailwindcss/vite
```

Afterwards add the @tailwindcss/vite plugin to your ``vite.config.ts`` file:

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
```

Now import Tailwind CSS to your CSS file:

```css
@import "tailwindcss";
```



And you can start your build process by running :

```bash
npm run dev
```

To start using Tailwind in your HTML you must make sure that your compiled CSS is included in the ``<head>`` tag like this :

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet"> <!-- link to your CSS -->
</head>
<body>
  <h1 class="text-3xl font-bold underline"> <!--test it out-->
    Hello world!
  </h1>
</body>
</html>
```

## Plugins

Most of our projects fancy these indispensable plugins:

- [Tailwind Debug Screens](https://github.com/jorenvanhee/tailwindcss-debug-screens)
- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)

### Harnessing Plugins

Slot in the plugins within the `tailwind.config.js` file at the root of your project:

```javascript
import debugScreens from "tailwindcss-debug-screens";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,astro}", // Update to match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [debugScreens, forms, typography],
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
