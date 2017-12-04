<template>
  <div class="StoreMaintenanceDetail">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <device-list></device-list>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import DeviceList from '@/components/area/DeviceList'
  export default {
    components: {
      Breadcrumb,
      DeviceList
    },
    data () {
      return {
        breadcrumbs: [
          {
            label: '上海地区'
          },
          {
            label: ' 区域设备详情'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .StoreMaintenanceDetail {
  }
</style>
