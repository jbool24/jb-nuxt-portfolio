<template lang="pug">
#slideshow.eg-theme-gourmet
  .eg-slideshow
    slide(enterPrev='bounceInLeft' leave="bounceOutLeft")
      h1 WatchOurOwn
      div(class="w-full items-center ")
          img(class="mx-auto" src="/images/woo_project.png")

    slide(steps="3" enterNext='bounceInRight' leaveNext="bounceOutLeft" enterPrev="bounceInLeft" leavePrev='bounceOutRight')
      h3 Project Goals
      p(v-if="step >= 1" class="pt-10")
        | Faced with nothing more than a big idea and a few wire-frame sketches
        | the tasked me to help organizing project requirements and developing
        | a plan to translate ideas into a full featured platform.
      p(v-if="step >= 2" class="pt-2")
        | The client had previously hired many contractors but hit a wall many times
        | because they weren't able to see past the initial discussions
        | to the grand vision.
      p(v-if="step >= 3" class="pt-2")
        | Having a deep understanding of the client's needs after focused
        | discussions and a healthy planning phase we came up with a development
        | road-map to deliver a high value suite of features to provide targeted
        | consumers.

    slide(enter='bounceInRight' leavePrev='bounceOutRight')
        h3 Solution
        p(class="pt-10")
            |  Deliverables for a beta MVP product included an Angular5 application,
            |  an iOS and an Android mobile application, and a cloud backed API
            |  with multiple microservices behind a gateway so the product could evolve and mature
            |  with new features easily. This allowed for future SaaS offerings to
            |  develop and quick test the market with lower risk by decoupling features
            |  from each other.
            |
            |  Structured in this manner, the project costs remained lower by
            |  enabling the development team to stay small and extremely agile when
            |  the need for changes arose. The product launched in the second
            |  quarter of 2019 which is currently in beta.

        p(class="pt-6 text-right animate__animated animate__heartBeat animate__delay-2s") Checkout the project -->
            a(href="https://www.watchourown.com") &nbsp;link
</template>

<script>
import { Slideshow } from 'eagle.js'

export default {
  mixins: [Slideshow],
  info: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Watch Our Own',
    description: 'Health Utility SaaS Startup',
    path: '/portfolio/watchourown',
    image: '/images//woo_project.png',
  },
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

#slideshow {
  margin-top: 10vh;
  height: 80vh;
  position: relative;

  .eg-slideshow {
    h1 {
      font-size: 3em;
    }

    .eg-slide {
      .eg-slide-content {
        @apply mx-40;
        text-align: center;
        width: 25em;
        max-width: 80%;
        margin: 0 3em !important;
      }
    }
  }
}
</style>
