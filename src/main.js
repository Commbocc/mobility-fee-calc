import Vue from 'vue'
import App from './App.vue'
import store from './store'

export default Vue.extend({
  store,
  extends: App
})
