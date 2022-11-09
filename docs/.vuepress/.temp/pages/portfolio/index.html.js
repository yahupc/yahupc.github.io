export const data = {
  "key": "v-2e4c18c0",
  "path": "/portfolio/",
  "title": "Portafolio",
  "lang": "en-US",
  "frontmatter": {
    "article": false,
    "home": true,
    "icon": "home",
    "title": "Portafolio",
    "heroImage": "/portfolio.png",
    "heroText": "Portafolio",
    "tagline": "En esta seccion contiene los proyectos en los que he aplicado lo aprendido.",
    "action": [
      {
        "text": "Github 💡",
        "link": "https://github.com/yahu39/",
        "type": "primary"
      },
      {
        "text": "Blog 🏠",
        "link": "/"
      }
    ],
    "features": [
      {
        "title": "BYV IESEMIN SAC ⚙️",
        "details": "Tecnologias Usadas. Wordpress, Mysql. Pagina web del sector Minero y Metalurgico.",
        "link": "https://byv.com.pe/"
      },
      {
        "title": "dondecomprar.app 🍔",
        "details": "Tecnologias Usadas. PHP, Laravel, Mysql. Aplicacion web en la que puedes adquirir cupones de descuento de las promociones de negocios de tu localidad.",
        "link": "https://aplicacion.dondecomprar.app/"
      },
      {
        "title": "Exchange criptomonedas 📈 ₿",
        "details": "Tecnologias Usadas. Vue, Tailwind, API(api.coincap.io/v2). Pagina que muestra las principales criptomonedas, conversiones y estadistica.",
        "link": "https://exchange.pabloyafac.com/"
      },
      {
        "title": "Blog Personal 📝",
        "details": "Tecnologias Usadas. Vue.js. Para este blog personal, se utilizo un  generador de paginas estaticas llamado Vuepress. Que utiliza el poder del Markdown y Vue para la generacion rapida del contenido del blog.",
        "link": "https://vuepress.pabloyafac.com/"
      },
      {
        "title": "E-commmerce 🏬",
        "details": "Tecnologias Usadas. WordPress. Tienda Online, para la venta de diversos productos. Medios de Pago.",
        "link": "https://store.pabloyafac.com/"
      }
    ],
    "copyrightText": false,
    "summary": "<!-- This is an example of a normal homepage. You can place your main content here. To use this layout, you need to set home: true in the page front matter. For related description",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/portfolio/"
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
  "filePathRelative": "portfolio/README.md"
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
