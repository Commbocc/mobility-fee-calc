import { mapState, mapActions } from 'vuex'

export default {
  state: {
    totals: {
      mobility: 0,
      park: 0,
      school: 0,
      fire: 0,
      total: 0
    }
  },
  actions: {
    updateTotals ({ commit }, refs) {
      var totals = {}
      var newHomeResults = Object.assign({}, refs.formNew.results)

      if (refs.formExisting) {
        var existingHomeResults = Object.assign({}, refs.formExisting.results)
        Object.keys(newHomeResults).forEach(k => {
          var diff = newHomeResults[k] - existingHomeResults[k]
          totals[k] = (diff > 0) ? diff : 0
        })
      } else {
        totals = newHomeResults
      }

      totals.total = Object.values(totals).reduce((a, b) => a + b)
      commit('setTotals', totals)
    }
  },
  mutations: {
    setTotals (state, data) {
      state.totals = data
    }
  }
}

export const resultsMixin = {
  methods: mapActions(['updateTotals']),
  computed: mapState({
    totals: state => state.results.totals
  })
}
