import * as esriLoader from 'esri-loader'
import { mapActions, mapMutations } from 'vuex'

export default {
  state: {
    mobilityAssessment: null,
    parkSchoolAssessment: null
  },
  actions: {
    fetchDistricts ({ commit, dispatch }, geometry) {
      commit('setMAD', null)
      commit('setPSAD', null)

      return esriLoader.loadModules([
        'esri/tasks/support/Query'
      ]).then(([Query]) => {
        var query = new Query()
        query.geometry = geometry
        query.spatialRelationship = 'within'

        return Promise.all([
          dispatch('fetchMobilityDistrict', query),
          dispatch('fetchParkSchoolDistrict', query)
        ])
      })
    },
    fetchMobilityDistrict ({ commit, getters }, query) {
      return esriLoader.loadModules([
        'esri/tasks/QueryTask'
      ]).then(([QueryTask]) => {
        return new QueryTask({
          url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0'
        }).execute(query).then(result => {
          if (result.features.length) {
            commit('setMAD', getters.formatDistrictStr(result.features[0].attributes['DATA']))
          } else {
            throw new Error('A Mobility District could not be determined.')
          }
        })
      })
    },
    fetchParkSchoolDistrict ({ commit, getters }, query) {
      return esriLoader.loadModules([
        'esri/tasks/QueryTask'
      ]).then(([QueryTask]) => {
        return new QueryTask({
          url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3'
        }).execute(query).then(result => {
          if (result.features.length) {
            commit('setPSAD', getters.formatDistrictStr(result.features[0].attributes['ZONE']))
          } else {
            throw new Error('A Park/Schools Impact Fee Zone could not be determined.')
          }
        })
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
    formatDistrictStr: state => str => {
      return str.charAt().toUpperCase() + str.toLowerCase().slice(1)
    }
  }
}

export const districtsMixin = {
  computed: {
    madModel: {
      get () {
        return this.$store.state.districts.mobilityAssessment
      },
      set (value) {
        this.setMAD(value)
      }
    },
    psadModel: {
      get () {
        return this.$store.state.districts.parkSchoolAssessment
      },
      set (value) {
        this.setPSAD(value)
      }
    }
  },
  methods: {
    ...mapActions(['fetchDistricts']),
    ...mapMutations([
      'setMAD',
      'setPSAD'
    ])
  }
}
