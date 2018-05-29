import { mapState, mapMutations } from 'vuex'

export default {
  state: {
    isNew: true
  },
  mutations: {
    setConstruction (state, data) {
      state.isNew = data
    }
  }
}

export const constructionMixin = {
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
