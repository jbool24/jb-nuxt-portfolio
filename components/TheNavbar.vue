<template lang="pug">
#header(:class="{'bg-white': navOpen}")
  div(class="flex justify-end md:justify-between h-full pl-10 pr-8 md:pr-20 items-center")
    #logo(:class="{hidden: !logoImg}")
     //-  //- Logo that is shown on the banner
     //- img#banner-logo(src="images/logo.png", alt="Landing Page")
     //-  //- The Logo that is shown on the sticky Navigation Bar
     //-  img#navigation-logo(src="images/logo-2.png", alt="Landing Page")

    nav#nav-main(class="hidden md:block")
      ul.flex
         li(v-if="$route.path !== '/'" ): nuxt-link(to='/') home
         li: a(href='javascript:void(0);' data-id="about" @click="goToElem") about
         li: a(href='javascript:void(0);' data-id="technology" @click="goToElem") technology
         li(v-if="$route.path !== '/portfolio'"): nuxt-link(to='/portfolio') portfolio
         li(v-if="$route.path !== '/resume'"): nuxt-link(to='/resume') resume
         li(v-if="$route.path !== '/contact'"): nuxt-link(to='/contact') contact
         //- li(v-if="user.isAuthenticated"): a(href='/app/logout') Sign Out
         //- li(v-else): a(href='/app') Sign In

    aside(class="hidden sm:block")
      ul.list-none.flex
        li
          a(target="_blank" title="Facebook" href="https://www.facebook.com/justin.bellero")
            i.fa.fa-facebook.fa-1x: span.hidden Facebook
        li
          a(target="_blank" title="Github" href="http://github.com/jbool24")
            i.fa.fa-github.fa-1x: span.hidden Github
        li
          a(target="_blank" title="Gitlab" href="http://gitlab.com/jbool24")
            i.fa.fa-gitlab.fa-1x: span.hidden Gitlab
        li
          a(target="_blank" title="Linkedin" href="http://www.linkedin.com/in/justinbellero")
            i.fa.fa-linkedin.fa-1x: span.hidden Linkedin
        li
          a(target="_blank" title="Twitter" href="http://www.twitter.com/jbool24")
            i.fa.fa-twitter.fa-1x: span.hidden Twitter

    #nav-trigger(class="block md:hidden ml-4")
      button(:class="{hidden: !navOpen }" class="fixed inset-0 h-full w-full bg-black z-0", @click="clickNav" style="opacity:50%;")
      span(class="block", style="", @click="clickNav")

    nav#nav-mobile(class="block md:hidden")
      ul(:class="{nav__open: navOpen}")
        li.mx-10(v-if="$route.path !== '/'"): nuxt-link(to='/') home
        li.mx-10: a(href='javascript:void(0);' data-id="about" @click="goToElem") about
        li.mx-10: a(href='javascript:void(0);' data-id="technology" @click="goToElem") technology
        li.mx-10(v-if="$route.path !== '/portfolio'"): nuxt-link(to='/portfolio') portfolio
        li.mx-10(v-if="$route.path !== '/resume'"): nuxt-link(to='/resume') resume
        li.mx-10(v-if="$route.path !== '/contact'"): nuxt-link(to='/contact') contact
        //- li(v-if="user.isAuthenticated"): a(href='/app/logout') Sign Out
        //- li(v-else): a(href='/app') Sign In
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: this.$store.state.navbar.isOpen,
      logoImg: null,
    }
  },
  computed: {
    navOpen() {
      return this.$store.state.navbar.isOpen
    },
  },
  methods: {
    clickNav() {
      if (this.$store.state.navbar.isOpen) {
        this.$store.dispatch('navbar/close')
      } else {
        this.$store.dispatch('navbar/open')
      }
    },
    goToElem(e) {
      e.preventDefault()
      if (process.client) {
        if (this.$route.name !== 'index') {
          this.$router.push(`/#${e.target.dataset.id}`)
        } else {
          const el = document.getElementById(e.target.dataset.id)
          const { y: ypos } = el.getBoundingClientRect()
          window.scrollTo({
            top: ypos,
            left: 0,
            behavior: 'smooth',
          })
        }
      }
      if (this.$store.state.navbar.isOpen) this.$store.dispatch('navbar/close')
    },
  },
}
</script>

<style lang="scss" scoped>
#header {
  height: 78px;
  transition: all 0.3s ease-out;

  #logo {
    height: 71px;
    line-height: 66px;
    margin-right: 15px;
  }

  nav a,
  i {
    color: #111;
  }
  nav#nav-main a {
    font-size: 13px;
    text-transform: uppercase;
    line-height: 71px;
    height: 71px;
    padding: 0 10px;
  }

  /* Navigation Colors when the Navigation is sticky and solid */
  aside {
    a {
      display: inline-block;
      text-align: center;
      width: 32px;
    }
  }

  #nav-trigger {
    span {
      display: inline-block;
      width: 38px;
      height: 71px;
      color: #111;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 22px;
      text-align: center;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }

    span:after {
      font-family: 'fontAwesome';
      display: inline-block;
      width: 38px;
      height: 71px;
      line-height: 75px;
      text-align: center;
      content: '\f0c9';
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }

  #nav-mobile {
    ul li a {
      color: #333;
    }
    a {
      display: block;
      padding: 12px 0;
      width: 100%;
      text-align: left;
      &:hover {
        background: #fafafa;
      }
    }
    ul {
      z-index: 9999;
      list-style-type: none;
      position: absolute;
      overflow: hidden;
      left: 0;
      right: 0;
      top: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;
      background-color: #fff;
      box-shadow: none;
      visibility: hidden;
      max-height: 0px;
      transition: max-height 0.6s ease-out, opacity 0.6s ease-out;

      li {
        display: block;
        padding: 0 10px;
        border-bottom: 1px solid #80808070;
      }

      &.nav__open {
        visibility: visible;
        max-height: fit-content;
        box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2);
        max-height: 204px;
      }
    }
  }

  /* Navigation Active State */

  &.nav-solid .active {
    color: #d2b356;
    border-color: #d2b356;
  }
}
</style>
