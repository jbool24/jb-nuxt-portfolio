<template lang="pug">
section#technology(class="mt-20 px-4 lg:px-10")
 .flex.flex-wrap
  div(class="w-full lg:w-1/3")
   .section-heading
    h3 TECHNOLOGY
    h2.section-title Tools Of My Tech-Stack
    p.section-subtitle
     | These are some of the languages, libraries, and frameworks
     | I use frequently. Even though these are the ones I have
     | exerience with, there are no sacred cows here. I always
     | have my ear to the ground as new tech rolls into town.

    a(href="https://github.com/jbool24" class="button")
      i.fa.fa-github(aria-hidden="true") &nbsp;My Projects

  div(class="flex flex-wrap w-full lg:w-2/3")
   //- Icon Block
   div(class="w-full px-4 py-10 lg:w-1/2", v-scroll-reveal.clean="{delay: 100, origin: 'bottom', distance: '70px'}")
    //- Icon
    .icon: i.fa.fa-html5.fa-4x
    //- Icon Block Description
    .icon-block-description
     h4 HTML5 | CSS3 | JS
     p
      | The holy trinity of the web. These tools only get more
      | and more powerful as time goes on and I make it a
      | priority to stay up-to-date with the newest stable specs.
   //- End of Icon Block

   //- Icon Block-->
   div(class="w-full px-4 py-10 lg:w-1/2", v-scroll-reveal.clean="{delay: 300, origin: 'bottom', distance: '70px'}")
    //- Icon
    .icon: i.fa.fa-linux.fa-4x
    //- Icon Block Description
    .icon-block-description
     h4 I
      i.fa.fa-heart
      span  Linux
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
     p
      | On the server side I use Node.js and Python3
      | extensivly. With libraries like Express.js,
      | Keystone.js, Pug.js (formaly Jade), Flask
      | Microframework, and Django, building apps and
      | websites is fast and reliable. Git, NPM, Heroku, and Webpack.js
      | help me build, manage, deploy, and automate my projects.
    //- End of Icon Block

   <!--Icon Block-->
   div(class="w-full px-4 py-10 lg:w-1/2", v-scroll-reveal.clean="{delay: 900, origin: 'bottom', distance: '70px'}")
    //- Icon
    .icon: i.fa.fa-database.fa-4x
    //- Icon Block Description
    .icon-block-description
     h4 Database
     p
      | Right now MySQL and Monogo are the persistance
      | technologies in most of my projects. I've also used
      | Redis for session management and Firebase as another non-SQL DB
      | and enjoy it for its performance with mobile applications.
   //- End of Icon Block

</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
