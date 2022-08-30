// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types')} */
const config = {
  title: 'PCC Archive',
  tagline: '#WeLoveThePurrs',
  url: 'https://pcc-archive.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CuratorCat', // Usually your GitHub org/user name.
  projectName: 'pcc-archive.org', // Usually your repo name.
  titleDelimiter: ' 😺 ', // Defaults to `|`

  presets: require('./config/presets'),
  themeConfig: require('./config/theme'),
  plugins: require('./config/plugin'),
}

module.exports = config
