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
          routeBasePath: '/',
          path: 'wiki',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/CuratorCat/pcc-archive.org/tree/main/',
        },
        blog: {
          routeBasePath: 'posts',
          path: 'posts',
          blogTitle: 'Posts',
          blogDescription: 'PCC Posts Archive',
          showReadingTime: true,
          postsPerPage: 15,
          blogSidebarCount: 15,
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
          { to: '/club', label: 'The Club', position: 'left' },
          { to: '/collections/cats', label: 'Cats', position: 'left' },
          { to: '/collections/kittens', label: 'Kittens', position: 'left' },
          { to: '/posts', label: 'Posts', position: 'left' },
          { to: '/posts/tags/purr-cast', label: 'PurrCast', position: 'left' },
          { to: '/posts/tags', label: 'Tags', position: 'left' },
          { to: '/official-links', label: 'Official Links', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'PCC-Archive.org',
            items: [
              {
                label: 'About',
                to: '/#',
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
              {
                label: 'Official Links',
                href: '/official-links',
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
  
  plugins: [  
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      indexDocs: true,
      indexDocSidebarParentCategories: 3,
      indexBlog: true,
      indexPages: true,
      language: ["en"],
      style: undefined,
      lunr: {
        tokenizerSeparator: /[\s\-]+/,
        // https://lunrjs.com/guides/customising.html#similarity-tuning
        b: 0.75,
        k1: 1.2,
        titleBoost: 5,
        contentBoost: 1,
        parentCategoriesBoost: 2,
      }
    }]
  ],
};

module.exports = config;
