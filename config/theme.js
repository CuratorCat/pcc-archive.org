/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
module.exports = {
  navbar: {
    // title: "PCC Archive",
    logo: {
      alt: "PCC Archive Logo",
      src: "img/logo-pcca.svg",
    },
    items: [
      { to: "/club", label: "The Club", position: "left" },
      {
        label: "😺 Collections",
        position: "left",
        to: "/collections",
        items: [
          {
            label: "😺 Cats",
            to: "/collections/cats",
          },
          {
            label: "🐈 Kittens",
            to: "/collections/kittens",
          },
          {
            label: "🪂 Kitty Vault Purrks",
            to: "/collections/kittyvault-purrks",
          },
          {
            label: "🎁 Purrnelope's Gift",
            to: "/collections/gift",
          },
          {
            label: "All Collections",
            to: "/collections",
          },
        ],
      },
      { to: "/ens", label: "ENS", position: "left" },
      { to: "/kittyvault", label: "Kitty Vault", position: "left" },
      {
        label: "Posts",
        position: "left",
        to: "/posts",
        items: [
          {
            label: "Weekly Update",
            to: "/posts/tags/weekly-update",
          },
          {
            label: "PurrCast",
            to: "/posts/tags/purr-cast",
          },
          {
            label: "Interview",
            to: "/posts/tags/interview",
          },
          {
            label: "Explained",
            to: "/posts/tags/explained",
          },
          {
            label: "Learn",
            to: "/posts/tags/learn",
          },
          {
            label: "All Post Tags",
            to: "/posts/tags",
          },
          {
            label: "All Posts",
            to: "/posts",
          },
        ],
      },
      {
        label: "More",
        position: "left",
        items: [
          {
            label: "PCC Team",
            to: "/club/team",
          },
          {
            label: "PCC Official Links",
            to: "/official-links",
          },
        ],
      },
      {
        label: "About",
        position: "right",
        to: "/about",
        items: [
          {
            label: "About PCC Archive",
            to: "/about",
          },
          {
            label: "Contribute",
            to: "/contribute",
          },
          {
            label: "PCC Archive Github",
            href: "https://github.com/CuratorCat/pcc-archive.org"
          },
        ],
      },
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
