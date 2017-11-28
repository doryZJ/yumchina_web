<template>
  <div class="energy-chart">
    <div class="head">
      <div class="nav">
        <span class="active">设备告警统计</span>
        <i>|</i>
        <span>运维费用统计</span>
      </div>
    </div>
    <div class="chart-wrapper">
      <div class="chart" ref="chart"></div>
      <div class="more" @click="handleMore">查看详情</div>
    </div>
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
          legend: {
            data: ['运维申请'],
            bottom: '0px',
            left: '12%'
          },
          grid: {
            left: '7%',
            right: '0',
            top: '10px',
            bottom: '40px',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28']
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
              data: [220, 182, 191, 234, 290, 330, 310],
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
      },
      handleMore () {
      }
    }
  }
</script>
<style lang="scss">
  .energy-chart {
    width: 635px;

    .head {
      margin-top: 6px;
      display: flex;
      justify-content: flex-end;
      height: 24px;
      align-items: center;

      .nav {
        span {
          font-family: SourceHanSansCN-Normal;
          font-size: 12px;
          color: #698CA7;
          text-decoration: underline;
          letter-spacing: -0.5px;
          line-height: 18px;
        }

        span.active {
          color: #707070;
        }

        i {
          font-family: SourceHanSansCN-Normal;
          font-size: 12px;
          color: #2E2E2E;
          letter-spacing: -0.5px;
          line-height: 18px;
          padding: 10px;
          display: inline-block;
          font-style: normal;
        }
      }

      .period {
        margin-left: 20px;

        span {
          width: 24px;
          height: 24px;
          border: 1px solid #698CA7;
          line-height: 24px;
          text-align: center;
          display: inline-block;
          font-family: SourceHanSansCN-Medium;
          font-size: 12px;
          color: #698CA7;
          letter-spacing: -0.5px;
          
        }

        span:not(:last-child) {
          margin-right: 5px;
        }

        span.active {
          background: #698CA7;
          color: #FFFFFF;
        }
      }
    }

    .chart-wrapper {
      position: relative;

      .chart {
        width: 635px;
        height: 220px;
        margin-top: 20px;
      }

      .more {
        position: absolute;
        font-family: SourceHanSansCN-Normal;
        font-size: 12px;
        color: #698CA7;
        letter-spacing: -0.5px;
        text-decoration: underline;
        cursor: pointer;
        right: 0;
        bottom: 0;
      }
    }
  }
</style>
