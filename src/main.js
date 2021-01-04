import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(App, {
  // year: 2020,
  year: 2021,
})

new Vue().$mount('#app')

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
