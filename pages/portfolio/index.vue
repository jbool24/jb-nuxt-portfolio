<template lang="pug">
    section.frontpage
        .content(class="h-full")
            //- h1
            //-   span.logo
            //-   span Eagle
            //-   span.grey .js
            h1(class="pl-16 font-bold") Projects

            p(class="w-full md:w-1/2")
              //- | Some web development projects I've worked on.


        .thumbnails
          .box-card(v-for='slideshow in slideshows' class="w-full md:w-1/2 p-8")
            nuxt-link(:to='slideshow.info.path' @click.native="click")
              .embedded-slideshow-container
                img(:src="slideshow.info.image")
            .caption(class="text-center")
              h3 {{slideshow.info.title}}
              p.thumbnail-description {{slideshow.info.description}}

</template>

<script>
import slideshows from '@/slideshows'

export default {
  data() {
    return {
      slideshows: slideshows.list,
    }
  },
  mounted() {
    document.currentSlide = {}
  },
  methods: {
    click(evt) {
      evt.stopPropagation()
    },
  },
  head: {
    title: "Portfolio | I'm Justin Bellero",
  },
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
