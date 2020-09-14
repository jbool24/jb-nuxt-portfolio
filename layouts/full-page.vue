<template lang="pug">
 #wrapper
    <TheNavbar/>
    <nuxt/>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
export default {
  components: { TheNavbar },
}
</script>

<style lang="css" scoped></style>
