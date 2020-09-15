<template lang="pug">
#slideshow.eg-theme-gourmet
  .eg-slideshow
    slide(enterPrev='bounceInLeft' leave="bounceOutLeft")
        h1 HCI College
        div(class="w-full items-center ")
            img(class="mx-auto" src="/images/hci_project.png")

    slide(steps="2" enterNext='bounceInRight' leaveNext="bounceOutLeft" enterPrev="bounceInLeft" leavePrev='bounceOutRight')
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

        p(v-if="step >= 2" class="pt-6 text-right") go to their site? -->
            a(href="https://www.hci.edu/") &nbsp;link
</template>

<script>
import { Slideshow } from 'eagle.js'
export default {
  mixins: [Slideshow],
  info: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'HCI College',
    description: 'Custom Facebook App integration',
    path: '/portfolio/hcicollege',
    image: '/images/hci_project.png',
  },
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);
@import 'eagle.js/dist/themes/gourmet/gourmet.css';
#slideshow {
  margin-top: 10vh;
  height: 80vh;
  position: relative;

  .eg-slideshow {
    font-family: 'Raleway';
    background-color: #eef;

    h1 {
      font-size: 3em;
    }

    .eg-slide {
      .eg-slide-content {
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
