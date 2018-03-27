import Vue from 'vue'
import Vuex from 'vuex'

import pricing from './modules/pricing'
import results from './modules/results'
import districts from './modules/districts'
import selectOptions from './modules/selectOptions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pricing,
    results,
    districts,
    selectOptions
  },
  state: {
    isNewContruction: true
  }
})
