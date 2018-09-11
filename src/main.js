// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/index'
import VueResource from 'vue-resource'

import 'vuetify/dist/vuetify.min.css'
import './assets/css/styles.css'
import 'jquery/dist/jquery.min'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// import './assets/css/starter-template.css'
// import './assets/css/styleguide.css'

import './assets/js/jquery/jquery-2.2.4.min.js'
// import './assets/js/bootstrap/bootstrap.min.js'
import './assets/js/bootstrap-validator/validator.min.js'
// import './assets/js/bootstrap-select/bootstrap-select.min.js'

import './assets/js/ofi/ofi.min.js'
import './assets/js/jasny-bootstrap/js/jasny-bootstrap.min.js'
import './assets/js/bee3d/classie.js'
import './assets/js/bee3d/bee3D.js'

import './assets/js/select2/select2.min.js'
import './assets/js/cart.js'
import './assets/js/common.js'

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
