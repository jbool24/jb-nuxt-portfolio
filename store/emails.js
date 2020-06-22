export const state = () => ({
  mailsummited: false,
  hasError: ''
})

export const mutations = {
  submit(state) {
    state.mailsummited = true
  },
  hasError(state, error) {
    state.hasError = error.message
  }
}

export const actions = {
  SEND_EMAIL({ commit }, data) {
    console.log(this.$config)
    this.$axios
      .post(this.$config.SUBMIT_ENDPOINT, data)
      .then((d) => {
        commit('submitted')
      })
      .catch((e) => console.error(e))
  }
}
