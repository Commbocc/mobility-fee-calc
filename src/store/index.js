import Vue from 'vue'
import Vuex from 'vuex'

import pricing from './modules/pricing'
import districts from './modules/districts'
import construction from './modules/construction'
import selectOptions from './modules/selectOptions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pricing,
    districts,
    construction,
    selectOptions
  }
})
