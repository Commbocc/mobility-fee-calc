export default {
  state: {
    mobilityAssessment: null,
    parkSchoolAssessment: null
  },
  actions: {
    resetDistricts ({ commit }) {
      commit('setMAD', null)
      commit('setPSAD', null)
    },
    fetchMobilityDistrict ({ commit, getters }, result) {
      let url = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0'
      return result.queryFeatures(url).then(feature => {
        if (feature) {
          commit('setMAD', getters.formatDistrictStr(feature.attributes['DATA']))
        } else {
          commit('setMAD', null)
          throw new Error('A Mobility District could not be determined.')
        }
      })
    },
    fetchParkSchoolDistrict ({ commit, getters }, result) {
      let url = 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3'
      return result.queryFeatures(url).then(feature => {
        if (feature) {
          commit('setPSAD', getters.formatDistrictStr(feature.attributes['ZONE']))
        } else {
          commit('setPSAD', null)
          throw new Error('A Park/Schools Impact Fee Zone could not be determined.')
        }
      })
    }
  },
  mutations: {
    setMAD (state, data) {
      state.mobilityAssessment = data
    },
    setPSAD (state, data) {
      state.parkSchoolAssessment = data
    }
  },
  getters: {
    formatDistrictStr: state => str => str.charAt().toUpperCase() + str.toLowerCase().slice(1)
  }
}
