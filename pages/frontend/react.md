# React
React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

We use React for web/desktop and React Native for Mobile Applications at Lucky Media.

## Websites
For websites we have a great starter based on Next.js - [Next Starter](https://github.com/lucky-media/nextstarter).

The Starter its a great boilerplate to get you up and running with the following features:

- TailwindCSS
- Self Hosted Google Fonts with [FontSource](https://fontsource.org/)
- Prettier and Eslint
- Husky with Pre-commit hooks to lint and fix
- Layout Component with working responsive Menu
- React Inline SVG is used to render svg-s.
- JS Config aliases

## Components
We encourage small and composable Components to be used in conjunction with Tailwind in order to build a robust UI.

Example Text Component with React:
```jsx
import React from 'react'

const Paragraph = ({ children, className, ...props }) => {
    return (
    <p {...props} className={`font-medium text-base text-gray-200 ${className}`}>
      {children}
    </p>
    )
}
```

Example Button component with multiple variants and sizes:
```jsx
import React, { forwardRef } from 'react'
import { cls } from '../utils/helpers'

const classes = {
    base: 'focus:outline-none transition ease-in-out duration-300',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    size: {
        small: 'px-2 py-1 text-sm',
        normal: 'px-4 py-2',
        large: 'px-8 py-3 text-lg'
    },
    variant: {
        primary: 'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
        danger: 'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white'
    }
}

const Button = forwardRef(
    (
        {
            children,
            type = 'button',
            className,
            variant = 'primary',
            size = 'normal',
            pill,
            disabled = false,
            ...props
        }, ref
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
    ));

export default Button
```

`cls` is a function that trims the whitespace and renders the classes nicely. Here its the code of the function:

```javascript
export const cls = (input) =>
    input
        .replace(/\s+/gm, " ")
        .split(" ")
        .filter((cond) => typeof cond === "string")
        .join(" ")
        .trim();
```