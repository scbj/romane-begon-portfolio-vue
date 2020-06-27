import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from '@/router/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  // Automatically adds the specified class when a route matches that of a router-link
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})

export default router
