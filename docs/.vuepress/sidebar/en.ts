import { defineSidebarConfig } from "vuepress-theme-hope";

export const en = defineSidebarConfig({
  "/": [
    "",
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
