<template lang="pug">
    div
        component(:is="slideshow", :mouseNavigation="false")
</template>

<script>
import slideshows from '@/slideshows'
export default {
  layout: 'full-page',
  data() {
    return {
      slideshow: slideshows.list.find(
        (project) => project.info.path === this.$route.path
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
