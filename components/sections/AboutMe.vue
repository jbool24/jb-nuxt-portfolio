<template lang="pug">
section#about.scrollto.clearfix
  .row.clearfix

    //- Content Left Side
    .col-3
      blockquote.testimonial.text-right.bigtest
        q
         | It is paradoxical, yet true, to say, that the more we know, the
         | more ignorant we become in the absolute sense, for it is only
         | through enlightenment that we become conscious of our
         | limitations. Precisely one of the most gratifying results of
         | intellectual evolution is the continuous opening up of new and
         | greater prospects.
        footer — Nikola Tesla
      //- End Content Left Side-->

    //- Content of the Right Side
    .col-2-3
      .section-heading
        h3 ABOUT ME
        h2.section-title Some More Inside Info
        p.section-subtitle
          | "I rather spend an eternity improving the things I have the power
          | to change than one second on the things that I cannot."
        p(style='text-align: right').section-subtitle — Myself

      br

      p
        | I started programming almost {{programmingSince}} years ago out of a
        | desire to make my life easier by convincing a computer to do the "dirty"
        | work. I'm almost entirely self taught and it has taken me long time to collect
        | and cultivate the skills I have today. I took a few classes in college and spent a lot
        | of time tweaking web pages, customizing my favorite programs, and even
        | scripting my operating system to perform all the magic I wanted.
        | That process of curiosity and self discovery, constantly hacking and
        | breaking things to understand how they worked, taught me a great deal
        | more that I would've imagined.

      p
        | My introduction to programming began with Object-Oriented styles using
        | Python and Java. I'm always looking to expand my
        | language scope because I really believe that being a polyglot, helps
        | programmers analyze problems in more detailed and complete ways.
        | I've dabbled in Java, messed around with Rust, scanned through C++,
        | but today I work mostly in Javascript/Node.js and Python 3.

      p
        | Right now I'm living in sunny West Florida and spend a good amount
        | of time persuing a good work/life balance. In my free time I enjoy meditation
        | practicing yoga at least once a week, and spending quality time with friends.
        | Mind/body balance is very important to me and a key part of my personal productivity.

      //- Just replace the Video ID "UYJ5IjBRlW8" with the ID of your video on YouTube (Found within the URL) -->

      //- a(href="#" data-videoid="UYJ5IjBRlW8" data-videosite="youtube" class="button video link-lightbox") WATCH VIDEO
       i.fa.fa-play(aria-hidden="true")

    //-End Content Right Side

    //- .col-3
      //- img(src="images/dancer.jpg" alt="Dancer")

//- End of Content Section

</template>

<script>
export default {
  computed: {
    programmingSince: () => new Date(Date.now()).getFullYear() - new Date(2012)
  }
}
</script>

<style lang="css" scoped></style>
