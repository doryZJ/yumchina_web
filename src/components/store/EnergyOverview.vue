<template>
  <div class="overview">
    <overview-info :overviewType="overviewType" :title="title" :overviewParams="overviewParams"></overview-info>
    <energy-chart :chartType="chartType"></energy-chart>
  </div>
</template>
<script>
  import OverviewInfo from './OverviewInfo'
  import EnergyChart from './EnergyChart'
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
        // storeEnergyType: 0,
        // storeEnergyTitle: '门店能耗总览',
        // storeEnergy: {
        //   item1Name: '今日全店总耗电量',
        //   item1Num1: '95',
        //   item1Num2: '150',
        //   item2Name: '今日全店总用水量',
        //   item2Num1: '41',
        //   item2Num2: '70',
        //   item3Name: '今日全区域节能减排排名',
        //   item3Num: '53'
        // }
      }
    },
    components: {
      OverviewInfo,
      EnergyChart
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
