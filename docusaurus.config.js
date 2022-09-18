module.exports = {
  title: "丰小团 - 一站式装修家",
  tagline: "跟着装修达人带你一站式装新家。",
  url: "https://wiki.yuices.ml",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "丰小团wiki",
  projectName: "丰小团wiki",
  plugins: [
    "docusaurus-tailwindcss-loader",
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: [
          "../src/index.ts",
          // '../src/core/index.tsx',
          // '../src/models/index.ts',
          // '../src/collection/index.tsx',
          // '../src/contexts/index.tsx',
          // '../src/form/index.tsx',b
          // '../src/preview/index.ts',
          // '../src/side_dialog/index.ts',
          // '../src/hooks/index.tsx',
        ],
        tsconfig: "../tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  themeConfig: {
    // algolia: {
    //   // Algolia 提供的应用 ID
    //   appId: '7BB5QGB3E2',

    //   //  公开 API 密钥：提交它没有危险
    //   apiKey: 'e51ede124b28888a44d7e1fd7761dd27',

    //   indexName: 'blog',
    // },
  themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          language: ["en", "zh"],
          // ```
        },
      ],
    ],
    announcementBar: {
      id: "new_version_rc.2",
      content:
        '丰小团,一站式团新家 🎉 点击 <a target="_blank" rel="noopener noreferrer" href="/docs/quickstart">quickstart</a> 开始吧!  微信:(YSZwenzi)',
      backgroundColor: "#FF5B79",
      textColor: "black",
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "丰小团",
      logo: {
        alt: "SurveyKing Logo",
        src: "img/surveyking.svg",
      },
      items: [
        {
          to: "docs",
          activeBaseRegex: "docs(/)?$",
          label: "文档",
          position: "left",
        },
        {
          to: "blog",
          label: "博客",
          position: "left",
        },
        {
          to: "https://wp.fengtuan.cloud",
          label: "干货避坑",
          className:
            "btn mr-2 px-6 py-2 text-white font-bold uppercase bg-blue-600 hover:text-white hover:bg-blue-700",
          "aria-label": "Open the demo project",
          position: "right",
        },
        {
          href: "https://github.com/hxer520",
          // label: 'GitHub',
          className: "mr-2 header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
        {
          href: "https://gitee.com/hxer520",
          // label: 'Gitee',
          className: "mr-2 header-gitee-link",
          "aria-label": "Gitee repository",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "联系我",
          items: [
            {
              label: "Contact",
              href: "mailto: erindoo@me.com",
            },
          ],
        },

        {
          // Label of the section of these links
          title: "链接",
          items: [
            {
              label: "文档",
              to: "docs/",
            },
            {
              label: "干货",
              to: "https://wp.fengtuan.cloud",
            },
          ],
        },
      ],
      copyright: `MIT © ${new Date().getFullYear()} - 丰小团——一站式团新家`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/vsDark"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        // blog: false,
        blog: {
          showReadingTime: true,
          editUrl:
             'https://github.com/hxer520/Docusaurus-vercel/tree/main/blog'
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        gtag: {
          trackingID: "G-D4DQQCW88S",
        },
        },
    ],
  ],
  scripts: [
    {
      src: "https://hm.baidu.com/hm.js?43e89c38a9e9332e702161a0c19bba11",
      async: true,
    },
  ],
};
