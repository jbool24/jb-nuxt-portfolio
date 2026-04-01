<template lang="pug">
    div
        div(class="absolute top-0 right-0 w-full md:w-4/6 lg:w-auto text-center animate__animated animate__fadeOutDown animate__delay-5s")
          div(class="mt-2 md:mt-16 md:mr-16 px-2 py-1 text-gray-200 bg-green-500 rounded animate__animated animate__heartBeat") Scroll, Tap L/R edges, or use L/R keys to navigate!
        component(v-if="slideshow" :is="slideshow.component" :onEndExit="goTo")
</template>

<script setup>
definePageMeta({ layout: 'full-page' })
</script>

<script>
import slideshows from '@/slideshows'
export default {
  data() {
    const match = slideshows.list.find(
      (project) => project.info.path === this.$route.path
    )
    return {
      slideshow: match ?? null,
    }
  },
  methods: {
    goTo() {
      this.$router.push('/portfolio')
    },
  },
}
</script>
