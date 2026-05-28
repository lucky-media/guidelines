---
title: For Developers
slug: design/devs
sidebar:
  order: 4
---

# Introduction

At [Lucky Media](https://www.luckymedia.dev), we use a consistent set of tools across our projects. This page explains the structure of our Figma starter project, the [Web UI Starter](https://www.figma.com/community/file/1243858237628374539), so you know what to expect before you start building.

## Web UI Starter

The [Web UI Starter](https://www.figma.com/community/file/1243858237628374539) is a Figma project we use as the base for most of our projects. It is built around our development stack, so the components, colors, and styles map directly to what you will use in code.

As a developer, you will find these components and frames in the project:

- 404 Page
- Alerts
- Buttons
- Checkbox
- Color Styles
- Cookie Notice Modal
- Dropdown
- Favicon
- Footers
- Icons
- Input Fields
- Modals
- Navigation Bars
- OG/Meta Image
- Paginators
- Pills/Badges
- Radio Buttons
- Text Styles
- Thumbnail Page
- [12/4 Column Grid system · Bootstrap 4](https://getbootstrap.com/docs/4.0/layout/grid/)
- [V3 TailwindCSS Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [V3 TailwindCSS Shadows](https://tailwindcss.com/docs/drop-shadow)

The [Web UI Starter](https://www.figma.com/community/file/1243858237628374539) is split into pages. The exact pages vary per project, but you will typically see:

- Thumbnail
- Components
- Page
- And more.

### Thumbnail

The Thumbnail page shows an Open Graph image with the project name and status. It is mainly for keeping the Figma dashboard organized. Not something you need to worry about as a developer.

### Components

The Components page contains:

- 404 Page
- Color Styles
- Components and Variants
- Favicon
- Footer
- Navigation Bars
- OG/Meta Image
- Text Styles
- [V3 TailwindCSS Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [V3 TailwindCSS Shadows](https://tailwindcss.com/docs/drop-shadow)
- [12/4 Column Grid system · Bootstrap 4](https://getbootstrap.com/docs/4.0/layout/grid/)

### 404 Page

A frame for a `404 Page`, sized for both desktop and mobile screens.

### Color Styles

The design team builds color palettes with shades and tints based on client requirements. If a `Branding & Guideline booklet` is provided, colors are imported as styles. Each color is shown on a frame with its name and HEX value. A JSON file is often included for easy Tailwind config integration.

### Components and Variants

The [Web UI Starter](https://www.figma.com/community/file/1243858237628374539) includes global components and variants that cover the most common UI patterns:

- Alerts
- Buttons
- Checkbox
- Cookie Notice Modal
- Dropdowns
- Icons
- Input Fields
- Menu Selectors
- Modals
- Paginators
- Pills/Badges
- Radio Buttons
- User Dropdown

Components are labeled clearly. Figma uses layer naming and component properties to keep everything structured and easy to inspect.

### Favicon, Footers, Navigation Bars, & OG/Meta Image

The [Web UI Starter](https://www.figma.com/community/file/1243858237628374539) includes:

- Favicons with safe zone markers and containers
- Footer and Navigation Bar variants for desktop and mobile
- A default frame for OG/Meta Image

### Text Styles & Tailwind

The Components page includes Heading and Paragraph text styles. It also includes the default TailwindCSS Color Palette and Shadows, so you will not need to modify any Tailwind config files to match the design.