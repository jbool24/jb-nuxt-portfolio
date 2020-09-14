export const state = () => ({
  mailSubmitted: false,
  hasError: ''
})

export const mutations = {
  submit(state) {
    state.mailSubmitted = true
  },
  hasError(state, error) {
    state.hasError = error.message
  }
}

export const actions = {
  SEND_EMAIL({ commit }, data) {
    this.$axios
      .$post(this.$config.SUBMIT_ENDPOINT, data)
      .then(() => commit('submit'))
      .catch((e) => {
        // console.error(e)
        commit('hasError', e)
      })
  }
}
