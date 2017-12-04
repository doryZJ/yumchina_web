import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Store from '@/views/Store'
import StoreEnergyDetail from '@/views/StoreEnergyDetail'
import StoreMaintenanceDetail from '@/views/StoreMaintenanceDetail'
import StoreDeviceDetail from '@/views/StoreDeviceDetail'
import Area from '@/views/Area'
import AreaDeviceDetail from '@/views/AreaDeviceDetail'

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
        },
        {
          path: '/StoreMaintenanceDetail',
          name: 'StoreMaintenanceDetail',
          component: StoreMaintenanceDetail
        },
        {
          path: '/StoreDeviceDetail',
          name: 'StoreDeviceDetail',
          component: StoreDeviceDetail
        },
        {
          path: '/Area',
          name: 'Area',
          component: Area
        },
        {
          path: '/AreaDeviceDetail',
          name: 'AreaDeviceDetail',
          component: AreaDeviceDetail
        }
      ]
    }
  ]
})
export default router
