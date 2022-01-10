import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.prototype.$http = axios

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue ({
  el: '#app',
  router,
  store,
  render: h => h(App),
})