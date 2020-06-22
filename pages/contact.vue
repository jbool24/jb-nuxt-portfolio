<template lang="pug">
  main#content(style="margin-top:71px;")

    div(v-if="enquirySubmitted")
      h3 Thanks for getting in touch.
      nuxt-link(to="/") Take me back

    div(v-else): div(class="w-full sm:w-1/2")
      h1 Get In Touch!
      FormulateForm(
        v-model="formData",
        @submit="submitHandler")
        FormulateInput(
          type="text"
          label="Name"
          name="contact"
          validation="required"
          error-behavior="blur")
        FormulateInput(
          type="email"
          label="Email"
          name="email"
          validation="required|email"
          error-behavior="blur")
        FormulateInput(
          type="text"
          label="Phone"
          name="phone"
          error-behavior="blur")
        FormulateInput(
          type="select"
          name="enquiryType"
          :options="messageTypes"
          validation="required"
          placeholder="Select an option"
          label="What are you contacting us about?")
        FormulateInput(
          type="textarea"
          label="Message"
          name="message")
        FormulateInput(
          type="submit"
          class="button text-center pt-2"
          label="Send")
</template>

<script>
export default {
  data() {
    return {
      validationErrors: {
        name: null
      },
      submitted: false,
      messageTypes: {
        first: 'Just leaving a message',
        second: "I've got a question",
        third: "I'd like to hire you for a project",
        fourth: 'Something else...'
      },
      formData: {
        contact: '',
        email: '',
        details: {
          phone: '',
          message: '',
          enquiryType: ''
        }
      }
    }
  },
  computed: {
    enquirySubmitted() {
      return this.$store.state.emails.mailsubmitted
    }
  },
  methods: {
    submitHandler(data) {
      this.$store.dispatch('emails/SEND_EMAIL', data)
    }
  },
  head: {
    title: "Contact | I'm Justin Bellero"
  }
}
</script>

<style lang="scss" scoped>
main#content {
  margin: auto;
  max-width: 90%;
}
</style>
