<template>
  <div id="app">

    <pre>{{ $data }}</pre>

    <form is="HcEsriSearchForm" ref="searchForm" source-selector @submit="resetDistricts" @result="handleResult"></form>

    <div class="form-group">
      <div class="font-weight-bold">New Construction</div>

      <div class="form-check">
        <input v-model="isNewConstruction" class="form-check-input" type="checkbox" value="" id="newConstruction">
        <label class="form-check-label" for="newConstruction">
          This estimate is for a site with no existing home.
        </label>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <form is="CalcForm" title="New Home" ref="formNew"></form>
      </div>
      <div v-if="!isNewConstruction" class="col-md-6">
        <form is="CalcForm" title="Existing Home" is-exisitng ref="formExisting"></form>
      </div>
      <div class="col">
        <div is="Results"></div>
      </div>
    </div>

  </div>
</template>

<script>
import HcEsriSearchForm from '@hcflgov/vue-esri-search'

import { CalcForm, Results } from './components'

import DistrictLookup from './assets/DistrictLookup'

export default {
  install (Vue) {
    Vue.mixin({
      components: {
        HcMobilityFeeCalc: this
      }
    })
  },
  components: {
    HcEsriSearchForm, CalcForm, Results
  },
  data: () => ({
    mobilityAssessment: null,
    parkSchoolAssessment: null,
    isNewConstruction: true
  }),
  methods: {
    resetDistricts () {
      this.mobilityAssessment = null
      this.parkSchoolAssessment = null
    },
    handleResult (result) {
      var lookup = new DistrictLookup(result)

      lookup.fetchMobilityDistrict().then(res => {
        this.mobilityAssessment = res
      }).catch(err => {
        // TODO: handle error
        console.warn('fetchMobilityDistrict', err)
      })

      lookup.fetchParkSchoolDistrict().then(res => {
        this.parkSchoolAssessment = res
      }).catch(err => {
        // TODO: handle error
        console.warn('fetchParkSchoolDistrict', err)
      })
    }
  },
  watch: {
    isNewConstruction () {
      if (this.isNewConstruction && this.$refs.formExisting.reset()) {
        // form's reset method confirms
      } else {
        this.$nextTick(() => {
          this.isNewConstruction = false
        })
      }
    }
  }
}
</script>
