/** @type {import('@docusaurus/types').PluginConfig} */
module.exports = [
  [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    {
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
      },
    },
  ],
];
