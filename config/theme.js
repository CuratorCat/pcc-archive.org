/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
module.exports = {
  navbar: {
   // title: "Tejvir S. Mann",
    logo: {
      alt: 'Tejvir S. Mann',
      src: 'img/logo-pcca.svg',
    },
    items: [
      {
        label: 'Collections',
        position: 'right',
        to: '/collections',
        items: [
          {
            label: 'Cats',
            to: '/collections/cats',
          },
          {
            label: 'Kittens',
            to: '/collections/kittens',
          },
          {
            label: '👵🏻 Grandmas',
            to: '/collections/grandmas',
          },
          {
            label: 'Exclusives',
            to: '/collections/exclusives',
          },
          {
            label: "Purrnelope's Gift",
            to: '/collections/gift',
          },
          {
            label: 'All Collections',
            to: '/collections',
          },
        ],
      },
      { to: '/ens', label: '🆔 ENS', position: 'right' },
      { to: '/chat', label: 'Chat', position: 'right' },
      { to: '/merch', label: 'Merch', position: 'right' },
      { to: '/resources', label: 'Resources', position: 'right' },
      {
        label: 'Logs',
        position: 'right',
        to: '/logs',
        items: [
          {
            label: 'Tags',
            to: '/logs/tags/',
          },
          {
            label: 'Projects',
            to: '/logs/projects/project2',
          },
          {
            label: 'All Logs',
            to: '/logs/',
          },
          // {
          //   label: 'Archive',
          //   to: '/logs/tags/archive',
          // },
        ],
      },
      // {
      //   label: 'projects',
      //   position: 'right',
      //   to: '/projects',
      //   items: [
      //     {
      //       label: 'Project 1',
      //       to: 'projects/Project-1',
      //     },
      //   ],
      // },
    ],
  },
  footer: {
  //   links: [
  //     {
  //       title: 'PCC-Archive.org',
  //       items: [
  //         {
  //           label: 'About PCC Archive',
  //           to: '/about',
  //         },
  //         {
  //           label: 'Contribute',
  //           to: '/contribute',
  //         },
  //         {
  //           label: "PCC Archive's GitHub",
  //           href: 'https://github.com/CuratorCat/pcc-archive.org',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Tejvir S. Mann',
  //       items: [
  //         {
  //           label: 'Website',
  //           href: 'https://www.purrnelopescountryclub.com/',
  //         },
  //         {
  //           label: 'Discord',
  //           href: 'http://discord.gg/purrnelopescountryclub',
  //         },
  //         {
  //           label: 'Twitter',
  //           href: 'https://twitter.com/PurrnelopesCC',
  //         },
  //         {
  //           label: 'Official Links',
  //           to: '/official-links',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'More',
  //       items: [
  //         {
  //           label: 'Posts Archive',
  //           to: '/posts/archive',
  //         },
  //         {
  //           label: 'Posts Tags',
  //           to: '/posts/tags',
  //         },
  //       ],
  //     },
  //   ],
    copyright: `© ${new Date().getFullYear()} Tejvir S. Mann`,
  },
  image: 'img/pcc-archive-soc.jpg',
  metadata: [{ name: 'twitter:card', content: 'summary_large_image' }],
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  announcementBar: require('./announcementBar'),
  metadata: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  ],
  docs: {
    sidebar: {
      hideable: true,
    },
  },
}
