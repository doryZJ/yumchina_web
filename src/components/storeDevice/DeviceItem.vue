<template>
  <div class="DeviceItem">
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
    <div class="deviceParams">
      <div class="label">{{info.label}}</div>
      <div class="deviceNum">
        <p>
          <span>{{info.number}}</span>
          <i v-show="info.unit">{{info.unit}}</i>
        </p>
        <img src="../../assets/images/icon_triangle_up_8x8.png" v-show="info.variety === 0" alt="">
        <img src="../../assets/images/icon_triangle_down_8x8.png" v-show="info.variety === 1" alt="">
      </div>
      <div class="setting" v-show="info.settingNumber">
       设定 {{info.settingNumber}} {{info.settingUnit}}
      </div>
    </div>
    <div class="btns">
      <div class="btn btn-more" v-show="info.btnMore">更多信息</div>
      <div class="btn btn-control" v-show="info.btnControl">远程控制</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      info: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>
<style lang="scss">
  .DeviceItem {
    width: 220px;
    height: 220px;
    background: #FFFFFF;
    border: 1px solid #D0D0D0;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    margin-right: 20px;
    position: relative;

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

    .deviceParams {
      margin-top: 20px;
      text-align: center;

      .label {
        font-family: SourceHanSansCN-Light;
        font-size: 14px;
        color: #707070;
        letter-spacing: -0.58px;
        margin: 0;
        height: 20px;
        display: block;
      }

      .deviceNum {
        font-family: HoneywellSans-Light;
        font-size: 12px;
        color: #35404D;
        letter-spacing: -0.75px;
        position: relative;
        height: 56px;
        margin: 5px 0;
        
        p {
          margin: 0;
          display: inline-block;
        }

        span {
          font-size: 52px;
          line-height: 56px;
          display: inline-block;
        }

        i {
          font-style: normal;
        }

        img {
          position: absolute;
          margin-left: -5px;
          top: 5px;
        }
      }

      .setting {
        font-family: SourceHanSansCN-Light;
        font-size: 12px;
        color: #698CA7;
        letter-spacing: -0.5px;
      }
    }

    .btns {
      margin-top: 14px;
      position: absolute;
      bottom: 10px;

      .btn {
        width: 90px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        font-family: SourceHanSansCN-Normal;
        font-size: 12px;
        letter-spacing: -0.5px;
        box-sizing: border-box;
        display: inline-block;
      }

      .btn-more {
        border: 1px solid #A8B3C3;
        color: #A3B3BF;
        margin-right: 10px;
      }

      .btn-control {
        background: #A8B3C3;
        color: #FFFFFF;
      }
    }
  }
</style>


