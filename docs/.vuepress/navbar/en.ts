import { defineNavbarConfig } from "vuepress-theme-hope";

export const en = defineNavbarConfig([
  "/",
  { text: "Portfolio", link: "/portfolio/", icon: "folder" },
  { text: "About Me", link: "/about/", icon: "people" },
]);
