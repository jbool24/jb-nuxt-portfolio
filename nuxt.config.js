module.exports = {
  mode: 'universal',
  target: 'static',
  telemetry: process.env.NODE_ENV !== 'production',
  publicRuntimeConfig: {
    SUBMIT_ENDPOINT: '/.netlify/functions/submit-email'
  },
  privateRuntimeConfig: {},
  head: {
    title: "Hello | I'm Justin Bellero",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/images/jbavatar_192x.png' }
    ]
  },
  css: [
    '@/assets/sass/site.scss',
    '@static/styles/font-awesome.min.css',
    '@static/styles/animate.css'
  ],
  plugins: [
    { src: '~/plugins/vue-scroll-reveal.client-only', mode: 'client' },
    { src: '~/plugins/eaglejs.client-only' },
    { src: '~/plugins/vue-formulate' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    ['@nuxtjs/google-gtag', { id: 'UA-105892790-1' }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    browserBaseURL: '/'
    // proxy: true
  },
  // proxy: {
  //   '/.netlify/functions/submit-email': {
  //     target: 'http://localhost:8888',
  //     pathRewrite: { '^/api/': '/.netlify/functions/' }
  //   }
  // },
  /*
   ** Build configuration
   */
  router: {
    middleware: ['navbar']
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
