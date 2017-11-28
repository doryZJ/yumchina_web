<template>
  <div class="OverviewInfo">
    <div class="head">
      <img src="../../assets/images/icon_energy_consumption_36x36.png" v-show="overviewType === 0" alt="">
      <img src="../../assets/images/icon_maintenance_36x36.png" v-show="overviewType !== 0" alt="">
      <span>{{title}}</span>
    </div>
    <div class="info-content" v-if="overviewParams">
      <div class="item">
        <span class="name">{{overviewParams.item1Name}}:</span>
        <div class="itemNum">
          <p>
            <span>{{overviewParams.item1Num1}}</span>
            <em v-show="overviewType === 0">度</em>
            <em v-show="overviewType === 1">家</em>
            <em v-show="overviewType === 2">项</em>
          </p>
          <span class="expected" v-show="overviewType === 0">预计{{overviewParams.item1Num2}}度</span>
          <span class="expected" v-show="overviewType === 1 && overviewParams.item1Num2">共{{overviewParams.item1Num2}}家</span>
        </div>
      </div>
      <div class="item">
        <span class="name">{{overviewParams.item2Name}}:</span>
        <div class="itemNum">
          <p>
            <span>{{overviewParams.item2Num1}}</span>
            <em v-show="overviewType === 0">吨</em>
            <em v-show="overviewType === 1 || overviewType === 2">元</em>
          </p>
          <span class="expected" v-show="overviewType === 0">预计{{overviewParams.item2Num2}}吨</span>
          <span class="expected" v-show="overviewType === 1 && overviewParams.item2Num2">预计{{overviewParams.item2Num2}}元</span>
        </div>
      </div>
      <div class="item">
        <span class="name">{{overviewParams.item3Name}}:</span>
        <div class="itemNum">
          <p>
            <span>{{overviewParams.item3Num}}</span>
            <em v-show="overviewType === 0">名</em>
            <em v-show="overviewType === 1">项</em>
            <em v-show="overviewType === 2">名</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      overviewType: { // 0: 能量总览， // 1: 运维总览 // 2: 门店运维总览
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: '区域能耗总览'
      },
      overviewParams: {
        item1Name: '今日全区域总耗电量',
        item1Num1: '15,123',
        item1Num2: '25,131',
        item2Name: '今日全区域总用水量',
        item2Num1: '1,631',
        item2Num2: '2,131',
        item3Name: '今日全区域能耗超标店铺',
        item3Num: '3'
      }
    }
  }
</script>
<style lang="scss">
  .OverviewInfo {
    width: 365px;

    .head {
      position: relative;
      display: flex;
      align-items: center;

      img {
        width: 36px;
        height: 36px;
        margin: 0;
        padding: 0;
      }

      span {
        font-family: SourceHanSansCN-Bold;
        font-size: 18px;
        color: #707070;
        margin-left: 10px;
        display: inline-block;
      }
    }

    .info-content {
      margin-top: 18px;
      padding-left: 46px;

      .item {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 25px;

        .name {
          font-family: SourceHanSansCN-Normal;
          font-size: 14px;
          display: block;
          color: #707070;
          display: inline-block;
        }

        .itemNum {
          text-align: right;
          position: relative;

          p {
            vertical-align: bottom;
            font-family: SourceHanSansCN-Normal;
            font-size: 12px;
            color: #707070;
            margin: 0;
            padding: 0;

            span {
              font-family: HoneywellSans-Light;
              font-size: 36px;
              color: #707070;
              display: inline-block;
              height: 40px;
            }

            em {
              font-style: normal;
            }
          }

          .expected {
            position: absolute;
            right: 0;
            top: 43px;
            font-family: SourceHanSansCN-Light;
            font-size: 12px;
            color: #2E2E2E;
            letter-spacing: -0.5px;
            display: inline-block;
          }
        }

        &:nth-of-type(2) {
          .itemNum {
            p {
              span {
                color: #E26A3A;
              }
            }
          }
        }

        &:nth-of-type(3) {
          .itemNum {
            p {
              span.active {
                color: #E26A3A;
              }
            }
          }
        }
      }
    }
  }
</style>
