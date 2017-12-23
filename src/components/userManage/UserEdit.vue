<template>
  <div class="popUp">
    <div class="edit">
      <div class="popup-head clearfix">
        <span class="title">
          修改
        </span>
        <span class="close" @click="close">x</span>
      </div>
      <div class="view-content">
        <el-form :model="userForm" :rules="rules" ref="userForm">
          <el-form-item label="状态：" prop="state" class="state">
            <el-radio-group v-model="userForm.state">
              <el-radio label="有效"></el-radio>
              <el-radio label="无效"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="登录名：" prop="loginName" >
            <el-input v-model="userForm.loginName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="用户角色：" prop="role" class="role">
            <el-input v-model="userForm.role" >
              <i class="el-icon-close el-input__icon"
                  slot="suffix"
                  @click="handleIconClick"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="userForm.username"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱：" prop="email">
            <el-input v-model="userForm.email"></el-input>
          </el-form-item>
          <el-form-item label="描述：" prop="desc">
            <el-input v-model="userForm.desc" type="textarea" :rows="2"></el-input>
          </el-form-item>
          <div class="btn-wrapper clearfix">
            <div class="btn btn-delete" @click="handleCancel">取消</div>
            <div class="btn btn-save" @click="submitForm('userForm')">保存</div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        userForm: {
          state: '有效',
          loginName: 'cai',
          role: '组织测试/人事部/人事经理',
          username: 'cai',
          email: '',
          desc: 'ouyqvsgiqhsbx'
        },
        rules: {
          state: [
            {
              required: true,
              message: '请选择状态',
              trigger: 'change'
            }
          ],
          loginName: [
            {
              required: true
            }
          ],
          role: [
            {
              required: true,
              message: '请输入用户角色'
            }
          ],
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }
          ],
          email: [
            {
              required: true,
              message: '请输入邮箱',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      close () {
        this.$emit('close', false)
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleCancel () {
        this.close()
      },
      handleIconClick () {
        this.userForm.role = ''
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

    .edit {
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

      .view-content {
        margin-top: 40px;

        .el-form {
          .el-form-item {
            margin-bottom: 20px;
          }

          .el-form-item__label {
            width: 100px;
            line-height: 36px;
            text-align: right;
          }

          .el-form-item__content {
            width: 170px;
            line-height: 36px;
            float: left;

            .el-input {
              line-height: 36px;
            }

            .el-input__inner {
              height: 36px;
              border: 1px solid #D0D0D0;
            }

            .el-radio {
              .el-radio__input {
                .el-radio__inner {
                  display: none;
                }
              }

              .el-radio__label {
                width: 48px;
                height: 24px;
                background: #FFFFFF;
                border: 1px solid #698CA7;
                font-size: 12px;
                color: #698CA7;
                letter-spacing: -0.5px;
                text-align: center;
                line-height: 24px;
                box-sizing: border-box;
                display: inline-block;
                padding: 0;
              }
            }

            .is-checked {
              .el-radio__label {
                width: 48px;
                height: 24px;
                background: #698CA7;
                border: 1px solid #698CA7;
                font-size: 12px;
                color: #FFFFFF;
                letter-spacing: -0.5px;
                text-align: center;
                line-height: 24px;
                box-sizing: border-box;
              }
            }

            textarea {
              resize: none;
            }
          }

          .role {
            .el-input__inner {
              background-color: #f5f7fa;
            }

            .el-input__icon {
              cursor: pointer;
            }
          }

          .state {
            .el-form-item__label {
              line-height: 24px;
            }

            .el-form-item__content {
              line-height: 24px;
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
    }
  }
</style>
