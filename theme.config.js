import Logo from './components/Logo'

// theme.config.js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  github: 'https://github.com/lucky-media/guidelines', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/lucky-media/guidelines/blob/master', // base URL for the docs repository
  titleSuffix: ' – Guide',
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
      <Logo />
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Lucky Media Developer Guide" />
      <meta name="og:title" content="Lucky Media Developer Guide" />
      <meta name="og:image" content="https://guidelines.luckymedia.dev/meta.jpeg" />
    </>
  ),
}
