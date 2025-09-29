---
title: React
slug: frontend/react
---

# React

React, a remarkable open-source front-end JavaScript library, empowers developers to craft stunning user interfaces or UI components. Facebook and an engaged community of developers and companies ensure its maintenance. In the development of single-page or mobile applications, React serves as an exceptional foundation.

Here at Lucky Media, we're smitten with React for web/desktop projects and React Native for mobile applications.

## Websites

Get off to a flying start with our phenomenal [Next Starter](https://github.com/lucky-media/nextstarter) powered by Next.js.

Our Next Starter is a fantastic boilerplate that includes:

- TailwindCSS
- Self-hosted Google Fonts via [FontSource](https://fontsource.org/)
- Prettier and ESLint
- Husky with pre-commit hooks for linting and fixing
- Responsive menu-ready Layout Component
- React Inline SVG for rendering SVGs
- JS Config aliases

## Components

We champion the use of tiny, composable Components woven with Tailwind to construct resilient UIs.

Take a peek at this Text Component example utilizing React:

```jsx
import React from "react";

const Paragraph = ({ children, className, ...props }) => {
  return (
    <p
      {...props}
      className={`font-medium text-base text-gray-200 ${className}`}
    >
      {children}
    </p>
  );
};
```

Now, feast your eyes on this Button component with multiple sizes and variants:

```jsx
import React, { forwardRef } from "react";
import { cls } from "../utils/helpers";

const classes = {
  base: "focus:outline-none transition ease-in-out duration-300",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-4 py-2",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary:
      "bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white",
    secondary:
      "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
};

const Button = forwardRef(
  (
    {
      children,
      type = "button",
      className,
      variant = "primary",
      size = "normal",
      pill,
      disabled = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
```

With the `cls` function, class rendering becomes a breeze while keeping the whitespace tidy. Here's the code for this handy function:

```javascript
export const cls = (input) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();
```
