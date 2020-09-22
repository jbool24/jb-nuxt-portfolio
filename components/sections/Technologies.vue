<template lang="pug">
section#technology(class="mt-20 px-4 lg:px-10 lg:mt-32")
 .flex.flex-wrap
  div(class="w-full lg:w-1/3")
    .section-heading
        h3 TECHNOLOGY
        h2.section-title My Tech-Stack
        p.section-subtitle
         | These are some of the languages, libraries, and frameworks
         | I use frequently. I love learning so
         | these are by no means exclusive.

    div(class="flex w-full md:pr-8 text-center justify-end")
        nuxt-link(to="/portfolio" class="button w-full md:w-1/2 px-4" style="font-size:1em;")
          i.fa.fa-rocket(aria-hidden="true") &nbsp; Projects

  div(class="flex flex-wrap w-full lg:w-2/3")
   //- Icon Block
   div(class="w-full px-4 py-10 lg:w-1/2", v-scroll-reveal.clean="{delay: 100, origin: 'bottom', distance: '70px'}")
    //- Icon
    .icon: i.fa.fa-html5.fa-4x
    //- Icon Block Description
    .icon-block-description
     h4 HTML5 | CSS3 | JS
     p
      | The holy trinity of the web. These fundamental web tools only get more
      | and more powerful as time goes on and I make it a
      | priority to stay up-to-date with the newest stable specs.
      | Toss in a little TypeScript and we got a recipe for enterprise excellence!
   //- End of Icon Block

   //- Icon Block-->
   div(class="w-full px-4 py-10 lg:w-1/2", v-scroll-reveal.clean="{delay: 300, origin: 'bottom', distance: '70px'}")
    //- Icon
    .icon: i.fa.fa-linux.fa-4x
    //- Icon Block Description
    .icon-block-description
     h4 I&nbsp;
      i.fa.fa-heart
      span &nbsp;Linux
     p
      | It was love at first boot-up. I also use macOS but ever
      | since I met Linux 10 years ago I knew I found my favorite toy. I
      | believe in the open-source movement and promote linux as
      | an operating system for its freedom and flexability. (I
      | like mine debian flavored!)
   //- End of Icon Block

   //- Icon Block
   div(class="w-full px-4 py-10 lg:w-1/2", v-scroll-reveal.clean="{delay: 500, origin: 'bottom', distance: '70px'}")
    //- Icon
    .icon: i.fa.fa-server.fa-4x
    //- Icon Block Description
    .icon-block-description
     h4 Server-Side
     p.
        On the server side I use Node.js, Python3, Ruby, PHP7, and Dart.
        Some favorite tech? Name dropping here, Are you ready? --
        Vue.js, NuxtJS, Tailwind CSS, Flutter, Sass, Nest.js, Pug.js (formally Jade),
        Flask, Rails, and Laravel. These tools help build apps and websites
        fast and reliably. Gitlab, Github, Netlify, Heroku and GCP help me build,
        manage, deploy, and automate projects I work on for
        Continuous Integration and Delivery.
    //- End of Icon Block

   <!--Icon Block-->
   div(class="w-full px-4 py-10 lg:w-1/2", v-scroll-reveal.clean="{delay: 900, origin: 'bottom', distance: '70px'}")
    //- Icon
    .icon: i.fa.fa-database.fa-4x
    //- Icon Block Description
    .icon-block-description
     h4 Database
     p.
      Right now FaunaDB, Cloud Firestore, Monogo DB, Redis DB, and MySQL are my
      goto persistance technologies.
      I'm a big fan of Document based databases because of thier flexability
      especially for early-stage projects where domains and features need
      to remain nimble to iterate through fast development cycles.
   //- End of Icon Block

</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
