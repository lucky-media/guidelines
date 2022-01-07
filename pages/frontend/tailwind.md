# Tailwind CSS

Almost all our projects include TailwindCSS as the default styling framework and on this document we will focus on some tips and tricks to make working with Tailwind easier.

## Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

## Installation

First step to install is to run:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Create a new `postcss.config.js` file in the root directory with the following code:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Now create your configuration file:

```bash
npx tailwindcss init
```

This will create a minimal config at the root of the project:

```javascript
module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Now include tailwind in your css file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Plugins

Almost all our projects include the following plugins:

- [Tailwind Debug Screens](https://github.com/jorenvanhee/tailwindcss-debug-screens)
- [Tailwind Boostrap Grid](https://github.com/karolis-sh/tailwind-bootstrap-grid)
- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)

### Using Plugins

In order to use the plugins you have to include them inside the `tailwind.config.js` file in the root of your project:

```javascript
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js']
  theme: {
    extend: {},
  },
  corePlugins: {
    // Default container needs to be disabled in order to use the Bootstrap plugin
    container: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ],
}
```

#### Tailwind Debug Screens

A Tailwind CSS component that shows the currently active screen (responsive breakpoint). In order to use it in your project you have to include it in the `<body>` tag or `<Layout>` component. The following example is in React:

```jsx
const Layout = ({ children }) => {
   const dev = process.env.NODE_ENV === 'development'

    return (
      <div className={`${dev ? 'debug-screens' : ''}`}>
        {children}
      </div>
    </>
    )
}

export default Layout;
```

The code above checks if the environment is on `development` and will display the responsive indicator, otherwise in `production` it will not display anything.

#### Tailwind Bootstrap Grid

This plugin provides all the Bootstrap grid names for Tailwind, and we find it more convenient to use `col-6` instead of `w-3/5`. It also provides gutters by default and you can easily change them from the config.

An example grid made with this plugin:

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
