# Introduction

At [Lucky Media](https://www.luckymedia.dev) we use various tools to build our websites and apps. This guideline will serve as a reference point to any developer that might be interested in some of the structure that we put in place to this Figma Starter Projects.

# Project Starter
Almost all of our projects are made with our Project Starter. Our Project Starter is a Figma project made specifically by us, and adapted for the technologies we use to develop websites.

Before you start to develop, based on the project you could find:
- Thumbnail
- Components and Variants
- Color Styles
- Text Styles
- Buttons
- Input Groups
- Alerts
- Paginaters
- Navigation Bars
- Footers
- Modals
- [V3 TailwindCSS Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [V3 TailwindCSS Shadows](https://tailwindcss.com/docs/drop-shadow)
- 404 Page
- OG/Meta Image
- Favicon
- [12/4 Column Grid system · Bootstrap 4)](https://getbootstrap.com/docs/4.0/layout/grid/)
- Cookie Notice Modal

The Project Starter is divided into pages, depending on the project and the requirements of the client, however most of the times the pages presented are as:
- Thumbnail
- Components
- Page
- etc.

## Thumbnail
The thumbnail page, we present an Open Graph Image, that indicates the Project Name, and the status of the project. This page is not related to the developer, we use this for better view on Figma Dashboard and for organisation purposes.

## Components
On the Components, by default you can find:
- Components and Variants
- Color Styles
- Text Styles
- [V3 TailwindCSS Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [V3 TailwindCSS Shadows](https://tailwindcss.com/docs/drop-shadow)
- 404 Page
- OG/Meta Image
- Favicon
- [12/4 Column Grid system · Bootstrap 4)](https://getbootstrap.com/docs/4.0/layout/grid/)
- Cookie Notice Modal

## Components and Variants
Working with components and variants, we make sure that the changes that need to be done are made in the most efficient and the least time consuming method.
In the Starter, as a global components and variants you will find:
- Buttons,
- Checkbox,
- Radio Buttons,
- Dropdowns,
- Icons,
- Input Fields,
- Pills/Chips,
- Paginaters.
The Components are labeled, so however if you seem to find confusion between a component used on a project, we suggest looking at the layer naming or the properties of the component. Figma uses layer naming construction and properties for a component.

## Color Styles
Based on the client needs and requirements, the design team generates color palettes, with shading and tints. There are cases where the client provides a `Branding&Guideline booklet`, and if we are provided, we make sure that we import the colors as styles. Each of the color is presented on a Frame that indicates a name and a HEX value. Most of the times the design team exports a JSON file for easier Tailwind integration of the color on the project.

## Text Styles
On the component page, you can see the fonts used for a project. The design team implemented the default **TailwindCSS Typography** for it's versatility, however lately we have been looking at the `Heading and Paragraph` method more often.
When using the `Heading and Paragraph` method, you are presented with a Frame that indicates the name of the Type, Font size and Line height.

## Buttons
The button component is made out of variants: 
- 3 Sizes
- Button with Icon variants (Leading and Trailing)
- Text Only Variants
- All components made with State instances

## Input Groups
Input Fields components are made by multiple instances:
- Inside Text (with and without icons)
- Outside Text (with and without icons)
- All components made with State instances

## Alerts
Added in the Starter, is a component set with three alert variants.

## Paginaters
Pagination set is presented by 4 States:
- Hover
- Active
- Selected
- Disabled

## Navigation Bars
Added in the Starter, is a component set with two Navigation variants, including mobile screens.

## Footers
Added in the Starter, is a component set with two Footer variants, including mobile screens.

## Modals
Added in the starter, is a component set with two Alert variants.


## Checkbox
The checkbox component is made out of 3 instances:
- Checked
- Unchecked
- Multiple
- All components made with State instances

## Radio Button
The Radio Button component is made out of 2 instances:
- Checked
- Unchecked
- All components made with State instances

## Dropdowns
Added in the Starter, you can find Components for Dropdowns.
You can find Two types of it:
- Closed
- Open
- Lead Icon Variants
- All components made with State instances

## Icons
On a project, the designer makes sure to use one icon pack, and provide with link in order for the developers to install on the root of the project. We have cases where some of the icons are imported from a different library, but the designer makes sure that they will reference which ones are by diving them on the page and when preparing for giving it to the dev team. 


## Pills and Chips
You can find two components for Pills and Chips:
- With Icon
- Without Icon


## Tailwind Color Palette
Added in the Starter, are the default TailwindCSS Color Palette.
The best thing about this palette is that there is no need to tweak the config file.

## Tailwind Shadows
Added in the Starter, are the default TailwindCSS Shadows.
There are cases where you can find generated shadows with CSS properties, based on the design implemented.

## 404 Page
Added in the Starter, you can find a Frame for a `404 Page`, presented on a Desktop and Mobile Screen size.

## OG/Meta Image
Added in the Starter, is a default frame screen to import at the project.

## Favicon
Added in the Starter, is a Frame in a Square shape with Safe zone markers and container. Use https://www.realfavicongenerator.net to generate the favicons and follow the steps embedded to the web tool in order to have the best outcome.

## Cookie Notice Modal
Added in the Starter, is a component set with a cookie notice and instances.