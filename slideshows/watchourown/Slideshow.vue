<template lang="pug">
#slideshow.eg-theme-gourmet
  .eg-slideshow
    slide(enterPrev='bounceInLeft' leave="bounceOutLeft")
      h1 WatchOurOwn
      img(src="/images/woo_project.png")

    slide(enterNext='bounceInRight' leaveNext="bounceOutLeft" enterPrev="bounceInLeft" leavePrev='bounceOutRight')
      h3 Project Goals
      p
        | Faced with nothing more than a big idea and a few wire-frame sketches
        | the client needed help organizing project requirements and developing
        | a plan to translate ideas into a full featured platform.
        | The client had previously hired contractors but hit a wall many times
        | because they weren't able to see past the initial discussions
        | to the grand vision.
        |
        | Having a deep understanding of the client's needs after focused
        | discussions and a healthy planning phase we came up with a development
        | road-map to deliver a high value suite of features to provide targeted
        | consumers.

    slide(enter='bounceInRight' leavePrev='bounceOutRight')
      h3 Solution
      p
        |  Deliverables for a beta MVP product included an Angular5 application,
        |  an iOS and an Android mobile application, and a cloud backed API
        |  structured as microservices so the product could evolve and mature
        |  with new features easily. This allowed for future SaaS offerings to
        |  develop and test the market with lower risk by decoupling features
        |  from each other.
        |
        |  Structured in this manner, the project costs remained lower by
        |  enabling the development team to stay small and extremely agile when
        |  the need for changes arose. The product launched in the second
        |  quarter of 2019 which is currently in beta.

    p(class="text-left") Checkout the project -->
      a(href="https://www.watchourown.com") link
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

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Raleway);
@import 'eagle.js/dist/themes/gourmet/gourmet.css';
#slideshow {
  margin-top: 10vh;
  height: 80vh;
  position: relative;

  .eg-slideshow {
    font-family: 'Raleway';
    background-color: #eef;

    .eg-slide {
      .eg-slide-content {
        text-align: center;
        width: 25em;
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }

  .eg-slide-content {
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
