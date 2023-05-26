import Logo from "./components/Logo";

// theme.config.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  project: {
    link: "https://github.com/lucky-media/guidelines",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Guide",
    };
  },
  docsRepositoryBase: "https://github.com/lucky-media/guidelines/blob/master", // base URL for the docs repository
  darkMode: true,
  footer: {
    text: `MIT ${new Date().getFullYear()} © Lucky Media.`,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  logo: (
    <>
      <Logo />
    </>
  ),
  logoLink: "/",
  search: {
    placeholder: "Search...",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Lucky Media Developer Guide" />
      <meta name="og:title" content="Lucky Media Developer Guide" />
      <meta
        name="og:image"
        content="https://guidelines.luckymedia.dev/meta.jpeg"
      />
    </>
  ),
};
