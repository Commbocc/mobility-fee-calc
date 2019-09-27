import * as pricing from './2019'

let zeroedValues = () => ({
  mobility: 0,
  park: 0,
  school: 0,
  fire: 0
})

export default {
  state: {
    subtotals: {
      new: zeroedValues(),
      existing: zeroedValues()
    }
  },
  actions: {
    updateTotals ({ commit }, data) {
      if (data.isExisitng) {
        commit('setExisting', data.subtotals)
      } else {
        commit('setNew', data.subtotals)
      }
    }
  },
  mutations: {
    setNew (state, data) {
      state.subtotals.new = data
    },
    setExisting (state, data) {
      state.subtotals.existing = data
    }
  },
  getters: {
    totals: (state, getters, rootState) => {
      let totals = zeroedValues()
      let diff = 0

      Object.keys(state.subtotals.new).forEach(k => {
        if (rootState.construction.isNew) {
          diff = state.subtotals.new[k]
        } else {
          diff = state.subtotals.new[k] - state.subtotals.existing[k]
        }
        totals[k] = (diff > 0) ? diff : 0
      })

      totals.total = Object.values(totals).reduce((a, b) => a + b)

      return totals
    },
    calcSubtotal: (state, getters, rootState) => data => {
      let values = zeroedValues()

      if (data.housingType && data.squareFootage && rootState.districts.mobilityAssessment) {
        values.mobility = pricing.mobility[data.housingType][rootState.districts.mobilityAssessment][data.squareFootage]
      }

      if (data.housingType && data.bedrooms && rootState.districts.parkSchoolAssessment) {
        values.park = pricing.park[data.housingType][rootState.districts.parkSchoolAssessment][data.bedrooms]
      }

      if (data.squareFootage) {
        values.school = pricing.school[data.squareFootage]
      }

      if (data.housingType || data.bedrooms || data.squareFootage) {
        values.fire = pricing.fire
      }

      return values
    }
  }
}
