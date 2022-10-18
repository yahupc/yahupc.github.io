export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Data science":{"path":"/category/data-science/","keys":["v-4cd2e454"]},"Linux":{"path":"/category/linux/","keys":["v-740ae845"]},"Mysql":{"path":"/category/mysql/","keys":["v-7a09b4f3"]},"Vim":{"path":"/category/vim/","keys":["v-8b329072","v-5ad6ce7f"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
