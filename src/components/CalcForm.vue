<template>
  <form class="card mb-3" @submit.prevent>
    <div class="card-header d-flex align-items-center justify-content-between">
      <strong>{{ title }}</strong>
      <button
        @click.prevent="reset"
        type="button"
        class="badge badge-light p-2 border border-warning my-0"
      >
        <span class="fas fa-history" aria-hidden="true"></span>
        Reset
      </button>
    </div>

    <div class="card-body">
      <div class="form-group">
        <label>Housing Type</label>
        <select v-model="housingType" class="form-control">
          <option :value="null"></option>
          <option v-for="(option, index) in selectOptions['housingType']" :key="index">{{ option }}</option>
        </select>
      </div>

      <div class="form-group" :class="(!isMobileHome) ? 'text-muted' : null">
        <label>Mobile Home Park</label>
        <select v-model="mobilePark" class="form-control" :disabled="!isMobileHome">
          <option :value="true">In a Park</option>
          <option :value="false">Not in a Park</option>
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
        <label>Living Area Square Footage</label>

        <div class="input-group mb-1">
          <input
            type="number"
            v-model="squareFootage"
            class="form-control text-right"
            min="0"
            step="50"
          />
          <div class="input-group-append input-group-addon">
            <span class="input-group-text">
              ft
              <sup>2</sup>
            </span>
          </div>
        </div>

        <input
          v-if="false"
          type="range"
          v-model="squareFootage"
          min="0"
          max="4000"
          step="50"
          class="form-control-range"
        />
      </div>

      <div class="form-group">
        <label>Mobility Assessment District</label>
        <select v-model="$parent.mobilityAssessment" class="form-control">
          <option :value="null"></option>
          <option
            v-for="(option, index) in selectOptions['mobilityAssessmentDist']"
            :key="index"
          >{{ option }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Park/Schools Impact Fee Zone</label>
        <select v-model="$parent.parkSchoolAssessment" class="form-control">
          <option :value="null"></option>
          <option
            v-for="(option, index) in selectOptions['parkSchoolAssessmentDist']"
            :key="index"
          >{{ option }}</option>
        </select>
      </div>
    </div>

    <!-- <pre>{{ $data }}</pre> -->
    <!-- <pre>{{ subtotals }}</pre> -->
  </form>
</template>

<script>
import selectOptions from '../store/selectOptions'
import Pricing from '../store/pricing'

export default {
  name: 'calc-form',
  props: {
    title: {
      type: String,
      required: true
    },
    isExisitng: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    housingType: null,
    bedrooms: null,
    squareFootage: null,
    mobilePark: null
  }),
  computed: {
    selectOptions: () => selectOptions,
    isMobileHome() {
      return this.housingType == 'Mobile Home'
    },
    subtotals() {
      let values = Pricing.zeroedValues

      if (
        this.housingType != null &&
        this.squareFootage &&
        this.$parent.mobilityAssessment
      ) {
        values.mobility = this.$pricing.calcMobility(
          this.housingType,
          this.$parent.mobilityAssessment,
          this.squareFootage
        )
      }

      if (
        this.housingType != null &&
        this.bedrooms &&
        this.$parent.parkSchoolAssessment
      ) {
        values.park = this.$pricing.park[this.housingType][
          this.$parent.parkSchoolAssessment
        ][this.bedrooms]
      }

      if (this.squareFootage) {
        values.school = this.$pricing.calcSchool(this.squareFootage)
      }

      if (this.housingType != null || this.bedrooms || this.squareFootage) {
        values.fire = this.$pricing.fire[this.housingType]
        if (this.mobilePark) {
          values.fire = this.$pricing.fire[this.housingType]
        } else {
          values.fire = this.$pricing.fire['Single Family Detached']
        }
      }

      return values
    }
  },
  methods: {
    reset() {
      if (
        confirm(
          `Are you sure? This will remove the selections made in "${this.title}".`
        )
      ) {
        this.housingType = null
        this.bedrooms = null
        this.squareFootage = null
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    housingType() {
      if (!this.isMobileHome) {
        this.mobilePark = null
      } else {
        this.mobilePark = true
      }
    }
  }
}
</script>
