<template>
  <div class="StoreMaintenanceDetail">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <application-list></application-list>
    <maintenance-workList></maintenance-workList>
    <check-workList></check-workList>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import ApplicationList from '@/components/maintenanceList/ApplicationList'
  import MaintenanceWorkList from '@/components/maintenanceList/MaintenanceWorkList'
  import CheckWorkList from '@/components/maintenanceList/CheckWorkList'
  export default {
    components: {
      Breadcrumb,
      ApplicationList,
      MaintenanceWorkList,
      CheckWorkList
    },
    data () {
      return {
        breadcrumbs: [
          {
            label: '上海地区'
          },
          {
            label: ' 肯德基洛川店'
          },
          {
            label: ' 门店运维详情'
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
