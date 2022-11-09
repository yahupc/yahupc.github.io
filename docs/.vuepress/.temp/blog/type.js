export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-7a09b4f3","v-740ae845","v-184f4da6","v-687320b9","v-8b329072","v-5ad6ce7f","v-12cdfa3a","v-4cd2e454"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-7a09b4f3","v-740ae845","v-184f4da6","v-8b329072","v-5ad6ce7f","v-4cd2e454"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-687320b9","v-8b329072","v-5ad6ce7f","v-12cdfa3a","v-7a09b4f3","v-740ae845","v-4cd2e454","v-184f4da6"]}}}

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
