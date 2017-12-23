<template>
  <div class="login-view">
    <div class="login-box">
      <div class="head">
        <span>设备智能管理平台</span>
      </div>
      <div class="login">
        <div class="info">
          <img src="../assets/images/icon_id_9x20.png" alt="">
          <input type="text" @focus="focusUsername" @blur="blurUsername" v-model="username">
        </div>
        <div class="info info-password">
          <img src="../assets/images/icon_password_11x19.png" alt="">
          <input type="password" placeholder="密码" @focus="focusPassword" @blur="blurPassword" v-model="password">
        </div>
        <div class="operate">
          <div class="rememberMe" @click="handleRememberMe">
            <span class="icon">
              <i class="fa fa-check" v-show="rememberMeVisiable"></i>
            </span>
            <span class="text">记住我</span>
          </div>
          <div class="forgetPwd">
            忘记密码？
          </div>
        </div>
        <div class="btn" @click="handleLogin">
          登录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        rememberMeVisiable: false,
        username: '用户名',
        password: ''
      }
    },
    methods: {
      handleRememberMe () {
        this.rememberMeVisiable = !this.rememberMeVisiable
      },
      focusUsername () {
        this.username = ''
      },
      blurUsername () {
        if (!this.username) {
          this.username = '用户名'
        }
      },
      focusPassword () {
        this.$refs.password.placeholder = ''
      },
      blurPassword () {
        if (!this.password) {
          this.$refs.password.placeholder = '密码'
        }
      },
      handleLogin () {
        if (!this.username) {
          this.$message.warning('请输入用户名！')
          return
        }
        if (!this.password) {
          this.$message.warning('请输入密码！')
          return
        }
        this.$router.push('/Store')
      }
    }
  }
</script>
<style lang="scss">
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
  }
  .login-view {
    width: 100%;
    height: 100%;
    background: url('../assets/images/bg_app_login_1080x1920.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-box {
      width: 500px;
      height: 360px;
      opacity: 0.95;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
      padding: 30px 76px 50px 76px;
      box-sizing: border-box;

      .head {
        height: 47px;
        line-height: 47px;
        text-align: center;

        span {
          font-family: SourceHanSansCN-Light;
          font-size: 24px;
          color: #D53A2A;
          letter-spacing: 0;
        }
      }

      .login {
        margin-top: 47px;
        width: 300px;

        .info {
          height: 20px;
          padding-bottom: 3px;
          border-bottom: 1px solid #D0D0D0;
          display: flex;
          background-color: #fff;

          input {
            margin-left: 26px;
            width: 264px;
            font-size: 18px;
            letter-spacing: 3px;
            background-color: transparent !important;
            color: #35404D!important;
            border: 0;
            outline: 0;
          }
        }

        .info-password {
          margin-top: 48px;
        }

        .operate {
          margin-top: 29px;
          display: flex;
          justify-content: space-between;

          .rememberMe {
            height: 14px;
            display: flex;
            justify-content: center;

            .icon {
              width: 12px;
              height: 12px;
              background: #E4E4E4;
              font-size: 12px;
              text-align: center;
              line-height: 12px;
              color: #394451;
              border: 1px solid #394451;
              display: inline-block;
              margin-right: 10px;
              cursor: pointer;
            }

            .text {
              font-size: 12px;
              line-height: 14px;
              display: inline-block;
              color: #35404D;
              letter-spacing: 0;
            }
          }

          .forgetPwd {
            font-size: 12px;
            color: #35404D;
            letter-spacing: 0;
            text-decoration: underline;
            cursor: pointer;
          }
        }

        .btn {
          width: 300px;
          height: 36px;
          line-height: 36px;
          margin-top: 20px;
          text-align: center;
          background: #D53A2A;
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 3px;
          cursor: pointer;
        }
      }
    }
  }
</style>
