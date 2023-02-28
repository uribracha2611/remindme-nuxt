// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules:['@nuxtjs/tailwindcss',['@pinia/nuxt',{
  
  autoImports: 
  [
    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
  ],
  imports: {
    dirs: ['stores'],
  },

},
]
],
css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    "@/index.css"
  ],
  runtimeConfig:{
    public:{
      base_url:process.env.BASE_URL || "http://localhost:5000"
    }

  },

  plugins: [
    { src: "~/plugins/Pagination.js", mode: "client" },
  ],
})
