<template>
  <div class="store-view">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <div class="storeInfo">
      <device-chart :type="deviceAlarmType" :list="deviceAlarmList" :title="deviceAlarmTitle"></device-chart>
      <device-chart :type="deviceOfflineType" :list="deviceOfflineList" :title="deviceOfflineTitle"></device-chart>
      <area-info :infoType="infoType"></area-info>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import DeviceChart from '@/components/DeviceChart'
  import AreaInfo from '@/components/AreaInfo'
  export default {
    data () {
      return {
        breadcrumbs: [
          {
            label: '上海地区'
          },
          {
            label: ' 肯德基洛川店'
          }
        ],
        deviceAlarmTitle: '设备告警',
        deviceAlarmType: 1,
        deviceAlarmList: [
          {
            name: '设备告警·低',
            value: 1
          },
          {
            name: '设备告警·中',
            value: 1
          },
          {
            name: '设备告警·高',
            value: 2
          }
        ],
        deviceOfflineTitle: '设备离线',
        deviceOfflineType: 0,
        deviceOfflineList: [
          {
            name: '在线设备',
            value: 32
          },
          {
            name: '不稳定设备',
            value: 2
          },
          {
            name: '离线设备',
            value: 1
          }
        ],
        infoType: 1
      }
    },
    components: {
      Breadcrumb,
      DeviceChart,
      AreaInfo
    }
  }
</script>
<style lang="scss">
  .store-view {
    .storeInfo {
      display: flex;
      margin-top: 24px;
    }
  }
</style>
