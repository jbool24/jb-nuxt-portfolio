<template lang="pug">
    div
        div(class="absolute top-0 right-0 w-full md:w-4/6 lg:w-auto text-center animate__animated animate__fadeOutDown animate__delay-5s") 
          div(class="mt-2 md:mt-16 md:mr-16 px-2 py-1 text-gray-200 bg-green-500 rounded animate__animated animate__heartBeat") Scroll, Tap L/R edges, or use L/R keys to navigate!
        component(:is="slideshow", :onEndExit="goTo")
</template>

<script>
import slideshows from '@/slideshows'
export default {
  layout: 'full-page',
  data() {
    return {
      slideshow: slideshows.list.find(
        (project) => project.info.path === this.$route.path
      ),
    }
  },
  methods: {
    goTo() {
      this.$router.push('/portfolio')
    },
  },
}
</script>

<style lang="scss">
@import 'eagle.js/dist/themes/gourmet/gourmet.css';
</style>
