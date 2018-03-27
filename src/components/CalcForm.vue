<template>
  <form id="calc-form" class="card mb-3">

    <strong class="card-header font-weight-bold">{{ title }}</strong>

    <div class="card-body">
      <div class="form-group">
        <label>Housing Type</label>
        <select v-model="housingType" class="form-control">
          <option :value="null"></option>
          <option v-for="(option, index) in selectOptions['housingType']" :key="index">{{ option }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Number of Bedrooms</label>
        <select v-model="bedrooms" class="form-control">
          <option :value="null"></option>
          <option v-for="(option, index) in selectOptions['bedrooms']" :key="index">{{ option }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Living Area Square Footage Range</label>
        <select v-model="squareFootage" class="form-control">
          <option :value="null"></option>
          <option v-for="(option, index) in selectOptions['squareFootage']" :key="index">{{ option }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Mobility Assessment District</label>
        <select v-model="madModel" class="form-control">
          <option :value="null"></option>
          <option v-for="(option, index) in selectOptions['mobilityAssessmentDist']" :key="index">{{ option }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Park/Schools Impact Fee Zone</label>
        <select v-model="psadModel" class="form-control">
          <option :value="null"></option>
          <option v-for="(option, index) in selectOptions['parkSchoolAssessmentDist']" :key="index">{{ option }}</option>
        </select>
      </div>
    </div>

    <!-- <pre>{{ results }}</pre> -->

  </form>
</template>

<script>
import { districtsMixin } from '@/store/modules/districts'
import { selectOptionsMixin } from '@/store/modules/selectOptions'
import { pricingMixin } from '@/store/modules/pricing'

export default {
  name: 'calc-form',
  props: ['title'],
  mixins: [
    districtsMixin,
    selectOptionsMixin,
    pricingMixin
  ],
  data () {
    return {
      housingType: null,
      bedrooms: null,
      squareFootage: null
    }
  },
  methods: {
    reset () {
      this.housingType = null
      this.bedrooms = null
      this.squareFootage = null
    }
  },
  computed: {
    results () {
      return this.calculatePricing(this.$data)
    }
  },
  watch: {
    'results': function (value) {
      this.$emit('update', value)
    }
  }
}
</script>
