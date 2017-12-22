import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Store from '@/views/Store'
import StoreList from '@/views/StoreList'
import StoreEnergyDetail from '@/views/StoreEnergyDetail'
import StoreMaintenanceDetail from '@/views/StoreMaintenanceDetail'
import StoreDeviceDetail from '@/views/StoreDeviceDetail'
import Area from '@/views/Area'
import AreaDeviceDetail from '@/views/AreaDeviceDetail'
import AreaEnergyDetail from '@/views/AreaEnergyDetail'
import AreaMaintenanceDetail from '@/views/AreaMaintenanceDetail'
import UserManagement from '@/views/UserManagement'

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
          path: '/store',
          name: 'Store',
          component: Store
        },
        {
          path: '/storeEnergyDetail',
          name: 'StoreEnergyDetail',
          component: StoreEnergyDetail
        },
        {
          path: '/storeMaintenanceDetail',
          name: 'StoreMaintenanceDetail',
          component: StoreMaintenanceDetail
        },
        {
          path: '/storeDeviceDetail',
          name: 'StoreDeviceDetail',
          component: StoreDeviceDetail
        },
        {
          path: '/storeList',
          name: 'StoreList',
          component: StoreList
        },
        {
          path: '/area',
          name: 'Area',
          component: Area
        },
        {
          path: '/areaEnergyDetail',
          name: 'AreaEnergyDetail',
          component: AreaEnergyDetail
        },
        {
          path: '/areaMaintenanceDetail',
          name: 'AreaMaintenanceDetail',
          component: AreaMaintenanceDetail
        },
        {
          path: '/areaDeviceDetail',
          name: 'AreaDeviceDetail',
          component: AreaDeviceDetail
        },
        {
          path: '/userManagement',
          name: 'UserManagement',
          component: UserManagement
        }
      ]
    }
  ]
})
export default router
