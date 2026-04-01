<template lang="pug">
#slideshow(@click="handleClick")
  .slideshow-container
    Transition(
      :enter-active-class="direction === 'next' ? 'animate__animated animate__bounceInRight' : 'animate__animated animate__bounceInLeft'"
      :leave-active-class="direction === 'next' ? 'animate__animated animate__bounceOutLeft' : 'animate__animated animate__bounceOutRight'"
      mode="out-in")
      div(:key="currentSlide" class="slide-content")

        div(v-if="currentSlide === 0")
          h1 HCI College
          div(class="w-full items-center")
            img(class="mx-auto" src="/images/hci_project.png")

        div(v-if="currentSlide === 1")
          h3 Project Description
          p(class="pt-10")
            | For this project, I created a lead generation automation and CRM integration for a large
            | continuing education institute in Florida. The client had been
            | struggling with social platforms and isolated data for some time.
          p(v-if="step >= 2" class="pt-4")
            | In order to improve the workflow for capturing data from their social brand
            | presences into an existing business systems I deployed a custom solution,
            | using PHP7 to comply with their existing environment, to directly import real-time data and
            | information about prospective students.
          p(v-if="step >= 2" class="pt-6 text-right")
            | go to their site? -->
            a(href="https://www.hci.edu/") &nbsp;link
</template>

<script setup>
const props = defineProps({
  onEndExit: {
    type: Function,
    default: null,
  },
})
const { currentSlide, step, direction, handleClick } = useSlideshow(
  [{ steps: 1 }, { steps: 2 }],
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
