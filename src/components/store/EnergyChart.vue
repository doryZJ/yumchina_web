<template>
  <div class="energy-chart">
    <div class="head">
      <div class="nav">
        <span class="active">耗电量统计</span>
        <i>|</i>
        <span>耗水量统计</span>
        <i>|</i>
        <span>耗热水量统计</span>
        <i>|</i>
        <span>耗热水量统计</span>
        <i>|</i>
        <span>顾客洗手水量</span>
      </div>
      <div class="period">
        <span class="active">日</span>
        <span>周</span>
        <span>月</span>
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
            data: ['厨房用电', '其他用电'],
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
              data: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '厨房用电',
              type: 'bar',
              stack: '用电',
              // data: [
              //   {
              //     value: 120,
              //     itemStyle: {
              //       normal: {
              //         color: '#698CA7',
              //         borderColor: '#698CA7'
              //       }
              //     }
              //   },
              //   {
              //     value: 132,
              //     itemStyle: {
              //       normal: {
              //         color: '#698CA7',
              //         borderColor: '#698CA7'
              //       }
              //     }
              //   },
              //   {
              //     value: 101,
              //     itemStyle: {
              //       normal: {
              //         color: '#698CA7',
              //         borderColor: '#698CA7'
              //       }
              //     }
              //   },
              //   {
              //     value: 134,
              //     itemStyle: {
              //       normal: {
              //         color: '#698CA7',
              //         borderColor: '#698CA7'
              //       }
              //     }
              //   },
              //   {
              //     value: 90,
              //     itemStyle: {
              //       normal: {
              //         color: '#698CA7',
              //         borderColor: '#698CA7'
              //       }
              //     }
              //   },
              //   {
              //     value: 230,
              //     itemStyle: {
              //       normal: {
              //         color: '#698CA7',
              //         borderColor: '#698CA7'
              //       }
              //     }
              //   },
              //   {
              //     value: 210,
              //     itemStyle: {
              //       normal: {
              //         color: '#698CA7',
              //         borderColor: '#698CA7'
              //       }
              //     }
              //   }
              // ],
              data: [120, 132, 101, 134, 90, 230, 210],
              itemStyle: {
                normal: {
                  color: '#698CA7',
                  borderColor: '#698CA7'
                }
              }
            },
            {
              name: '其他用电',
              type: 'bar',
              stack: '用电',
              data: [220, 182, 191, 234, 290, 330, 310],
              itemStyle: {
                normal: {
                  color: '#9eb5c6',
                  borderColor: '#698CA7'
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
