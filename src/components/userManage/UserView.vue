<template>
  <div class="popUp">
    <div class="view">
      <div class="popup-head clearfix">
        <span class="title">
          查看
        </span>
        <span class="close" @click="close">x</span>
      </div>
      <div class="view-content">
        <div class="info">
          <span class="label">状态：</span>
          <span class="value" :class="stateCls">{{info.state}}</span>
        </div>
        <div class="info">
          <span class="label">登录名：</span>
          <span class="value">{{info.loginName}}</span>
        </div>
        <div class="info">
          <span class="label">用户角色：</span>
          <span class="value">{{info.role}}</span>
        </div>
        <div class="info">
          <span class="label">用户名：</span>
          <span class="value">{{info.username}}</span>
        </div>
        <div class="info">
          <span class="label">电子邮箱：</span>
          <span class="value">{{info.email}}</span>
        </div>
        <div class="info">
          <span class="label">描述：</span>
          <span class="value">{{info.desc}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        info: {
          state: '有效',
          loginName: 'cai',
          role: '组织测试/人事部/人事经理',
          username: 'cai',
          email: '',
          desc: 'ouyqvsgiqhsbx'
        }
      }
    },
    computed: {
      stateCls () {
        return this.info.state === '有效' ? 'green' : 'red'
      }
    },
    methods: {
      close () {
        this.$emit('close', false)
      }
    }
  }
</script>
<style lang="scss">
  .popUp {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(53, 64, 77, 0.8);
    top: 0;
    left: 0;
    z-index: 9999;

    .view {
      width: 320px;
      height: 380px;
      padding: 20px;
      box-sizing: border-box;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -190px;
      margin-left: -160px;

      .popup-head {
        width: 100%;
        height: 18px;

        .title {
          float: left;
          font-size: 18px;
          color: #707070;
          letter-spacing: -0.75px;
        }

        .close {
          float: right;
          cursor: pointer;
          font-size: 18px;
        }
      }

      .view-content {
        margin-top: 40px;

        .info {
          margin-bottom: 25px;
          
          .label {
            width: 80px;
            display: inline-block;
            text-align: right;
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.58px;
          }

          .value {
            font-size: 14px;
            color: #707070;
            letter-spacing: -0.58px;
          }

          .green {
            color: #6FB788;
          }

          .red {
            color: #EE3124;
          }
        }
      }
    }
  }
</style>
