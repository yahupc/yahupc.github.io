export const themeData = {
  "hostname": "https://vuepress-theme-hope-v2-demo.mrhope.site",
  "author": {
    "name": "Pablo Yafac",
    "url": "https://pabloyafac.com"
  },
  "iconPrefix": "iconfont icon-",
  "logo": "/pablo.png",
  "docsDir": "demo/src",
  "blog": {
    "medias": {
      "GitHub": "https://https://github.com/yahu39",
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
                    "prefix": "entorno/",
                    "children": [
                      "extensions",
                      "anaconda",
                      "conda_env",
                      "comandos_avanzados",
                      "anaconda-mamba"
                    ]
                  }
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
      "footer": "Compartir es aprender dos veces! Hecho con ❤️",
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
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
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
          "text": "使用指南",
          "icon": "creative",
          "link": "/zh/guide/"
        },
        {
          "text": "博文",
          "icon": "edit",
          "prefix": "/zh/posts/",
          "children": [
            {
              "text": "文章 1-4",
              "icon": "edit",
              "prefix": "article/",
              "children": [
                {
                  "text": "文章 1",
                  "icon": "edit",
                  "link": "article1"
                },
                {
                  "text": "文章 2",
                  "icon": "edit",
                  "link": "article2"
                },
                "article3",
                "article4"
              ]
            },
            {
              "text": "文章 5-12",
              "icon": "edit",
              "children": [
                {
                  "text": "文章 5",
                  "icon": "edit",
                  "link": "article/article5"
                },
                {
                  "text": "文章 6",
                  "icon": "edit",
                  "link": "article/article6"
                },
                "article/article7",
                "article/article8"
              ]
            },
            {
              "text": "文章 9",
              "icon": "edit",
              "link": "article9"
            },
            {
              "text": "文章 10",
              "icon": "edit",
              "link": "article10"
            },
            "article11",
            "article12"
          ]
        },
        {
          "text": "主题文档",
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
            "text": "如何使用",
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
            "text": "文章",
            "icon": "note",
            "prefix": "posts/",
            "children": [
              {
                "text": "文章 1-4",
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
                "text": "文章 5-12",
                "icon": "note",
                "children": [
                  {
                    "text": "文章 5-8",
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
                    "text": "文章 9-12",
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
      "footer": "默认页脚",
      "displayFooter": true,
      "blog": {
        "description": "一个前端开发者",
        "intro": "/zh/intro.html"
      },
      "metaLocales": {
        "editLink": "编辑此页",
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者"
      },
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "请输入密码",
        "errorHint": "请输入正确密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家"
      }
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$gBRPWV9Fke4Ufayl.vdKq.RiqJzqn.kZ5jwwzrklVFzxLawNdvAte"
      ],
      "/zh/guide/encrypt.html": [
        "$2a$10$11MSJHqfP0lwTFuyr..sQOa7pumP0wANlsU.GMqyrAym305XNAzwu"
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
