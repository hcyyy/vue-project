import VueRouter from 'vue-router'
import Vue from 'vue'

import Films from './views/Films.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import Spelling from './views/Spelling.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: Cinema
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      path: '/spelling',
      name: 'spelling',
      component: Spelling
    },
    {
      path: '*',
      redirect: '/films'
    }
  ]
})

export default router
