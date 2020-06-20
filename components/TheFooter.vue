<template lang="pug">
  footer#landing-footer.clearfix
    .row.clearfix
        p#copyright.col-2 Justin Bellero&nbsp;
          i.fa.fa-heart.fa-1x
            a(href="https://github.com/jbool24")= copyright

        <!--Social Icons in Footer-->
        ul.col-2.social-icons
          li
            a(target="_blank" title="Facebook" href="https://www.facebook.com/justin.bellero")
              i.fa.fa-facebook.fa-1x
                span Facebook
          li
            a(target="_blank" title="Github" href="http://github.com/jbool24")
              i.fa.fa-github.fa-1x
                span Github
          li
            a(target="_blank" title="Linkedin" href="http://www.linkedin.com/in/justinbellero")
              i.fa.fa-linkedin.fa-1x
                span Linkedin
          li
            a(target="_blank" title="Twitter" href="http://www.twitter.com/jbool24")
              i.fa.fa-twitter.fa-1x
                span Twitter
        <!--End of Social Icons in Footer-->

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#landing-footer {
  p,
  a {
    font-family: 'Open Sans', sans-serif, Arial, Helvetica;
    font-size: 12px;
    font-weight: normal;
    color: #999;
  }
  /* Footer Icon Color */
  i {
    color: #999;
  }
}
</style>
