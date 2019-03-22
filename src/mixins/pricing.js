/**
* @mixin
*/
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: mapActions(['updateTotals']),
  computed: mapGetters([
    'calcSubtotal',
    'totals'
  ])
}
