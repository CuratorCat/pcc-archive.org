/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
module.exports = {
  navbar: {
    title: "PCC Archive",
    logo: {
      alt: "PCC Archive Logo",
      src: "img/logo.svg",
    },
    items: [
      { to: "/club", label: "The Club", position: "left" },
      { to: "/collections/cats", label: "Cats", position: "left" },
      { to: "/collections/kittens", label: "Kittens", position: "left" },
      { to: "/ens", label: "ENS", position: "left" },
      { to: "/posts", label: "Posts", position: "left" },
      { to: "/posts/tags", label: "Tags", position: "left" },
      { to: "/official-links", label: "Official Links", position: "left" },
    ],
  },
  footer: {
    style: "dark",
    links: [
      {
        title: "PCC-Archive.org",
        items: [
          {
            label: "About",
            to: "/about",
          },
          {
            label: "FAQ",
            to: "/about#faq",
          },
          {
            label: "Contribute",
            to: "/contribute",
          },
        ],
      },
      {
        title: "PCC Official",
        items: [
          {
            label: "Website",
            href: "https://www.purrnelopescountryclub.com/",
          },
          {
            label: "Discord",
            href: "http://discord.gg/purrnelopescountryclub",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/PurrnelopesCC",
          },
          {
            label: "Official Links",
            href: "/official-links",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Posts Archive",
            href: "/posts/archive",
          },
          {
            label: "Posts Tags",
            href: "/posts/tags",
          },
          {
            label: "PCC Archive GitHub",
            href: "https://github.com/CuratorCat/pcc-archive.org",
          },
        ],
      },
    ],
    copyright: `${new Date().getFullYear()} pcc-archive.org`,
  },
  image: 'img/pcc-archive-soc.jpg',
  metadata: [{name: 'twitter:card', content: 'summary_large_image'}],
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
  colorMode: {
    defaultMode: "light",
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  announcementBar: require("./announcementBar"),
};
