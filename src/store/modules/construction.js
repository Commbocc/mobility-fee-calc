export default {
  state: {
    isNew: true
  },
  mutations: {
    setConstruction (state, data) {
      state.isNew = data
    }
  }
}
