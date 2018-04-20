<template>
  <div id="app">

    <form is="HcEsriSearchWidget" ref="searchWidget" @submit="reset" @result="handleResult" :search-sources="searchSources" :load-map="true"></form>

    <p class="mb-3 text-muted form-text small">
      Your address or folio number will be used to populate the "Mobility Assessment District" and "Park/Schools Impact Fee Zone" fields below.
    </p>

    <div ref="errorAlerts" is="HcErrorAlerts"></div>

    <div class="form-group">
      <label class="font-weight-bold">New Construction</label>
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="$store.state.isNewContruction">
          This estimate is for a site with no existing home.
        </label>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <form is="CalcForm" ref="formNew" title="New Home" @update="touchCalcForms"></form>
      </div>

      <div v-if="!$store.state.isNewContruction" class="col-md-6">
        <form is="CalcForm" ref="formExisting" title="Existing Home" @update="touchCalcForms"></form>
      </div>

      <div class="col-md-6">
        <div is="Results"></div>
      </div>
    </div>

  </div>
</template>

<script>
import HcEsriSearchWidget, { Geocoder, Parcel } from 'hc-esri-search-widget'
import HcErrorAlerts from 'hc-error-alerts'
import CalcForm from '@/components/CalcForm'
import Results from '@/components/Results'
import { districtsMixin } from '@/store/modules/districts'
import { resultsMixin } from '@/store/modules/results'

export default {
  name: 'index',
  mixins: [
    districtsMixin,
    resultsMixin
  ],
  components: {
    HcEsriSearchWidget,
    HcErrorAlerts,
    CalcForm,
    Results
  },
  data () {
    return {
      searchResult: null
    }
  },
  methods: {
    reset (e) {
      this.searchResult = null
      this.$refs.errorAlerts.clearAlerts()
    },
    handleResult (result) {
      this.searchResult = result

      if (this.searchResult.error) {
        this.handleError(this.searchResult.error)
      } else if (this.searchResult.hasFeature()) {
        this.$refs.searchWidget.isSearching = true
        this.$refs.searchWidget.status = 'Finding Districts...'
        this.fetchDistricts(this.searchResult.result.feature.geometry).catch(this.handleError).then(() => {
          this.$refs.searchWidget.status = null
          this.$refs.searchWidget.isSearching = false
        })
      }
    },
    handleError (err) {
      console.warn(err)
      this.$refs.errorAlerts.addAlert(err)
    },
    touchCalcForms (e) {
      this.updateTotals(this.$refs)
    }
  },
  computed: {
    searchSources () {
      return [Geocoder.esriSearchSource, Parcel.esriSearchSource]
    }
  },
  watch: {
    '$store.state.isNewContruction': function (value) {
      if (value && confirm('This will remove the selections made in "Existing Home"')) {
        this.$refs.formExisting.reset()
      } else {
        this.$store.state.isNewContruction = false
      }
      this.updateTotals(this.$refs)
    }
  }
}
</script>
