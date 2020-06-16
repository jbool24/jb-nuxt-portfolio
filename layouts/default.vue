<template lang="pug">
  div
    #preloader.hidden
      #status.la-ball-triangle-path
        div
        div
        div

    //- HEADER
    .page-border(data-wow-duration='0.7s', data-wow-delay='0.2s')
      .top-border.fadeInDown.animated(style='visibility: visible; animation-name: fadeInDown;')
      .right-border.fadeInRight.animated(style='visibility: visible; animation-name: fadeInRight;')
      .bottom-border.fadeInUp.animated(style='visibility: visible; animation-name: fadeInUp;')
      .left-border.fadeInLeft.animated(style='visibility: visible; animation-name: fadeInLeft;')

    #wrapper
      header#banner.scrollto.clearfix(data-enllax-ratio='.6')
        TheNavbar

        IndexHero(v-if="$route.path === '/'")

      nuxt

    TheFooter

    div(class="bottombox")
</template>
<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'
import IndexHero from '~/components/sections/IndexHero.vue'
export default {
  components: {
    IndexHero,
    TheNavbar,
    TheFooter
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    user() {
      return {
        isAuthenticated: false
      }
    },
    showPreloader: () => 'false'
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
