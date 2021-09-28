// theme.config.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  github: 'https://github.com/lucky-media/guidelines', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/lucky-media/guidelines/blob/master', // base URL for the docs repository
  titleSuffix: ' – Guidelines',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Lucky Media.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>Developer Guideline</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Lucky Media Developer Guideline" />
      <meta name="og:title" content="Lucky Media Developer Guideline" />
    </>
  ),
}