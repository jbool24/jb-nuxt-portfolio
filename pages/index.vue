<template lang="pug">
  main#content
    AboutMe
    Technologies
    Brands

</template>

<script>
import AboutMe from '~/components/sections/AboutMe.vue'
import Technologies from '~/components/sections/Technologies.vue'
import Brands from '~/components/sections/Brands.vue'

export default {
  components: {
    AboutMe,
    Technologies,
    Brands,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
