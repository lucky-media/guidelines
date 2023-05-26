# Introduction
At [Lucky Media](https://www.luckymedia.dev) we make use of Figma to design our websites and apps. This guideline will serve as a reference point to any designer that might be interested in some of the structure that we put in place.

# Steps
Here is a list of all the steps that should be followed and we will go in depth about each one of them.
- Configuring Figma App
- Designing
- Project Starter

## Configuration Steps
On this part, it's more about configuring personal preferences for the app settings. In here people tweak the Dark/Light theme, the account, the mouse wheel direction etc. 

## Configuring Plugins
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
- Dropdowns
- Footers
- Icons
- Input Fields
- Menu Selector
- Modals
- Navigation Bars
- Paginators
- Pills/Badges
- Radio Buttons
- User Dropdown

## 404 Frame
We have included a default screen with 12 Column Layout Grid. Most of the 404 Pages include the Navigation Bar, Title, Description and a CTA Button.
## Alerts
Included as a component is a set with three alert variants, which conclude:
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
## Color Styles
In our Starter, we have included the default TailwindCSS colors.
Selecting color style is as easy as selecting the `Style Icon`, and on search typing for e.x: `Slate 500` On development, they just work. No need to tweak the config file (If we stick with default Tailwind Colors). Otherwise, the color provided will need to be generated by the designer with the Smart Text Plugin.
## Cookie Notice Modal
The cookie notice is a component set, fully width adjustable and made with Autolayout properties and button components that adapt accordingly.
## Dropdowns
The dropdown component set is made out of two types:
- Closed
- Open
- All components made with State instances
## Favicon
Presented in the project is a Frame in a Square shape with Safe zone markers and container.
## Footers
Added in the Starter, is a component set with two Footer variants, which conclude:
- All Rights Reserved Text
- Description
- Logo
- Menu links
- Social Media Icons
## Icons
The Icons are made from multiple components. The structure goes by creating a rectangular Frame with 24px width and height, and then inserting the icon inside the Frame. The Frame should have a name by: Icon/<iconname>. The renaming it's very important because of the way how the Figma component naming works. The Icon/ is made as a nested folder and if you keep the name the same, changing them it's very easy!
## Input Fields
Input Fields components are made by multiple instances:
- Inside Text (with and without icons)
- Outside Text (with and without icons)
- Optional Texts
- Help Texts
- Leading and Trailing Icons
- All components made with State instances
## Menu Selectors
Menu Selectors are a set of components which include the types:
- Active
- Hover
- Disabled
## Modals
The modal is a component set with two Alert variants, which conclude:
- Icon
- Title
- Description
- CTA Buttons
## Navigation Bars
The navigation bars are a component set with two Navigation variants, which conclude:
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
 Integrated in the Project is a typography structure by 'Heading' and 'Paragraph' Styles. We generate them with increment by the needs. Importing them via the `Styler` app is very useful, also adapting the properties via `Batch Styler`.
## Pills (Badges)
You can find two components for Pills:
- Dots
- X Icons
- Color Variants
## Radio Button
The Radio Button component is made out of 2 instances:
- Checked
- Unchecked
- All components made with State instances
## User Dropdown
User Dropdowns are a Component set made out of two instances:
- User Avatars
- Text Only
## Tailwind Shadows
Integradted in the project, you can find the default TailwindCSS Shadows.
Selecting shadow style is as easy as selecting the `Style Icon`, and on search input field typing for e.x: `Shadow SM`.






# Introduction
At [Lucky Media](https://www.luckymedia.dev), we harness the power of Figma to craft our websites and apps. These guidelines will serve as a beacon to any designer itching to uncover the structure we've laid out.

# The Journey
Here, we present a list of steps to follow, diving into the depths of each one.
- Figma App Configuration
- Design Process
- Project Kickoff

## Configuration Adventure
In this chapter, we delve into personalizing app settings like Dark/Light themes, account details, and mouse wheel direction to suit your preferences.

## Plugin Magic
Our chosen plugins accelerate our workflow, making it a breeze to adapt to various projects.
### Must-have enchantments include:
- Batch Styler
- Chroma Colors
- Contrast
- Iconify
- Lorem Ipsum
- Select Layers
- Unsplash

#### [Batch Styler – Figma](https://www.figma.com/community/plugin/818203235789864127/Batch-Styler)
Batch Styler excels at updating fonts while boasting versatile properties for color styles. We're quite smitten with it. This plugin helps us effortlessly manage color and font changes throughout the design process.

#### [Chroma Colors – Figma](https://www.figma.com/community/plugin/739237058450529919/Chroma-Colors)
Chroma Colors finds its way into our workflow when we're conjuring multiple Color Styles. This plugin allows us to import a collection of color styles all at once, saving time and ensuring consistency.

#### [Contrast – Figma](https://www.figma.com/community/plugin/748533339900865323/Contrast)
Contrast ensures the color combos we choose pass the Contrast Accessibility Ratio, guaranteeing that our designs are visually accessible to everyone.

#### [Iconify – Figma](https://www.figma.com/community/plugin/735098390272716381/Iconify)
Iconify serves as a treasure trove of icon libraries, making dragging and dropping SVG icons into place simple and seamless. Icons are organized with names and library abbreviations, easing the task for developers when importing them into code.

#### [Lorem Ipsum – Figma](https://www.figma.com/community/plugin/736000994034548392/Lorem-ipsum)
Insert dummy text with ease using Lorem Ipsum, perfect for placeholder content as final copies await.

#### [Select Layers](https://www.figma.com/community/plugin/799648692768237063)
Select Layers offers a helping hand in selecting layers based on criteria such as name, text, locked or hidden status, and instances. We frequently use this plugin for its filtering capabilities.

#### [Unsplash – Figma](https://www.figma.com/community/plugin/738454987945972471/Unsplash)
Source commercial-free images from Unsplash, hand-selecting high-quality photographs for your designs.

# Project Kickoff
The majority of our projects leap headfirst into our custom-built Figma Project Starter. Crafted with precision and designed specifically with our technological choices in mind, it will ensure your design journey takes flight.

Prior to designing, duplicate the Project Starter to your drafts or team.

Inside our Starter, you will uncover:
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

Our Project Starter is organized into pages based on project and client requirements, but the usual suspects include:
- Thumbnail Page
- Components Page
- Design Page
- And more.

Each section of the Project Starter comes with in-depth explanations on the components, their properties, and how to effectively use them within the design process. This ensures a seamless experience for the designer while maintaining the high standards of Lucky Media's creations.

## Thumbnail Page
The Thumbnail Page is your treasure map, guiding you with these markers:
- Layout Grid
- Company logo
- Status Structure
- Status Types
- Project Name

- Layout Grid
Step into the Safe Zone, where you can place content without fear of it being clipped or cut off.

- Company Logo
A 64x64 Frame showcases your company logo, easily pliable to your liking.

- Status Structure
The Status Structure component serves as the backbone for Status Types. Modify its properties, and all Status Type Components will update accordingly.

- Status Types
Showcase the project's status through the thumbnail with Status Types. Feel free to mix and match as needed, staying true to the `Status / <yourname>` renaming structure.

- Project Name
Scribe the project's title to display on the thumbnail.

- Final Touch
With your masterful updates complete, right-click the **Cover / Master** Frame and select **Set as Thumbnail**. Once you restart Figma, the magic happens.

## Components Page
Components and variants work hand-in-hand, paving the way for efficient and effortless updates. With your global components and variants key in hand, unlock limitless design possibilities:
- Alerts
- Buttons
- Checkbox
- Cookie Notice Modal
- Dropdowns
- Footers
- Icons
- Input Fields
- Menu Selector
- Modals
- Navigation Bars
- Paginators
- Pills/Badges
- Radio Buttons
- User Dropdown

For a deeper dive into the enchanted realm of these components and their properties, refer to the initial text above.

## 404 Frame
Our default screen includes a 12 Column Layout Grid, perfect for crafting 404 Pages complete with Navigation Bar, Title, Description, and a CTA Button.

## Alerts
A set of three alert component variants at your disposal, each containing an Icon, Title, Description, and CTA Buttons.

## Buttons
Transform buttons with ease, importing from the Components panel and selecting properties from the Instance panel. Variants include:
- 3 Sizes
- Button with Icon variants
- Text Only Variants
- All components armed with State instances

## Checkbox
This component set includes 3 instances:
- Checked
- Unchecked
- Multiple
- All components equipped with State instances

## Color Styles
Our Starter showcases the default TailwindCSS colors, easily accessible via the `Style Icon`.

## Cookie Notice Modal
This component set is designed with fully width-adjustable, Autolayout properties and button components that adapt accordingly.

## Dropdowns
Two main types of dropdown component sets grace your designs:
- Closed
- Open
- All components fitted with State instances

## Favicon
Find solace in a square-shaped Frame complete with Safe zone markers and containers for your favicon.

## Footers
These components grant you two Footer variants, replete with All Rights Reserved Text, Description, Logo, Menu links, and Social Media Icons.

## Icons
Enter the realm of Icons by creating a rectangular Frame (24px width and height) and inserting the icon within. Maintain the Icon/ folder-like naming structure for seamless switching.

## Input Fields
Multiple instances abound with Input Field components, all boasting State instances.

## Menu Selectors
This set of components includes Active, Hover, and Disabled types.

## Modals
Equip your designs with two Alert variants, each home to an Icon, Title, Description, and CTA Buttons.

## Navigation Bars
Choose from two Navigation variants, each furnished with a Logo, Menu Content, Notification Icon, User Icon, CTA Button, and a Mobile Variant.

## OG/Meta Image
In the Starter, bask in a default screen with a `4x2,1` aspect ratio, Safe zone markers, and containers.

## Paginators
This set offers 4 Component types: Hover, Active, Selected, and Disabled.

## Text Styles
Typography rules the day with 'Heading' and 'Paragraph' Styles. Import and adapt properties via the `Styler` app and `Batch Styler`.

## Pills (Badges)
Two components for Pills are at your fingertips: Dots, X Icons, and Color Variants.

## Radio Button
Harness the power of 2 Radio Button instances:
- Checked
- Unchecked
- All components bolstered by State instances

## User Dropdown
These Dropdown components feature User Avatars and Text Only instances.

## Tailwind Shadows
Discover default TailwindCSS Shadows, ready to be summoned through the `Style Icon` and the search input field.

> By following these guidelines and leveraging the tools provided in the Project Starter, any designer will be well-equipped to create game-changing digital solutions that fit like a glove for any business.