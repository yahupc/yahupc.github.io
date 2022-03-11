import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-184f4da6","/intro.html",{"title":"Bienvenidos","icon":"home","type":"article","readingTime":{"minutes":0.24,"words":72},"excerpt":"Bienvenidos Este blog se creo, con el fin de compartir mi experiencia en este apasionante mundo web. Compartiré algunos conceptos de programación, ademas de mis errores y aciertos ","sticky":true,"star":true},["/intro","/intro.md"]],
  ["v-8daa1a0e","/",{"title":"Blog Home","icon":"home","type":"home","readingTime":{"minutes":0.33,"words":99},"excerpt":"<!-- This is a blog home page. To use this layout, you should set both blog: true and home: true in the page front matter. For related configuration docs, please see blog homepage "},["/index.html","/readme.md"]],
  ["v-101a4f25","/about/certifications.html",{"title":"Certificaciones","type":"page","readingTime":{"minutes":0.1,"words":31},"excerpt":"Certificaciones\rDevOps Essentials Professional Certificate, Certiprof.; \rScrum Foundation Professional Certificate, Certiprof.;"},["/about/certifications","/about/certifications.md"]],
  ["v-fdf19bc8","/about/courses.html",{"title":"Cursos","type":"page","readingTime":{"minutes":0.71,"words":212},"excerpt":"Cursos Lista de Curso de Desarrollo Web realizados en Platzi. Backend\rdiploma-intro-laravel-2020.; \rdiploma-jee.; \rdiploma-oop.; \rdiploma-java-se.; \rdiploma-java-persistencia.; \rdi"},["/about/courses","/about/courses.md"]],
  ["v-a0e59c58","/about/experience.html",{"title":"Experiencia","type":"page","readingTime":{"minutes":0.3,"words":91},"excerpt":"Experiencia Asis Technology Partners, San Isidro - Lima:\rDiciembre 2021 - Actualidad; \rPHP | Python Backend Developer ; Kalp Perú S.A.C, Chiclayo :\rOctubre 2020 – Noviembre 2021; \r"},["/about/experience","/about/experience.md"]],
  ["v-74bc627b","/about/",{"title":"About","type":"home","readingTime":{"minutes":0.18,"words":53},"excerpt":"<!-- footer: Compartir es aprender dos veces! Copyright © 2021 Hecho con ❤️ by copyrightText: false --> Me desempeño principalmente como PHP Backend Developer , uso Laravel como fr"},["/about/index.html","/about/README.md"]],
  ["v-2e4c18c0","/portfolio/",{"title":"Portafolio","icon":"home","type":"home","readingTime":{"minutes":0.17,"words":50},"excerpt":"<!-- This is an example of a normal homepage. You can place your main content here. To use this layout, you need to set home: true in the page front matter. For related description"},["/portfolio/index.html","/portfolio/README.md"]],
  ["v-9b1a840e","/posts/datascience/entorno/anaconda-mamba.html",{"title":"Anaconda: Acelerar ambientes virtuales con Mamba","icon":"python","type":"article","readingTime":{"minutes":0.22,"words":67},"excerpt":"Anaconda: Acelerar ambientes virtuales con Mamba\rPueda que al crear tus ambientes de trabajo para tus proyectos, estos sean muy grandes y un poco dificiles de mantener, para existe","category":["Data science"],"star":true},["/posts/datascience/entorno/anaconda-mamba","/posts/datascience/entorno/anaconda-mamba.md"]],
  ["v-6bb3fea4","/posts/datascience/entorno/anaconda.html",{"title":"Instalacion de Anaconda","icon":"python","type":"article","readingTime":{"minutes":1.63,"words":490},"excerpt":"Instalacion de Anaconda\rNos dirigimos a la pagina oficial de Anaconda; \rDescargamos el instalador dependiendo de nuestro sistema operativo.; \r\" Si estas en Linux podrias usar el si","category":["Data science"],"star":true},["/posts/datascience/entorno/anaconda","/posts/datascience/entorno/anaconda.md"]],
  ["v-42eaf6b5","/posts/datascience/entorno/comandos_avanzados.html",{"title":"Anaconda: Comandos Avanzados","icon":"python","type":"article","readingTime":{"minutes":1.97,"words":591},"excerpt":"Anaconda: Comandos Avanzados\rCreamos un ambiente virtual (py39); \rPodemos instalar algun paquete que desearamos.; \r\" No se instaló correctamente, muestra el siguiente mensaje\"\rNos ","category":["Data science"],"star":true},["/posts/datascience/entorno/comandos_avanzados","/posts/datascience/entorno/comandos_avanzados.md"]],
  ["v-39264676","/posts/datascience/entorno/conda_env.html",{"title":"Anaconda: Creacion, clonacion y eliminacion de ambientes","icon":"python","type":"article","readingTime":{"minutes":2.59,"words":778},"excerpt":"Anaconda: Creacion, clonacion y eliminacion de ambientes\rRevisar nuestros ambientes conda en nuestra computadora.; Crear ambiente (env) Activar ambiente\rEjecutamos el comando activ","category":["Data science"],"star":true},["/posts/datascience/entorno/conda_env","/posts/datascience/entorno/conda_env.md"]],
  ["v-588beedb","/posts/datascience/entorno/extensions.html",{"title":"Extensiones VSCode para analisis de datos","icon":"python","type":"article","readingTime":{"minutes":0.78,"words":235},"excerpt":"Extensiones VSCode para analisis de datos\rPython; \rMagic Python; \rMaterial Icon Theme; \rRainbow Brackets; \rRemote Development; Notebook dentro de VSCode\rCrea una carpeta , añade un","category":["Data science"],"sticky":true,"star":true},["/posts/datascience/entorno/extensions","/posts/datascience/entorno/extensions.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"Articles","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"Encrypted","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"Slides","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"Star","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"Timeline","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-ee521814","/category/data-science/",{"title":"Data science Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/data-science/index.html"]],
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