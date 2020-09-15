<template lang="pug">
#slideshow.eg-theme-gourmet
  .eg-slideshow
    slide(enterPrev='bounceInLeft' leave="bounceOutLeft")
        h1 Rebel Robinson
        div(class="w-full items-center ")
            img(class="mx-auto" src="/images/rebelrobinson_project.png")

    slide(:steps="3" enterNext='bounceInRight' leaveNext="bounceOutLeft" enterPrev="bounceInLeft" leavePrev='bounceOutRight')
        h3 Project Goal
        p(v-if="step >= 2" class="pt-10").
            The main challenge of this project was to deliver a site that could
            continually be updated/maintained with very little overhead. This would allow
            the owner to make changes in the future to highlight new work, offer
            sales or promotions, and engage with her audience.

        p(v-if="step >= 3" class="pt-10").
            Because of the ongoing costs related to maintenance, hosting, and the
            constant patching of security risks, a traditional server-side CMS
            such as Wordpress was not a good option. In this case, a completely
            custom solution would also have been overkill and not well
            suited for this project.

    slide(:steps="2" enter='bounceInRight' leavePrev='bounceOutRight')
        h3 Solution
        p.
            After discussing a few subscription based CMS tools, a strategic
            decision was made to implement the site on the Wix platform for
            the exceptional price model and its ease of use by the site owner
            to maintain and modify it to her needs in the future with a wysiwyg
            editor.

        p(v-if="step >= 2" class="pt-4").
            I was able to deliver a modern and SEO ready
            website that uses dynamic data. The owner can manage and upload
            projects and photographs easily, engage with her clients and site
            visitors in real-time chats when she chooses, and use the tool to help
            facilitate bookings and manage promotions for her business.
        p(v-if="step >= 2" class="text-right animate__animated animate__heartBeat animate__delay-2s") wanna see? -->
            a(href="https://www.rebelrobinson.com") &nbsp;link
</template>

<script>
import { Slideshow } from 'eagle.js'
export default {
  mixins: [Slideshow],
  info: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Rebel Robinson Website',
    description: "Sarasota's Premier Boudoir Photographer",
    path: '/portfolio/rebelrobinson',
    image: '/images/rebelrobinson_project.png',
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
