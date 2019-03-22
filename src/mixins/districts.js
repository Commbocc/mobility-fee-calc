/**
* @mixin
*/
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      mobilityAssessment: state => state.districts.mobilityAssessment,
      parkSchoolAssessment: state => state.districts.parkSchoolAssessment
    }),
    madModel: {
      get () {
        return this.mobilityAssessment
      },
      set (value) {
        this.setMAD(value)
      }
    },
    psadModel: {
      get () {
        return this.parkSchoolAssessment
      },
      set (value) {
        this.setPSAD(value)
      }
    }
  },
  methods: {
    ...mapActions([
      'resetDistricts',
      'fetchMobilityDistrict',
      'fetchParkSchoolDistrict'
    ]),
    ...mapMutations([
      'setMAD',
      'setPSAD'
    ])
  }
}
