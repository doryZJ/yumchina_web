import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Store from '@/views/Store'
import StoreEnergyDetail from '@/views/StoreEnergyDetail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Store',
          name: 'Store',
          component: Store
        },
        {
          path: '/StoreEnergyDetail',
          name: 'StoreEnergyDetail',
          component: StoreEnergyDetail
        }
      ]
    }
  ]
})
export default router
