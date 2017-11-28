<template>
  <div class="deviceChart">
    <div class="circleChart">
      <div id="circle" class="circle" ref="circle"></div>
      <div class="content">
        <span class="count">{{listCount}}</span>
        <span class="text">{{title}}</span>
      </div>
    </div>
    <div class="repairList">
      <ul :class="listCls">
        <li v-for="(item, index) in list" :key="index">
          <div class="name-wrapper">
            <span class="state"></span>
            <span class="repairName">{{item.name}}</span>
          </div>
          <span class="repairCount" >
            {{item.value}}
            <font v-show="type === 1">件</font>
            <font v-show="type === 0">台</font>
            <img src="../../assets/images/btn_arrow_right_24x24@3x.png" alt="">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props: {
      type: { // 0: 区域首页，1: 门店首页
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: ''
      },
      list: {
        type: Array,
        default: []
      }
    },
    computed: {
      listCount () {
        if (this.type === 0) {
          return this.list[2].value
        } else {
          let count = 0
          this.list.forEach((item) => {
            count += item.value
          })
          return count
        }
      },
      listCls () {
        return this.type === 0 ? 'areaList' : 'storeList'
      },
      circleColor () {
        return this.type === 0 ? ['#6FB788', '#E6B634', '#DE6C60'] : ['#F8E71C', '#F68B44', '#EE3124']
      }
    },
    mounted () {
      this.initEcharts()
    },
    methods: {
      initEcharts () {
        const elCircle = this.$refs.circle
        let circleChart = echarts.init(elCircle)
        circleChart.setOption({
          series: [
            {
              type: 'pie',
              radius: ['70%', '90%'],
              label: {
                normal: {
                  show: false,
                  position: 'center'
                }
              },
              data: this.list
            }
          ],
          color: this.circleColor
        })
      }
    }
  }
</script>
<style lang="scss">
  .deviceChart {
    background: #FFFFFF;
    border: 1px solid #D0D0D0;
    padding: 15px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin-right: 8px;

    .circleChart {
      width: 120px;
      height: 120px;
      margin-right: 16px;
      position: relative;

      .circle {
        width: 100%;
        height: 100%;
      }
      .content {
        position: absolute;
        width: 60px;
        height: 60px;
        top: 30px;
        left: 30px;
        text-align: center;
        padding: 0;
        background: #fff;

        .count {
          font-family: HoneywellSans-Light;
          font-size: 36px;
          color: #303030;
          letter-spacing: -0.56px;
          line-height: 36px;
          display: block;
        }

        .text {
          font-family: SourceHanSansCN-Light;
          font-size: 12px;
          color: #303030;
          letter-spacing: -0.25px;
          line-height: 18px;
          display: block;
        }
      }
    }

    .repairList {
      margin: 8px 0;
      flex: 1;

      ul {
        margin: 0;
        padding: 0;

        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;

          .name-wrapper {
            height: 24px;
            line-height: 24px;
            position: relative;
            font-size: 0;
            display: flex;
            align-items: center;
          }

          .state {
            width: 6px;
            height: 24px;
            margin-right: 14px;
            display: inline-block;
          }

          .repairName {
            height: 24px;
            line-height: 24px;
            font-family: SourceHanSansCN-Normal;
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.25px;
            display: inline-block;
          }

          img {
            margin-left: 4px;
            width: 12px;
            height: 12px;
            margin-top: 6px;
          }

          .repairCount {
            height: 24px;
            line-height: 24px;
            font-family: SourceHanSansCN-Normal;
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.22px;
          }
        }
      }

      .areaList {
        li {
          &:nth-of-type(1) {
            .state {
              background: #6FB788;
            }
          }

          &:nth-of-type(2) {
            .state {
              background: #E6B634;
            }
          }

          &:nth-of-type(3) {
            margin-bottom: 0;
            .state {
              background: #DE6C60;
            }
          }
        }
      }

      .storeList {
        li {
          &:nth-of-type(1) {
            .state {
              background: #F8E71C;
            }
          }

          &:nth-of-type(2) {
            .state {
              background: #F68B44;
            }
          }

          &:nth-of-type(3) {
            margin-bottom: 0;
            .state {
              background: #EE3124;
            }
          }
        }
      }
    }
  }
</style>
