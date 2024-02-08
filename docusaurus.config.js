// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types')} */
const config = {
  title: 'Tejvir S. Mann',
  tagline: '#WeLoveThePurrs',
  url: 'https://tejvirmann.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tejvirmann', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.
  titleDelimiter: ' 😺 ', // Defaults to `|`

  presets: require('./config/presets'),
  themeConfig: require('./config/theme'),
  plugins: require('./config/plugin'),
}

module.exports = config
