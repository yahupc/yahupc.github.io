export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-184f4da6","v-588beedb","v-9b1a840e","v-6bb3fea4","v-42eaf6b5","v-39264676"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-184f4da6","v-588beedb","v-9b1a840e","v-6bb3fea4","v-42eaf6b5","v-39264676"]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

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
