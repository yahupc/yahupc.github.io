export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Blog Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "layout": "Blog",
    "icon": "home",
    "title": "Blog Home",
    "bgImage": "/background-hero.jpg",
    "bgImageStyle": {
      "border-bottom": "0.5px solid #999",
      "border-top": "0.5px solid #999",
      "maxHeight": "50vh"
    },
    "heroText": "PABLO YAFAC",
    "tagline": "Compartir es aprender dos veces.",
    "heroFullScreen": true,
    "summary": "<!-- This is a blog home page. To use this layout, you should set both blog: true and home: true in the page front matter. For related configuration docs, please see blog homepage ",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Blog Home"
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
    "minutes": 0.33,
    "words": 99
  },
  "filePathRelative": "readme.md"
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
