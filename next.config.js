const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  flexsearch: {
    codeblocks: false,
  },
});

module.exports = withNextra();
