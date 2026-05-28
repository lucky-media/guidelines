---
title: React
slug: frontend/react
sidebar:
  order: 3
---

# React

React is an open-source front-end JavaScript library for building user interfaces and UI components. It's maintained by Meta and a large community of developers. We use React for web and desktop projects, and React Native for mobile apps.

## Websites

We have a [Next Starter](https://github.com/lucky-media/nextstarter) built on Next.js to help you get started quickly.

The Next Starter boilerplate includes:

- TailwindCSS
- Self-hosted Google Fonts via [FontSource](https://fontsource.org/)
- Prettier and ESLint
- Husky with pre-commit hooks for linting and fixing
- A responsive Layout Component with a menu
- React Inline SVG for rendering SVGs
- JS Config aliases

## Components

We keep components small and composable, built with Tailwind, to make UIs easier to maintain.

Here's a simple `Paragraph` text component:

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

Here's a `Button` component that supports multiple sizes and variants:

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

The `cls` helper function cleans up whitespace in class strings:

```javascript
export const cls = (input) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();
```
