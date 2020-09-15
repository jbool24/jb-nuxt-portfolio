<template lang="pug">
    div
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
