<template>
  <div class="overview">
    <overview-info :overviewType="overviewType" :title="title" :overviewParams="overviewParams"></overview-info>
    <maintenance-chart :chartType="chartType"></maintenance-chart>
  </div>
</template>
<script>
  import OverviewInfo from './OverviewInfo'
  import MaintenanceChart from './MaintenanceChart'
  export default {
    props: {
      overviewType: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: ''
      },
      overviewParams: {
        type: Object,
        default: () => {
          return {}
        }
      },
      chartType: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
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
