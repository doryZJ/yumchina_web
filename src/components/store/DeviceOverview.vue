<template>
  <div class="deviceOverview">
    <div class="head">
      <img src="../../assets/images/icon_equipment_36x36.png" alt="">
      <span>门店设备总览</span>
    </div>
    <ul class="deviceList">
      <li v-for="(item, index) in list" :key="index">
        <img src="../../assets/images/icon_alarm_high_36x33.png" v-show="item.deviceType === 0" alt="">
        <img src="../../assets/images/icon_alarm_low_36x33.png" v-show="item.deviceType === 1" alt="">
        <img src="../../assets/images/icon_alarm_mid_36x33.png" v-show="item.deviceType === 2" alt="">
        <p>
          {{item.title}} 
          <span> 查看详情</span>
        </p>
      </li>
    </ul>
    <div class="detail">查看详情</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            deviceType: 0,
            title: '空调 AC-002 压缩机无响应。错误代码：E304752',
            url: ''
          },
          {
            deviceType: 1,
            title: '空调 AC-002 压缩机无响应。错误代码：E304752',
            url: ''
          },
          {
            deviceType: 2,
            title: '空调 AC-002 压缩机无响应。错误代码：E304752',
            url: ''
          },
          {
            deviceType: 0,
            title: '空调 AC-002 压缩机无响应。错误代码：E304752',
            url: ''
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .deviceOverview {
    flex: 1;
    padding: 20px;
    height: 330px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #D0D0D0;
    position: relative;

    .head {
      display: flex;
      height: 36px;
      align-items: center;

      img {
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }

      span {
        font-family: SourceHanSansCN-Bold;
        font-size: 18px;
        color: #707070;
        letter-spacing: -0.75px;
      }
    }

    .deviceList {
      margin-left: 50px;
      padding: 0;

      li {
        height: 24px;
        display: flex;
        align-items: center;
        margin-bottom: 18px;

        img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          display: inline-block;
        }

        p {
          display: inline-block;
          font-family: SourceHanSansCN-Normal;
          font-size: 14px;
          color: #A0A0A0;
          letter-spacing: -0.58px;

          span {
            font-family: SourceHanSansCN-Normal;
            font-size: 14px;
            color: #698CA7;
            letter-spacing: -0.58px;
            line-height: 21px;
            text-decoration: underline;
            margin-left: 5px;
          }
        }
      }
    }

    .detail {
      position: absolute;
      font-family: SourceHanSansCN-Normal;
      font-size: 12px;
      color: #698CA7;
      letter-spacing: -0.5px;
      text-decoration: underline;
      right: 20px;
      bottom: 20px;
    }
  }
</style>


