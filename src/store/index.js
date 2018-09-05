import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import contact from './contact'
import order from './order'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product, contact, order
  }
})
