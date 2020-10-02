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
        name: null,
      },
      submitted: false,
      messageTypes: {
        generic: 'Just leaving a message',
        'new question': "I've got a question",
        'project question': "I'd like to hire you for a project",
        'something else': 'Something else...',
      },
      formData: {
        contact: '',
        email: '',
        phone: '',
        message: '',
        enquiryType: '',
      },
    }
  },
  computed: {
    enquirySubmitted() {
      return this.$store.state.emails.mailSubmitted
    },
  },
  methods: {
    submitHandler(data) {
      this.$store.dispatch('emails/SEND_EMAIL', data)
    },
  },
  head: {
    title: "Contact | I'm Justin Bellero",
  },
}
</script>

<style lang="scss" scoped>
main#content::v-deep {
  margin: auto;
  max-width: 90%;
  @screen md {
    height: 80vh;
  }

  // Formulate inputs
  // -----------------------------------------------------------------------------

  .formulate-input {
    // global wrapper styles
    width: 100%;

    .formulate-input-label {
      // global label styles
    }

    .formulate-input-element {
      // Global field-level wrapper styles
      width: 100%;
    }

    .formulate-input-help {
      // Global help text styles
    }

    .formulate-input-errors {
      // Global error message list wrapper
    }

    .formulate-input-error,
    .formulate-file-upload-error {
      // Error message styles
      color: #e23000;
    }

    .formulate-input-group-item {
      // Group of items (like list of checkboxes) wrapper
    }

    // Text inputs
    // -----------------------------------------------------------------------------

    &[data-classification='text'] {
      input {
        // Style all text-like input elements
        width: 100%;
      }
    }

    // Textarea inputs
    // -----------------------------------------------------------------------------

    &[data-classification='textarea'] {
      textarea {
        // Style textareas
        width: 100%;
      }
    }

    // Button inputs
    // -----------------------------------------------------------------------------

    &[data-classification='button'] {
      button {
        // Style button inputs
        width: 100%;
        height: 100%;
        //padding-top: 2%;
      }
      button:focus {
        outline: none;
      }
    }

    // Select lists
    // -----------------------------------------------------------------------------

    &[data-classification='select'] {
      select {
        // Style select lists
        width: 100%;
        background-color: #fff;
      }
    }
  }

  // Form-level errors
  // -----------------------------------------------------------------------------

  .formulate-form-errors {
    color: red;

    .formulate-form-error {
      // form errors (not specific to a field)
    }
  }
}
</style>
