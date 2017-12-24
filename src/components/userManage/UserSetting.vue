<template>
  <div class="popUp">
    <div class="setting" :class="settingCls">
      <div class="popup-head clearfix">
        <span class="title">
          个人设置
        </span>
        <span class="close" @click="close">x</span>
      </div>
      <div class="setting-content">
        <el-tabs type="border-card" @tab-click="handleClick">
          <el-tab-pane label="个人资料">
            <el-form :model="userForm" :rules="rules" ref="userForm">
              <el-form-item label="登录名：" prop="loginName">
                <span>{{userForm.loginName}}</span>
              </el-form-item>
              <el-form-item label="用户名：" prop="userName" >
                <el-input v-model="userForm.userName" ></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱：" prop="email" >
                <el-input v-model="userForm.email" >
                </el-input>
              </el-form-item>
              <el-form-item label="用户角色：" prop="role">
                <span>{{userForm.role}}</span>
              </el-form-item>
              <el-form-item label="登录IP：" prop="IP">
                <span>{{userForm.IP}}</span>
              </el-form-item>
              <el-form-item label="登录时间：" prop="loginDate">
                <span>{{userForm.loginDate}}</span>
              </el-form-item>
              <div class="btn-wrapper clearfix">
                <div class="btn btn-delete" @click="handleCancel">取消</div>
                <div class="btn btn-save" @click="profileConfirm('userForm')">确认</div>
              </div>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="密码管理">
            <el-form :model="passportForm" :rules="passportRules" ref="passportForm">
              <el-form-item label="旧密码：" prop="oldPwd">
                <el-input v-model="passportForm.oldPwd" type="password"></el-input>
              </el-form-item>
              <el-form-item label="新密码：" prop="newPwd" >
                <el-input v-model="passportForm.newPwd" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码：" prop="confirmPwd" >
                <el-input v-model="passportForm.confirmPwd" type="password">
                </el-input>
              </el-form-item>
              <div class="btn-wrapper clearfix">
                <div class="btn btn-delete" @click="handleCancel">取消</div>
                <div class="btn btn-save" @click="profileConfirm('passportForm')">确认</div>
              </div>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.passportForm.newPwd !== '') {
            this.$refs.passportForm.validateField('confirmPwd')
          }
          callback()
        }
      }
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.passportForm.newPwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        selectState: '个人资料',
        userForm: {
          loginName: 'Admin',
          userName: 'Admin',
          email: 'cai@163.com',
          role: '开发者',
          IP: '192.168.1.104:4000',
          loginDate: '2017/11/02    17:00:31'
        },
        rules: {
          userName: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }
          ]
        },
        passportForm: {
          oldPwd: '******',
          newPwd: '',
          confirmPwd: ''
        },
        passportRules: {
          newPwd: [
            {
              validator: validatePass,
              trigger: 'blur'
            }
          ],
          confirmPwd: [
            {
              validator: validatePass2,
              trigger: 'blur'
            }
          ]
        }
      }
    },
    computed: {
      settingCls () {
        return this.selectState === '个人资料' ? 'profileSetting' : 'passportSetting'
      }
    },
    methods: {
      handleClick (tab, event) {
        this.selectState = tab.label
      },
      close () {
        this.$emit('close', false)
      },
      handleCancel () {
        this.close()
      },
      profileConfirm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
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

    .setting {
      width: 320px;
      height: 500px;
      padding: 20px;
      box-sizing: border-box;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -250px;
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

      .setting-content {
        .el-tabs--border-card {
          border: 0;
          box-shadow: 0 0 0 #fff;
          margin-top: 20px;

          .el-tabs__header {
            background: #fff;

            .el-tabs__item {
              border: 1px solid #D0D0D0;
              color: #7691a6;
              height: 30px;
              line-height: 30px;
              margin: 0;
              margin-right: 10px;
            }

            .is-active {
              border-bottom: 0;
              color: #718da3;
              margin: 0;
              margin-right: 10px;
              font-weight: bold;
            }
          }

          .el-form {
            .el-form-item {
              margin-bottom: 16px;
            }

            .el-form-item__label {
              width: 90px;
              line-height: 36px;
              color: #707070;
              text-align: right;
            }

            .el-form-item__content {
              width: 150px;
              line-height: 36px;
              float: left;

              span {
                font-size: 14px;
                color: #707070;
                letter-spacing: -0.58px;
              }

              .el-input {
                line-height: 36px;
              }

              .el-input__inner {
                height: 36px;
                border: 1px solid #D0D0D0;
                font-size: 14px;
                color: #707070;
                letter-spacing: -0.58px;
                border-radius: 0;
                padding: 0 10px;
              }
            }
          }
        }
      }

      .btn-wrapper {
        margin: 30px auto 0;
        width: 210px;
        height: 28px;

        .btn {
          width: 95px;
          height: 28px;
          box-sizing: border-box;
          text-align: center;
          line-height: 28px;
          float: left;
          cursor: pointer;
        }

        .btn-delete {
          background: #fff;
          border: 1px solid #A8B3C3;
          font-size: 12px;
          color: #A3B3BF;
          letter-spacing: -0.5px;
          margin-right: 10px;
        }

        .btn-save {
          background: #A8B3C3;
          border: 1px solid #A8B3C3;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }
      }
    }

    .passportSetting {
      height: 380px;
      margin-top: -190px;

      .setting-content {
        .el-tabs--border-card {
          border: 0;
          box-shadow: 0 0 0 #fff;
          margin-top: 20px;

          .el-tabs__header {
            background: #fff;

            .el-tabs__item {
              border: 1px solid #D0D0D0;
              color: #7691a6;
              height: 30px;
              line-height: 30px;
              margin: 0;
              margin-right: 10px;
            }

            .is-active {
              border-bottom: 0;
              color: #718da3;
              margin: 0;
              margin-right: 10px;
              font-weight: bold;
            }
          }

          .el-form {
            .el-form-item {
              margin-bottom: 16px;
            }

            .el-form-item__label {
              width: 100px;
              line-height: 36px;
              color: #707070;
              text-align: right;
            }

            .el-form-item__content {
              width: 140px;
              line-height: 36px;
              float: left;

              span {
                font-size: 14px;
                color: #707070;
                letter-spacing: -0.58px;
              }

              .el-input {
                line-height: 36px;
              }

              .el-input__inner {
                height: 36px;
                border: 1px solid #D0D0D0;
                font-size: 14px;
                color: #707070;
                letter-spacing: -0.58px;
                border-radius: 0;
                padding: 0 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
