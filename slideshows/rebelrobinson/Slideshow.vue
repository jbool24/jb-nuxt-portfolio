<template lang="pug">
#slideshow(@click="handleClick")
  .slideshow-container
    Transition(
      :enter-active-class="direction === 'next' ? 'animate__animated animate__bounceInRight' : 'animate__animated animate__bounceInLeft'"
      :leave-active-class="direction === 'next' ? 'animate__animated animate__bounceOutLeft' : 'animate__animated animate__bounceOutRight'"
      mode="out-in")
      div(:key="currentSlide" class="slide-content")

        div(v-if="currentSlide === 0")
          h1 Rebel Robinson
          div(class="w-full items-center")
            img(class="mx-auto" src="/images/rebelrobinson_project.png")

        div(v-if="currentSlide === 1")
          h3 Project Goal
          p(v-if="step >= 2" class="pt-10")
            | The main challenge of this project was to deliver a site that could
            | continually be updated/maintained with very little overhead. This would allow
            | the owner to make changes in the future to highlight new work, offer
            | sales or promotions, and engage with her audience.
          p(v-if="step >= 3" class="pt-10")
            | Because of the ongoing costs related to maintenance, hosting, and the
            | constant patching of security risks, a traditional server-side CMS
            | such as Wordpress was not a good option. In this case, a completely
            | custom solution would also have been overkill and not well
            | suited for this project.

        div(v-if="currentSlide === 2")
          h3 Solution
          p
            | After discussing a few subscription based CMS tools, a strategic
            | decision was made to implement the site on the Wix platform for
            | the exceptional price model and its ease of use by the site owner
            | to maintain and modify it to her needs in the future with a wysiwyg
            | editor.
          p(v-if="step >= 2" class="pt-4")
            | I was able to deliver a modern and SEO ready
            | website that uses dynamic data. The owner can manage and upload
            | projects and photographs easily, engage with her clients and site
            | visitors in real-time chats when she chooses, and use the tool to help
            | facilitate bookings and manage promotions for her business.
          p(v-if="step >= 2" class="text-right animate__animated animate__heartBeat animate__delay-2s")
            | wanna see? -->
            a(href="https://www.rebelrobinson.com") &nbsp;link
</template>

<script setup>
const props = defineProps({
  onEndExit: {
    type: Function,
    default: null,
  },
})
const { currentSlide, step, direction, handleClick } = useSlideshow(
  [{ steps: 1 }, { steps: 3 }, { steps: 2 }],
  props.onEndExit ?? undefined
)
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

#slideshow {
  margin-top: 10vh;
  height: 80vh;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .slideshow-container {
    font-family: 'Raleway';
    background-color: #eef;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3em;
    }

    .slide-content {
      width: 25em;
      max-width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
