export const data = {
  "key": "v-74bc627b",
  "path": "/about/",
  "title": "About",
  "lang": "en-US",
  "frontmatter": {
    "title": "About",
    "home": true,
    "heroImage": "/pablo.png",
    "heroText": "Hola soy Pablo Yafac.",
    "tagline": "Web Developer 👨‍💻 | Ingeniero de Sistemas",
    "article": false,
    "action": [
      {
        "text": "Portafolio 📁",
        "link": "/portfolio/",
        "type": "primary"
      },
      {
        "text": "Blog 🏠",
        "link": "/"
      }
    ],
    "summary": "<!-- footer: Compartir es aprender dos veces! Copyright © 2021 Hecho con ❤️ by copyrightText: false --> Me desempeño principalmente como PHP Backend Developer , uso Laravel como fr",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/about/"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "About"
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
    "minutes": 0.18,
    "words": 53
  },
  "filePathRelative": "about/README.md"
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
