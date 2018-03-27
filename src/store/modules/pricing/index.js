import * as pricing from './2018'
import { mapGetters } from 'vuex'

export default {
  getters: {
    calculatePricing: (state, getters, rootState) => data => {
      var values = {
        mobility: 0,
        park: 0,
        school: 0,
        fire: 0
      }

      if (data.housingType && data.squareFootage && rootState.districts.mobilityAssessment) {
        values.mobility = pricing.mobility[data.housingType][rootState.districts.mobilityAssessment][data.squareFootage]
      }

      if (data.housingType && data.bedrooms && rootState.districts.parkSchoolAssessment) {
        values.park = pricing.park[data.housingType][rootState.districts.parkSchoolAssessment][data.bedrooms]
      }

      if (data.squareFootage) {
        values.school = pricing.school[data.squareFootage]
      }

      if (data.housingType || data.bedrooms || data.squareFootage) {
        values.fire = pricing.fire
      }

      return values
    }
  }
}

export const pricingMixin = {
  computed: mapGetters(['calculatePricing'])
}
