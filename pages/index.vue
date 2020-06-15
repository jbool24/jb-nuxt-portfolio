<template lang="pug">
  main
    AboutMe
    Technologies

</template>

<script>
import AboutMe from '~/components/sections/AboutMe.vue'
import Technologies from '~/components/sections/Technologies.vue'

export default {
  components: {
    AboutMe,
    Technologies
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
