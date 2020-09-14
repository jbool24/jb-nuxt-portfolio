export const namespaced = true

export const state = () => ({
  isOpen: false
})

export const mutations = {
  open(state) {
    state.isOpen = true
  },
  close(state) {
    state.isOpen = false
  }
}

export const actions = {
  close({ commit }) {
    commit('close')
  },
  open({ commit }) {
    commit('open')
  }
}
