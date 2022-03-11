import { defineSidebarConfig } from "vuepress-theme-hope";

export const en = defineSidebarConfig({
  "/": [
    {
      icon: "blog",
      text: "Blog",
      collapsable: true,
      prefix: "posts/",
      //link: "posts/",
      children: [
        {
          icon: "python",
          text: "Data Science",
          collapsable: true,
          prefix: "datascience/",
          children: [
            {
              icon: "python",
              text: "Entorno",
              collapsable: true,
              prefix: "entorno/",
              children:["extensions","anaconda","conda_env","comandos_avanzados", "anaconda-mamba"],
            },
          ]
        },
      ],
    },
    {
      icon: "folder",
      text: "Portfolio",
      prefix: "portfolio/",
      link: "portfolio/",
      //children:[""],
    },
    {
      icon: "people",
      text: "About",
      collapsable: true,
      prefix: "about/",
      link: "about/",
      children: ["certifications", "courses", "experience"],
    },
  ],
});
