<template>
  <div class="energyChart">
    <div class="chart" ref="chart"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    mounted () {
      this.initChart()
    },
    methods: {
      initChart () {
        const elChart = this.$refs.chart
        let chart = echarts.init(elChart)
        const options = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '7%',
            right: '0',
            top: '10px',
            bottom: '10px',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '运维申请',
              type: 'bar',
              data: [220, 182, 191, 234, 290, 330, 310, 320, 220, 182, 191, 234, 290, 330, 310, 320],
              itemStyle: {
                normal: {
                  opacity: '0.9',
                  color: '#698CA7'
                }
              }
            }
          ]
        }
        chart.setOption(options)
      }
    }
  }
</script>
<style lang="scss">
  .energyChart {
    flex: 1;
    margin-right: 20px;
    margin-top: 20px;

    .chart {
      width: 100%;
      height: 200px;
    }
  }
</style>
