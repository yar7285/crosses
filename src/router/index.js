import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Catalog from '@/components/Catalog'
import Contact from '@/components/Contact'
import Product from '@/components/Product'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/product/:id',
      props: true,
      name: 'product',
      component: Product
    },
    {
      path: '/order/:id',
      props: true,
      name: 'order',
      component: Order
    }
  ],
  mode: 'history'
})
