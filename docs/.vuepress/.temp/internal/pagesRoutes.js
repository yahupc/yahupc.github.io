import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-184f4da6","/intro.html",{"title":"Bienvenidos","icon":"home","type":"article","readingTime":{"minutes":0.24,"words":73},"excerpt":"Bienvenidos Este blog se creo, con el fin de compartir mi experiencia en este apasionante mundo web. Compartiré algunos conceptos de programación, ademas de mis errores y aciertos ","date":"2022-03-04T18:06:19.000Z","sticky":true,"star":true},["/intro","/intro.md"]],
  ["v-8daa1a0e","/",{"title":"Blog Home","icon":"home","type":"home","readingTime":{"minutes":0.33,"words":99},"excerpt":"<!-- This is a blog home page. To use this layout, you should set both blog: true and home: true in the page front matter. For related configuration docs, please see blog homepage ","date":"2022-03-04T18:06:19.000Z"},["/index.html","/readme.md"]],
  ["v-74bc627b","/about/",{"title":"About","type":"home","readingTime":{"minutes":0.18,"words":53},"excerpt":"<!-- footer: Compartir es aprender dos veces! Copyright © 2021 Hecho con ❤️ by copyrightText: false --> Me desempeño principalmente como PHP Backend Developer , uso Laravel como fr","date":"2022-03-04T18:06:19.000Z"},["/about/index.html","/about/README.md"]],
  ["v-101a4f25","/about/certifications.html",{"title":"Certificaciones","type":"page","readingTime":{"minutes":0.07,"words":21},"excerpt":"Certificaciones DevOps Essentials Professional Certificate, Certiprof.; Scrum Foundation Professional Certificate, Certiprof.;","date":"2022-03-04T18:06:19.000Z"},["/about/certifications","/about/certifications.md"]],
  ["v-fdf19bc8","/about/courses.html",{"title":"Cursos","type":"page","readingTime":{"minutes":0.5,"words":151},"excerpt":"Cursos Lista de Curso de Desarrollo Web realizados en Platzi. Backend diploma-python; diploma-jupyter-notebook; diploma-intro-laravel-2020.; diploma-jee.; diploma-oop.; diploma-jav","date":"2022-03-04T18:06:19.000Z"},["/about/courses","/about/courses.md"]],
  ["v-a0e59c58","/about/experience.html",{"title":"Experiencia","type":"page","readingTime":{"minutes":0.3,"words":91},"excerpt":"Experiencia Asis Technology Partners, San Isidro - Lima: Diciembre 2021 - Actualidad; PHP | Python Backend Developer ; Kalp Perú S.A.C, Chiclayo : Octubre 2020 – Noviembre 2021; PH","date":"2022-03-04T18:06:19.000Z"},["/about/experience","/about/experience.md"]],
  ["v-2e4c18c0","/portfolio/",{"title":"Portafolio","icon":"home","type":"home","readingTime":{"minutes":0.17,"words":50},"excerpt":"<!-- This is an example of a normal homepage. You can place your main content here. To use this layout, you need to set home: true in the page front matter. For related description","date":"2022-03-04T18:06:19.000Z"},["/portfolio/index.html","/portfolio/README.md"]],
  ["v-4cd2e454","/posts/datascience/entorno.html",{"title":"Configuración de entorno para analisis de Datos","icon":"python","type":"article","readingTime":{"minutes":7.26,"words":2179},"excerpt":"Configuración de entorno para analisis de Datos 1. Extensiones VSCode Python; Magic Python; Material Icon Theme; Rainbow Brackets; Remote Development; 1.1. Notebook dentro de VSCod","date":"2022-06-18T06:51:55.000Z","category":["Data science"],"star":true},["/posts/datascience/entorno","/posts/datascience/entorno.md"]],
  ["v-687320b9","/posts/linux/comprimir.html",{"title":"Compresión de Archivos","type":"article","readingTime":{"minutes":0.61,"words":184},"excerpt":"Compresión de Archivos Comprimir y descomprimir .tar (tar) Para comprimir archivos .tar, debemos utilizar: ; tar cvf archivo.tar /archivo/carpeta/* Para descomprimir archivos .tar,","date":"2022-10-18T04:53:27.000Z"},["/posts/linux/comprimir","/posts/linux/comprimir.md"]],
  ["v-2b0d27db","/posts/linux/dotfiles.html",{"title":"dotfiles","type":"article","readingTime":{"minutes":0.53,"words":158},"excerpt":"dotfiles Los archivos dotfiles, son los archivos que utilizan algunos programas para su configuracion y personalización. Estos estan ocultos y comienzan con la extension . (\"punto\"","date":"2023-06-05T04:29:58.000Z"},["/posts/linux/dotfiles","/posts/linux/dotfiles.md"]],
  ["v-421cbe14","/posts/linux/sshfs.html",{"title":"sshfs","type":"article","readingTime":{"minutes":0.92,"words":275},"excerpt":"sshfs En informática, SSHFS (SSH Filesystem) es un cliente de sistema de archivos para montar e interactuar con directorios y archivos ubicados en un servidor remoto o estación de ","date":"2023-06-21T21:22:36.000Z"},["/posts/linux/sshfs","/posts/linux/sshfs.md"]],
  ["v-740ae845","/posts/linux/utils-commands.html",{"title":"Comandos Utiles","icon":"code","type":"article","readingTime":{"minutes":0.94,"words":282},"excerpt":"Comandos Utiles Cuando uses Linux , una de las maravillas que tiene este sistema operativo, es su terminal. Puedes realizar practicamente lo que quieras con el. Aqui te daré alguno","date":"2022-06-18T06:51:55.000Z","category":["Linux"],"sticky":true,"star":true},["/posts/linux/utils-commands","/posts/linux/utils-commands.md"]],
  ["v-7a09b4f3","/posts/mysql/utils-commands.html",{"title":"Comandos Utiles en MYSQL","icon":"code","type":"article","readingTime":{"minutes":0.83,"words":249},"excerpt":"Comandos Utiles en MYSQL Basicos: Insertar registros: Actualizar registros: Eliminar registros: Cambiar el tamaño de una columna Eliminando duplicados: Buscar y reemplazar valor en","date":"2022-06-23T17:50:35.000Z","category":["Mysql"],"sticky":true,"star":true},["/posts/mysql/utils-commands","/posts/mysql/utils-commands.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"Articles","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"Encrypted","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"Slides","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"Star","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"Timeline","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-ee521814","/category/data-science/",{"title":"Data science Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/data-science/index.html"]],
  ["v-9c48d85a","/category/linux/",{"title":"Linux Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/linux/index.html"]],
  ["v-9717cc36","/category/mysql/",{"title":"Mysql Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/mysql/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
