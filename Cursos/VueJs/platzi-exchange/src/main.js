import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { rankFilter, dollarFilter, percentFilter } from '@/filter'

Vue.use(Chartkick.use(Chart))
Vue.use(VueSpinners)

Vue.filter('rank', rankFilter)
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
