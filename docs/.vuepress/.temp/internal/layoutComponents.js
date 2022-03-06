import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/yahupc/Desktop/Vuepress.v1/pabloyafac.com-vth_v2/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("/home/yahupc/Desktop/Vuepress.v1/pabloyafac.com-vth_v2/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("vuepress-plugin-md-enhance/lib/client/SlidePage.js")),
  "Blog": defineAsyncComponent(() => import("/home/yahupc/Desktop/Vuepress.v1/pabloyafac.com-vth_v2/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
