import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

/*   locales: {
    "/": {
      lang: "en-US",
      title: "Theme Demo",
      description: "A demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "主题演示",
      description: "vuepress-theme-hope 的演示",
    },
  }, */

  themeConfig,
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        // exclude the homepage
        isSearchable: (page) => page.path !== '/',
      },
    ],
/*     [
      '@vuepress/google-analytics',
      {
        ga: 'UA-222289840-1', // UA-00000000-0
      }
    ], */
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-YXDKJW0D0D',
      },
    ],
  ],
});
