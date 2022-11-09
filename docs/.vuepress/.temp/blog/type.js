export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-184f4da6","v-740ae845","v-7a09b4f3","v-4cd2e454","v-687320b9","v-8b329072","v-5ad6ce7f","v-12cdfa3a"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-184f4da6","v-740ae845","v-7a09b4f3","v-4cd2e454","v-8b329072","v-5ad6ce7f"]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
