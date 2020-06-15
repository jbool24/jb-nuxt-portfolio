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
        #header.nav-collapse
          .row.clearfix
            .col-1
              #logo
               //-  //- Logo that is shown on the banner
               //-  img#banner-logo(src="images/logo.png", alt="Landing Page")
               //-  //- The Logo that is shown on the sticky Navigation Bar
               //-  img#navigation-logo(src="images/logo-2.png", alt="Landing Page")
              aside
                ul.social-icons
                  li
                    a(target="_blank" title="Facebook" href="https://www.facebook.com/justin.bellero")
                      i.fa.fa-facebook.fa-1x: span Facebook
                  li
                    a(target="_blank" title="Github" href="http://github.com/jbool24")
                      i.fa.fa-github.fa-1x: span Github
                  li
                    a(target="_blank" title="Github" href="http://gitlab.com/jbool24")
                      i.fa.fa-gitlab.fa-1x: span Gitlab
                  li
                    a(target="_blank" title="Linkedin" href="http://www.linkedin.com/in/justinbellero")
                      i.fa.fa-linkedin.fa-1x: span Linkedin
                  li
                    a(target="_blank" title="Twitter" href="http://www.twitter.com/jbellero")
                      i.fa.fa-twitter.fa-1x: span Twitter

              nav#nav-main
                ul
                  li: nuxt-link(to='/') home
                  li: a(href='#about') about
                  li: a(href='#technology') technology
                  li: nuxt-link(to='/contact') contact
                  //- li(v-if="user.isAuthenticated"): a(href='/app/logout') Sign Out
                  //- li(v-else): a(href='/app') Sign In

              #nav-trigger: span
              nav#nav-mobile

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
