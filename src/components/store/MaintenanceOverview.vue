<template>
  <div class="overview">
    <overview-info :overviewType="storeEnergyType" :title="storeEnergyTitle" :overviewParams="storeEnergy"></overview-info>
    <maintenance-chart></maintenance-chart>
  </div>
</template>
<script>
  import OverviewInfo from './OverviewInfo'
  import MaintenanceChart from './MaintenanceChart'
  export default {
    data () {
      return {
        storeEnergyType: 1,
        storeEnergyTitle: '门店运维总览',
        storeEnergy: {
          item1Name: '今日待处理设备告警',
          item1Num1: '4',
          item2Name: '今日本店总维修费用',
          item2Num1: '2000',
          item3Name: '今日全区域优秀运维排名',
          item3Num: '72'
        }
      }
    },
    components: {
      OverviewInfo,
      MaintenanceChart
    }
  }
</script>
<style lang="scss">
  .overview {
    width: 100%;
    height: 310px;
    background: #FFFFFF;
    border: 1px solid #D0D0D0;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
</style>
