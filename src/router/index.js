import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/weddings',
    name: 'weddings',
    component: () => import('@/views/Weddings.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/views/Menu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
