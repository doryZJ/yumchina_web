<template>
  <div class="energyItem">
    <energy-info :info="item.info" ></energy-info>
    <energy-chart :chartData="item.chartData"></energy-chart>
  </div> 
</template>
<script>
  import EnergyInfo from './EnergyInfo'
  import EnergyChart from './EnergyChart'
  export default {
    components: {
      EnergyInfo,
      EnergyChart
    },
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>
<style lang="scss">
  .energyItem {
    display: flex;
    height: 240px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #D0D0D0;
    margin-top: 20px;
  }
</style>
