<template lang="pug">
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
            a(target="_blank" title="Twitter" href="http://www.twitter.com/jbool24")
              i.fa.fa-twitter.fa-1x: span Twitter

      nav#nav-main
        ul
          li: nuxt-link(to='/') home
          li: a(href='javascript:void(0);' data-id="about" @click="goToElem") about
          li: a(href='javascript:void(0);' data-id="technology" @click="goToElem") technology
          li: nuxt-link(to='/contact') contact
          //- li(v-if="user.isAuthenticated"): a(href='/app/logout') Sign Out
          //- li(v-else): a(href='/app') Sign In
      #nav-trigger: span(@click="isNavOpen = !isNavOpen")
      nav#nav-mobile(class="sm:invisible")
        ul(:class="{nav__open: navOpen}")
          li: nuxt-link(to='/') home
          li: a(href='javascript:void(0);' data-id="about" @click="goToElem") about
          li: a(href='javascript:void(0);' data-id="technology" @click="goToElem") technology
          li: nuxt-link(to='/contact') contact
          //- li(v-if="user.isAuthenticated"): a(href='/app/logout') Sign Out
          //- li(v-else): a(href='/app') Sign In
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false
    }
  },
  computed: {
    navOpen() {
      return this.isNavOpen
    }
  },
  methods: {
    goToElem(e) {
      e.preventDefault()
      if (process.client) {
        const el = document.getElementById(e.target.dataset.id)
        const { y: ypos } = el.getBoundingClientRect()
        window.scrollTo({
          top: ypos,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang="css" scoped></style>
