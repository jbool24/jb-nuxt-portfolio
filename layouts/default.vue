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
      header#banner.scrollto(data-enllax-ratio='.6')
        TheNavbar

        IndexHero(v-if="$route.path === '/'")
        div#foldLine(aria-hidden='true')

      nuxt

      TheFooter

    a#scrollUp(
      style="z-index:999;",
      class="fixed overflow-hidden animated",
      :class="{ fadeIn: showScroller, invisible: !showScroller }" @click="scrollToTop")

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
      loading: false,
      showScroller: false
    }
  },
  computed: {
    user() {
      return {
        isAuthenticated: false
      }
    },
    showPreloader: () => 'false'
  },
  mounted() {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].boundingClientRect.y < 0) {
          document.body.classList.add('pastFold')
          this.showScroller = true
        } else {
          document.body.classList.remove('pastFold')
          this.showScroller = false
        }
      })
      observer.observe(document.querySelector('#foldLine'))
    }
  },
  methods: {
    scrollToTop(e) {
      e.preventDefault()
      if (process.client)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
header#banner {
  position: relative;

  &::after {
    content: ' ';
    background: url('/images/banner-images/banner-image_mobile.jpg') no-repeat
      center top;
    background-size: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    @screen md {
      background: url('/images/banner-images/banner-image-03.jpg') no-repeat
        center top;
      background-size: cover;
      opacity: 0.9;
    }
  }
}
</style>

<style>
* * {
  /* outline: solid 2px yellow; */
}
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
body {
  background: #fcfcfc;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
a,
.la-ball-triangle-path {
  color: #d2b356;
}

a:hover,
#header.nav-solid nav a:hover {
  color: #d2b356;
}

/* Default Icon Color */

.icon i {
  color: #d2b356;
}

/* Border Color */

#banner .section-heading:before,
.testimonial.classic footer:before {
  background: #d2b356;
}

.pricing-block-content:hover {
  border-color: #d2b356;
}
.section-header {
  color: #858585;
}

.button,
input[type='submit'] {
  font-family: 'Open Sans', sans-serif, Arial, Helvetica;
  font-size: 14px;
  font-weight: bold;
  color: #111;
}

/* Button Color */

.button,
input[type='submit'] {
  border-color: #111;
}

/* Button Hover Color */

.button:hover,
input[type='submit']:hover {
  border-color: #d2b356;
  color: #d2b356;
}
/* Standard Headings h1-h6 */

h1 {
  font-family: 'Open Sans', sans-serif, Arial, Helvetica;
  font-size: 40px;
  font-weight: 300;
  color: #111;
}

h2 {
  font-family: 'Open Sans', sans-serif, Arial, Helvetica;
  font-size: 34px;
  font-weight: 300;
  color: #111;
}

h3 {
  font-family: 'Open Sans', sans-serif, Arial, Helvetica;
  font-size: 30px;
  font-weight: 700;
  color: #111;
}

h4 {
  font-family: 'Open Sans', sans-serif, Arial, Helvetica;
  font-size: 18px;
  font-weight: 400;
  color: #111;
}

h5 {
  font-family: 'Open Sans', sans-serif, Arial, Helvetica;
  font-size: 16px;
  font-weight: 400;
  color: #111;
}

h6 {
  font-family: 'Open Sans', sans-serif, Arial, Helvetica;
  font-size: 14px;
  font-weight: 400;
  color: #111;
}
</style>
