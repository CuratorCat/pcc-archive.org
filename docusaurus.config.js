// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PCC-Archive.org',
  tagline: '#WeLoveThePurrs',
  url: 'https://pcc-archive.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CuratorCat', // Usually your GitHub org/user name.
  projectName: 'pcc-archive.org', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/CuratorCat/pcc-archive.org/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CuratorCat/pcc-archive.org/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PCC Archive',
        logo: {
          alt: 'PCC Archive Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/CuratorCat/pcc-archive.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'PCC Official',
            items: [
              {
                label: 'Website',
                href: 'https://www.purrnelopescountryclub.com/',
              },
              {
                label: 'Discord',
                href: 'http://discord.gg/purrnelopescountryclub',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PurrnelopesCC',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Posts Archive',
                href: '/posts/archive',
              },
              {
                label: 'PCC Archive GitHub',
                href: 'https://github.com/CuratorCat/pcc-archive.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PCC Archive, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
