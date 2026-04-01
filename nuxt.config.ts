export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  ssr: true,

  app: {
    head: {
      title: "Hello | I'm Justin Bellero",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "Justin Bellero's portfolio" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/jbavatar_192x.png' },
        { rel: 'stylesheet', href: '/styles/font-awesome.min.css' },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@pinia/nuxt',
    ['nuxt-gtag', { id: 'UA-105892790-1' }],
  ],

  css: [
    '@/assets/sass/site.scss',
    'animate.css', // installed as npm module
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls: false,
      },
    },
  },
})
