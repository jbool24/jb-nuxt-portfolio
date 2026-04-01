import type { DirectiveBinding } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-reveal', {
    getSSRProps() {
      // No-op during SSR — ScrollReveal is DOM-only
      return {}
    },
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      import('scrollreveal').then(({ default: ScrollReveal }) => {
        ScrollReveal().reveal(el, {
          duration: 800,
          scale: 1,
          distance: '10px',
          mobile: false,
          ...binding.value,
        })
      })
    },
  })
})
