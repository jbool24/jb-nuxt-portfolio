<template lang="pug">
    section.frontpage
        .content(class="h-full")
            h1(class="pl-16 font-bold") Projects
            p(class="w-full md:w-1/2")

        .thumbnails
          .box-card(v-for='slideshow in allSlideshows' class="w-full md:w-1/2 p-8")
            NuxtLink(:to='slideshow.info.path' @click="click")
              .embedded-slideshow-container
                img(:src="slideshow.info.image")
            .caption(class="text-center")
              h3 {{slideshow.info.title}}
              p.thumbnail-description {{slideshow.info.description}}

</template>

<script setup>
import slideshowsModule from '@/slideshows'

useHead({ title: "Portfolio | I'm Justin Bellero" })

const allSlideshows = slideshowsModule.list

function click(evt) {
  evt.stopPropagation()
}
</script>

<style lang="scss" scoped>
.frontpage {
  @apply flex flex-col h-full mt-20 mx-10 mb-40;
}
.thumbnails {
  @apply flex flex-grow flex-wrap mt-10 mb-20;

  .box-card:not(:last-child) {
    @apply mb-10;
  }
}
</style>
