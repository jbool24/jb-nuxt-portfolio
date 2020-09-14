<template lang="pug">
#slideshow.eg-theme-gourmet
  .eg-slideshow
    slide(enterPrev='bounceInLeft' leave="bounceOutLeft")
      h1 HCI College
      img(src="/images/hci_project.png")

    slide(enterNext='bounceInRight' leaveNext="bounceOutLeft" enterPrev="bounceInLeft" leavePrev='bounceOutRight')
        h3 Project Description
        p
          | Created a lead generation automation and CRM integration for large
          | continuing education institution in Florida. The client had been
          | struggling with social platforms and isolated data for some time.
          | In order to improve the capture of data from one of their social brand
          | presences into an existing business workflow a custom solution,
          | using PHP7 in this case, to directly import real-time data and
          | information about prospective students.


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

      p(class="text-right") go to their site? -->
          a(href="https://www.hci.edu/") link
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
