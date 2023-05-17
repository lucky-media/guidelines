# Introduction

At [Lucky Media](https://www.luckymedia.dev) we make use of Figma to design our websites and apps. This guideline will serve as a reference point to any designer that might be interested in some of the structure that we put in place.

### Steps
Here is a list of all the steps that should be followed and we will go in depth about each one of them.
- Configuring Figma App
- Designing
- Project Starter


## Configuration Steps
On this part, it's more about configuring personal preferences for the app settings. In here people tweak the Dark/Light theme, the account, the mouse wheel direction etc. 

### Configuring Plugins
We use some plugins that make our workflow much faster and much easier to update based on the project we are working on.

### Must have plugins are:
- Batch Styler
- Chroma Colors
- Contrast
- Iconify
- Lorem Ipsum
- Select Layers
- Unsplash

#### [Batch Styler – Figma](https://www.figma.com/community/plugin/818203235789864127/Batch-Styler)
Batch Styler is mainly used to update Fonts. The plugin has properties to change Colors Styles as well. We find this plugin very helpful.
#### [Chroma Colors – Figma](https://www.figma.com/community/plugin/739237058450529919/Chroma-Colors)
Chroma Colors is a plugin that we use when we want to import multiple colors as Color Styles. 
#### [Contrast – Figma](https://www.figma.com/community/plugin/748533339900865323/Contrast)
Contrast is a plugin that checks if the color combos have passed the Contrast Accesibility Ratio. 

#### [Iconify – Figma](https://www.figma.com/community/plugin/735098390272716381/Iconify)
Iconify is a plugin that has a ton of libraries for Icons. Importing them is as easy as Drag&Drop onto the canvas or Importing it via the Insert icon button. All icons are into SVG format, which makes us sure that importing it and resizing won't make it lose any quality. The Icons are named via the library abbreviations and the icon name, which makes it so easy to the developers for importing onto code.
#### [Lorem ipsum – Figma](https://www.figma.com/community/plugin/736000994034548392/Lorem-ipsum)
Lorem ipsum is a plugin that lets you insert dummy text. We use this plugin where we want to put the text before the client sends the final version of the text. 

#### [Select Layers](https://www.figma.com/community/plugin/799648692768237063)
Select Layers is a very helpful plugin that can offer Layer selection based on a lot of criteria. The most that we use is "Select Layers by Name", "Select Text Layers", "Select Locked Layers", "Select Instances" and "Select Hidden Layers".
#### [Unsplash – Figma](https://www.figma.com/community/plugin/738454987945972471/Unsplash)
Unsplash is a platform that has commercial free to use images. You can search for images in the plugin and it will be imported as an high quality image.

# Project Starter
Almost all of our projects are made with our Project Starter. Our Project Starter is a Figma project made specifically by us, and adapted for the technologies we use to develop.

Before you start to design, make sure to duplicate the Project Starter to your drafts or Team.

In our Starter, you will find:
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
- Thumbnail page
- [12/4 Column Grid system · Bootstrap 4)](https://getbootstrap.com/docs/4.0/layout/grid/)
- [V3 TailwindCSS Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [V3 TailwindCSS Shadows](https://tailwindcss.com/docs/drop-shadow)

The Project Starter is divided into pages, depending on the project and the requirements of the client, however most of the times the pages presented are as:
- Thumbnail Page
- Components Page
- Design Page
- etc.

## Thumbnail Page
On the Thumbnail Page, you will find:
- Layout Grid
- Company logo
- Status Structure
- Status Types
- Project Name

- Layout Grid
As a Layout Grid, we have inputed the Safe Zone where you can put the content in it, so you make sure the content doesn't cut out.

- Company Logo
Company logo is presented via a 64x64 Frame, that you could change in order to display to the thumbnail.

- Status Structure
The status structure component is made as a structure for the Status Types. Adjusting its properties, all the Status Type Components will change based on the Status Structure Component.

- Status Types
We use status types in order to indicate via the thumbnail the status of the project. The number of the Status Types is limitless, feel free to add and remove how many status types you need. Just make sure to stick to `Status / <yourname>` rename structure.

- Project Name
The project name is the title of the project that you want to display on the thumbnail.

- Last Step
After you made all your changes, make sure to select **Cover / Master** Frame, right clicking on it and then selecting **Set as Thumbnail**. The changes will apply after you restart Figma app.



## Components Page
Working with components and variants, we make sure that the changes that need to be done are made in the most efficient and the least time consuming method.
In the Starter, as a global components and variants you will find:
- Alerts
- Buttons
- Checkbox
- Cookie Notice Modal
Dropdowns
- Footers
Icons
Input Fields
Modals
Navigation Bars
Paginators
Pills/Badges
Radio Buttons

## 404 Frame
Added in the Starter, is a default screen with 12 Column Layout Grid. Most of the 404 Pages include the Navigation Bar, Title, Description and a CTA Button.
## Alerts
Added in the Starter, is a component set with three alert variants, which conclude:
- Icon
- Title
- Description
- CTA Buttons
## Buttons
The button component is made out these variants: 
- 3 Sizes
- Button with Icon variants
- Text Only Variants
- All components made with State instances

Tweaking the button is as easy as Importing it from Components panel, and selecting the properties from the Instance panel.
## Checkbox
The checkbox component is made out of 3 instances:
- Checked
- Unchecked
- Multiple
- All components made with State instances
## Cookie Notice Modal
Added in the Starter, is a component set with a cookie notice, fully width adjustable and made with Autolayout properties, button components to adapt accordingly.
## Favicon
Added in the Starter, is a Frame in a Square shape with Safe zone markers and container.
## Footers
Added in the Starter, is a component set with two Footer variants, which conclude:
- Logo
- Menu links
- Description
- Social Media Icons
- All Rights Reserved Text

#### Input Fields
Input Fields components are made by multiple instances:
- Inside Text (with and without icons)
- Outside Text (with and without icons)
- Optional Texts
- Help Texts
- Leading and Trailing Icons
- All components made with State instances

### Modals
Added in the starter, is a component set with two Alert variants, which conclude:
- Icon
- Title
- Description
- CTA Buttons

### Navigation Bars
Added in the Starter, is a component set with two Navigation variants, which conclude:
- Logo
- Menu Content
- Notification Icon
- User Icon
- CTA Button
- Mobile Variant
## OG/Meta Image
Added in the Starter, is a default screen with `4x2,1` aspect ratio, Safe zone markers and containers.
## Paginators
Paginators set is presented by 4 Components:
- Hover
- Active
- Selected
- Disabled
## Text Styles
On the Project Starter, we have implemented the default Text Styles for TailwindCSS. You can find ~150 Font Styles. Globally divided into two font styles, Named on Font 1, Font 2; The fonts are divided onto **General** and **Italic** global folders. Changing text style is as easy as selecting the Style Icon, and on search input field typing for e.x: `Font 1 SM Regular`. This will select the `Font 1, SM/14px size, regular weight.` By needs, we switch the typography structure by 'Heading' and 'Paragraph' Styles. We generate them with increment by the needs. Importing them via the `Styler` app is very useful, also adapting the properties via `Batch Styler`.
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
- All components made with State instances
## Icons
The Icons are made from multiple components. The structure goes by creating a rectangular Frame with 24px width and height, and then inserting the icon inside the Frame. The Frame should have a name by: Icon/<iconname>. The renaming it's very important because of the way how the Figma component naming works. The Icon/ is made as a nested folder and if you keep the name the same, changing them it's very easy!
## Pills (Badges)
You can find two components for Pills:
- Dots
- X Icons
- Color Variants
## Tailwind Shadows
Added in the Starter, are the default TailwindCSS Shadows.
Selecting shadow style is as easy as selecting the `Style Icon`, and on search input field typing for e.x: `Shadow SM`.
## Color Styles
Added in the Starter, are the default TailwindCSS Colors.
Selecting color style is as easy as selecting the `Style Icon`, and on search typing for e.x: `Slate 500` On development, they just work. No need to tweak the config file (If we stick with default Tailwind Colors). Otherwise, the color provided will need to be generated by the designer with the Smart Text Plugin.