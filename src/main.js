// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/index'
import VueResource from 'vue-resource'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueResource)
// Vue.http.option.root = 'http://localhost:3000/'

// Vue.http.intercepters.push(request => {
//   request.headers.set('Auth', 'RAND TOKEN' + Math.random())
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
