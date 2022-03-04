export const data = {
  "key": "v-79fdd481",
  "path": "/home.html",
  "title": "Portafolio",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "Portafolio",
    "heroImage": "/portfolio.png",
    "heroText": "Portafolio",
    "tagline": "En esta seccion contiene los proyectos en los que he aplicado lo aprendido.",
    "action": [
      {
        "text": "How to Use 💡",
        "link": "/portfolio/",
        "type": "primary"
      },
      {
        "text": "Blog homepage 🏠",
        "link": "/"
      }
    ],
    "features": [
      {
        "title": "Markdown Enhance 🧰",
        "details": "Add align, sup/sub script, footnote, tasklist, tex, flowchart, diagram, mark and presentation support in Markdown",
        "link": "https://vuepress-theme-hope.github.io/guide/markdown/"
      },
      {
        "title": "Pageviews and comments 💬",
        "details": "Start pageview statistics and comment support with Valine and Vssue",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/comment/"
      },
      {
        "title": "Article information display ℹ",
        "details": "Add author, writing date, reading time, word count and other information to your article",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/page-info/"
      },
      {
        "title": "Blog support 📝",
        "details": "Add date, tags and category to your articles, then article, tag, category and timeline list will be auto generated",
        "link": "https://vuepress-theme-hope.github.io/guide/blog/intro/"
      },
      {
        "title": "Article Encryption 🔐",
        "details": "Encrypt you article based on path and folders, so that only the one you want could see them",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/encrypt/"
      },
      {
        "title": "Custom theme color 🎨",
        "details": "Supports custom theme colors and allows users to switch between preset theme colors",
        "link": "https://vuepress-theme-hope.github.io/guide/interface/theme-color/"
      },
      {
        "title": "Dark Mode 🌙",
        "details": "Switch between light and dark modes freely",
        "link": "https://vuepress-theme-hope.github.io/guide/interface/darkmode/"
      },
      {
        "title": "SEO enhancement ⚒",
        "details": "Optimize pages for search engines.",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/seo/"
      },
      {
        "title": "Sitemap 🗺",
        "details": "Generate a Sitemap for your website",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/sitemap/"
      },
      {
        "title": "Feed support 📡",
        "details": "You can generate feed, and let users to subcribe it",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/feed/"
      },
      {
        "title": "PWA support 📲",
        "details": "The built-in PWA plugin will make your website more like an APP.",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/pwa/"
      },
      {
        "title": "TS support 🔧",
        "details": "Turn on TypeScript support for your VuePress",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/typescript/"
      },
      {
        "title": "More new features ✨",
        "details": "Including icon support, path navigation, footer support, fullscreen button, blog homepage, etc.",
        "link": "https://vuepress-theme-hope.github.io/guide/feature/"
      }
    ],
    "copyrightText": false,
    "footer": "Copyright © 2021",
    "summary": "<!-- This is an example of a normal homepage. You can place your main content here. To use this layout, you need to set home: true in the page front matter. For related description",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/home.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Portafolio"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "en-US"
        }
      ],
      [
        "meta",
        {
          "name": "twitter:card",
          "content": "summary_large_image"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.17,
    "words": 50
  },
  "filePathRelative": "home.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
