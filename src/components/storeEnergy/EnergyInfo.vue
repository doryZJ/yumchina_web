<template>
  <div class="energyInfo">
    <div class="energyInfo__head">
      <div class="energyInfo__head__left">
        <img src="../../assets/images/icon_on_36x36.png" v-show="info.type === 0" alt="">
        <img src="../../assets/images/icon_standby_36x36.png" v-show="info.type === 1" alt="">
        <div class="energyInfo__head__left__title">
          <p>{{info.name}}</p>
          <span>{{info.model}}</span>
        </div>
      </div>
      <div class="energyInfo__head__right" v-show="info.description">
        {{info.description}}
      </div>
    </div>
    <div class="energyInfo-power">
      <span class="label">今日耗电量：</span>
      <div class="quantity">
        <p><span>{{info.power}}</span>
          度
        </p>
        <p>预计 {{info.expectedPower}} 度</p>
      </div>
    </div>
    <div class="energyInfo-btns">
      <div class="btn btn-opera">运维申请</div>
      <div class="btn btn-device">设备详情</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      info: {
        type: Object,
        default: () => {
          return {
            type: 0, // 0: 运行，1: 待机
            name: '制冰机',
            model: 'Manitowoc',
            description: '冰块',
            power: 12.1,
            expectedPower: 18.7
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  .energyInfo {
    width: 200px;
    padding: 20px;
    border-right: 1px solid #D0D0D0;

    .energyInfo__head {
      display: flex;
      justify-content: space-between;

      .energyInfo__head__left {
        display: flex;
        height: 36px;
        align-items: center;

        img {
          width: 36px;
          height: 36px;
        }

        .energyInfo__head__left__title {
          margin-left: 12px;

          p {
            font-family: SourceHanSansCN-Bold;
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.58px;
            margin: 0;
          }

          span {
            font-family: HoneywellSans-Light;
            font-size: 12px;
            color: #707070;
            letter-spacing: -0.5px;
          }
        }
      }

      .energyInfo__head__right {
        font-family: SourceHanSansCN-Normal;
        font-size: 12px;
        color: #707070;
        letter-spacing: -0.5px;
      }
    }

    .energyInfo-power {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 40px;

      .label {
        font-family: SourceHanSansCN-Normal;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
      }

      .quantity {
        font-size: 0;
        text-align: right;

        p {
          margin: 0;
          font-family: SourceHanSansCN-Normal;
          font-size: 12px;
          color: #707070;
          letter-spacing: -0.5px;
          line-height: 18px;

          span {
            font-family: HoneywellSans-Medium;
            font-size: 36px;
            color: #E26A3A;
            letter-spacing: -1.5px;
          }
        }
      }
    }

    .energyInfo-btns {
      margin-top: 50px;
      display: flex;

      .btn {
        width: 95px;
        height: 27px;
        box-sizing: border-box;
        text-align: center;
        line-height: 27px;
        cursor: pointer;
      }

      .btn-opera {
        border: 1px solid #A8B3C3;
        font-family: SourceHanSansCN-Normal;
        font-size: 12px;
        color: #A3B3BF;
        letter-spacing: -0.5px;
        margin-right: 10px;
      }

      .btn-device {
        background: #A8B3C3;
        font-family: SourceHanSansCN-Normal;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: -0.5px;
      }

    }

  }
</style>
