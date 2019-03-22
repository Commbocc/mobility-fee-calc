<template>
  <div id="app">

    <form is="HcEsriSearchForm" ref="searchForm" source-selector @submit="reset" @result="handleResult"></form>

    <div class="form-group">
      <div class="font-weight-bold">New Construction</div>

      <div class="form-check">
        <input v-model="constructionModel" class="form-check-input" type="checkbox" value="" id="newConstruction">
        <label class="form-check-label" for="newConstruction">
          This estimate is for a site with no existing home.
        </label>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <form is="CalcForm" title="New Home"></form>
      </div>
      <div v-if="!isNewConstruction" class="col-md-6">
        <form is="CalcForm" title="Existing Home" :isExisitng="true" ref="formExisting"></form>
      </div>
      <div class="col">
        <div is="Results"></div>
      </div>
    </div>

  </div>
</template>

<script>
import store from './store'
// import HcEsriSearchForm from '@hcflgov/vue-esri-search'
import HcEsriSearchForm from '@hcflgov/vue-esri-search/src/App' // TODO: replace with @hcflgov/vue-esri-search on npm

import { CalcForm, Results } from './components'
import { constructionMixin, districtsMixin } from './mixins'

export default {
  name: 'hc-mobility-fee-calc',
  store,
  components: { HcEsriSearchForm, CalcForm, Results },
  mixins: [constructionMixin, districtsMixin],
  methods: {
    reset () {
      // clear errors
      this.resetDistricts()
    },
    handleResult (result) {
      // this.result = result
      this.fetchMobilityDistrict(result).catch(err => {
        // TODO: handle error
        console.warn('fetchMobilityDistrict', err)
        // this.$refs.errorAlerts.addAlert(err)
      })
      this.fetchParkSchoolDistrict(result).catch(err => {
        // TODO: handle error
        console.warn('fetchParkSchoolDistrict', err)
        // this.$refs.errorAlerts.addAlert(err)
      })
    }
  },
  watch: {
    isNewConstruction () {
      if (this.isNewConstruction && this.$refs.formExisting.reset()) {
        // form's reset method confirms
      } else {
        this.setConstruction(false)
      }
    }
  }
}
</script>
