<template lang="html">
  <main id="HcMobilityFeeCalc">

    <form is="HcEsriSearchWidget" ref="searchWidget" @submit="searchReset" @result="searchResult" :search-sources="searchSources" :load-map="true"></form>

    <div ref="errorAlerts" is="HcErrorAlerts"></div>

    <div class="form-group">
      <label class="font-weight-bold">New Construction</label>
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="constructionModel">
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

  </main>
</template>

<script>
import { districtsMixin } from './store/modules/districts'
import { constructionMixin } from './store/modules/construction'

import HcEsriSearchWidget from 'hc-esri-search-widget'
import HcErrorAlerts from 'hc-error-alerts'
import CalcForm from './components/CalcForm'
import Results from './components/Results'

export default {
  name: 'HcMobilityFeeCalc',
  mixins: [districtsMixin, constructionMixin],
  components: {
    HcEsriSearchWidget,
    HcErrorAlerts,
    CalcForm,
    Results
  },
  methods: {
    searchReset (e) {
      this.$refs.errorAlerts.clearAlerts()
      this.resetDistricts()
    },
    searchResult (result) {
      this.fetchMobilityDistrict(result).catch(err => {
        this.$refs.errorAlerts.addAlert(err)
      })
      this.fetchParkSchoolDistrict(result).catch(err => {
        this.$refs.errorAlerts.addAlert(err)
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
  },
  computed: {
    searchSources () {
      return [HcEsriSearchWidget.Geocoder.esriSearchSource, HcEsriSearchWidget.Parcel.esriSearchSource]
    }
  }
}
</script>
