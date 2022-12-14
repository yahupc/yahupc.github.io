export const themeData = {
  "hostname": "https://vuepress-theme-hope-v2-demo.mrhope.site",
  "author": {
    "name": "Pablo Yafac",
    "url": "https://yahupc.github.io"
  },
  "iconPrefix": "iconfont icon-",
  "logo": "/pablo.png",
  "docsDir": "demo/src",
  "blog": {
    "medias": {
      "GitHub": "https://https://github.com/yahupc",
      "Linkedin": "https://www.linkedin.com/in/pablo-yafac-95348412/",
      "Twitter": "https://twitter.com/yahupc"
    },
    "articleInfo": [
      "Author",
      "Original",
      "Date",
      "Category",
      "Tag",
      "ReadingTime"
    ],
    "articlePerPage": 10,
    "sidebarDisplay": "mobile"
  },
  "locales": {
    "/": {
      "navbar": [
        "/",
        {
          "text": "Portfolio",
          "link": "/portfolio/",
          "icon": "folder"
        },
        {
          "text": "About Me",
          "link": "/about/",
          "icon": "people"
        }
      ],
      "sidebar": {
        "/": [
          {
            "icon": "blog",
            "text": "Blog",
            "collapsable": true,
            "prefix": "posts/",
            "children": [
              {
                "icon": "python",
                "text": "Data Science",
                "collapsable": true,
                "prefix": "datascience/",
                "children": [
                  {
                    "icon": "python",
                    "text": "Entorno",
                    "collapsable": true,
                    "children": [
                      "entorno"
                    ]
                  }
                ]
              },
              {
                "icon": "linux",
                "text": "Linux",
                "prefix": "linux/",
                "collapsable": true,
                "children": [
                  "utils-commands",
                  "comprimir"
                ]
              },
              {
                "icon": "mysql",
                "text": "Mysql",
                "prefix": "mysql/",
                "collapsable": true,
                "children": [
                  "utils-commands"
                ]
              }
            ]
          },
          {
            "icon": "folder",
            "text": "Portfolio",
            "prefix": "portfolio/",
            "link": "portfolio/"
          },
          {
            "icon": "people",
            "text": "About",
            "collapsable": true,
            "prefix": "about/",
            "link": "about/",
            "children": [
              "certifications",
              "courses",
              "experience"
            ]
          }
        ]
      },
      "footer": "Compartir es aprender dos veces! Hecho con ??????",
      "displayFooter": true,
      "blog": {
        "description": "A BackEnd programmer",
        "intro": "/intro.html"
      },
      "metaLocales": {
        "editLink": "Edit this page",
        "prev": "Prev",
        "next": "Next",
        "lastUpdated": "Last update",
        "contributors": "Contributors"
      },
      "lang": "en-US",
      "navbarLocales": {
        "langName": "English",
        "selectLangText": "Language",
        "selectLangAriaLabel": "Select language"
      },
      "blogLocales": {
        "article": "Articles",
        "articleList": "Article List",
        "category": "Category",
        "tag": "Tags",
        "timeline": "Timeline",
        "timelineTitle": "Yesterday Once More!",
        "all": "All",
        "intro": "Personal Intro",
        "star": "Star",
        "slides": "Slides",
        "encrypt": "Encrypted"
      },
      "outlookLocales": {
        "themeColor": "Theme Color",
        "darkmode": "Theme Mode",
        "fullscreen": "Full Screen"
      },
      "encryptLocales": {
        "title": "Please enter password",
        "errorHint": "Please enter the correct password!"
      },
      "routeLocales": {
        "404msg": [
          "There???s nothing here.",
          "How did we get here?",
          "That???s a Four-Oh-Four.",
          "Looks like we've got some broken links."
        ],
        "back": "Go back",
        "home": "Take me home"
      }
    },
    "/zh/": {
      "navbar": [
        "/zh/",
        "/zh/home",
        {
          "text": "????????????",
          "icon": "creative",
          "link": "/zh/guide/"
        },
        {
          "text": "??????",
          "icon": "edit",
          "prefix": "/zh/posts/",
          "children": [
            {
              "text": "?????? 1-4",
              "icon": "edit",
              "prefix": "article/",
              "children": [
                {
                  "text": "?????? 1",
                  "icon": "edit",
                  "link": "article1"
                },
                {
                  "text": "?????? 2",
                  "icon": "edit",
                  "link": "article2"
                },
                "article3",
                "article4"
              ]
            },
            {
              "text": "?????? 5-12",
              "icon": "edit",
              "children": [
                {
                  "text": "?????? 5",
                  "icon": "edit",
                  "link": "article/article5"
                },
                {
                  "text": "?????? 6",
                  "icon": "edit",
                  "link": "article/article6"
                },
                "article/article7",
                "article/article8"
              ]
            },
            {
              "text": "?????? 9",
              "icon": "edit",
              "link": "article9"
            },
            {
              "text": "?????? 10",
              "icon": "edit",
              "link": "article10"
            },
            "article11",
            "article12"
          ]
        },
        {
          "text": "????????????",
          "icon": "note",
          "link": "https://vuepress-theme-hope.github.io/v2/zh/"
        }
      ],
      "sidebar": {
        "/zh/": [
          "",
          "home",
          "slide",
          {
            "text": "????????????",
            "icon": "creative",
            "prefix": "guide/",
            "children": [
              "",
              "page",
              "markdown",
              "disable",
              "encrypt"
            ]
          },
          {
            "text": "??????",
            "icon": "note",
            "prefix": "posts/",
            "children": [
              {
                "text": "?????? 1-4",
                "icon": "note",
                "collapsable": true,
                "prefix": "article/",
                "children": [
                  "article1",
                  "article2",
                  "article3",
                  "article4"
                ]
              },
              {
                "text": "?????? 5-12",
                "icon": "note",
                "children": [
                  {
                    "text": "?????? 5-8",
                    "icon": "note",
                    "collapsable": true,
                    "prefix": "article/",
                    "children": [
                      "article5",
                      "article6",
                      "article7",
                      "article8"
                    ]
                  },
                  {
                    "text": "?????? 9-12",
                    "icon": "note",
                    "children": [
                      "article9",
                      "article10",
                      "article11",
                      "article12"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": "????????????",
      "displayFooter": true,
      "blog": {
        "description": "?????????????????????",
        "intro": "/zh/intro.html"
      },
      "metaLocales": {
        "editLink": "????????????",
        "prev": "?????????",
        "next": "?????????",
        "lastUpdated": "???????????????",
        "contributors": "?????????"
      },
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "????????????",
        "selectLangText": "????????????",
        "selectLangAriaLabel": "????????????"
      },
      "blogLocales": {
        "article": "??????",
        "articleList": "????????????",
        "category": "??????",
        "tag": "??????",
        "timeline": "?????????",
        "timelineTitle": "????????????",
        "all": "??????",
        "intro": "????????????",
        "star": "??????",
        "slides": "?????????",
        "encrypt": "??????"
      },
      "outlookLocales": {
        "themeColor": "?????????",
        "darkmode": "??????",
        "fullscreen": "??????"
      },
      "encryptLocales": {
        "title": "???????????????",
        "errorHint": "?????????????????????"
      },
      "routeLocales": {
        "404msg": [
          "?????????????????????",
          "?????????????????????????????????",
          "??? ??? ??? ??? ??? !",
          "??????????????????????????????????????????"
        ],
        "back": "???????????????",
        "home": "????????????"
      }
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$Vy7cIzLAGpx8LR9ycimtqOT5FawK8ZzVYJ9G5FZNrddip/ZmpNG3e"
      ],
      "/zh/guide/encrypt.html": [
        "$2a$10$V9ZVflF6FL2nHt3ejhsN0ui3wktr8ytDWDPeJTey6MA8buvA6MMzm"
      ]
    },
    "global": false
  },
  "repoDisplay": true,
  "navbarIcon": true,
  "navbarAutoHide": "mobile",
  "hideSiteNameonMobile": true,
  "sidebar": "auto",
  "sidebarIcon": true,
  "headingDepth": 2,
  "pure": false,
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullScreen": true
}
