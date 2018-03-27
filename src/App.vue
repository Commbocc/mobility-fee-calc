<template>
  <div id="app">

    <label class="font-weight-bold">Your Address</label>

    <p class="mb-2">
      Your address will be used to populate the "Mobility Assessment District" and "Park/Schools Impact Fee Zone" fields below.
    </p>

    <form is="HcAddressParcelForm" ref="addressForm" @submit="formSearch" :return-parcel-geometry="true"></form>

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
import HcAddressParcelForm from 'hc-address-parcel-form'
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
    HcAddressParcelForm,
    HcErrorAlerts,
    CalcForm,
    Results
  },
  data () {
    return {
      formResult: {}
    }
  },
  methods: {
    formSearch (promise) {
      this.$refs.addressForm.isSearching = true
      this.$refs.errorAlerts.clearAlerts()

      promise.then(result => {
        this.formResult = result
        this.formResult.errors.forEach(err => { throw err })
        return this.fetchDistricts(result.parcelData.geometry)
      }).catch(err => {
        this.$refs.errorAlerts.addAlert(err)
      }).then(() => {
        this.$refs.addressForm.isSearching = false
      })
    },
    touchCalcForms (e) {
      this.updateTotals(this.$refs)
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
