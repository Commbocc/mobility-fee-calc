/**
* @mixin
*/
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      isNewConstruction: state => state.construction.isNew
    }),
    constructionModel: {
      get () {
        return this.isNewConstruction
      },
      set (value) {
        this.setConstruction(value)
      }
    }
  },
  methods: mapMutations(['setConstruction'])
}
