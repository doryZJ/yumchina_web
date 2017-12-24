<template>
  <div class="storeCreateStepOne">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <div class="stepOne">
      <div class="stepOne_head">
        <img src="../assets/images/icon_add_store_36x36 copy 2@2x.png" alt="">
        <span>创建新门店 第1步（共3步）:  门店基本信息</span>
      </div>
      <div class="form-wrapper">
        <el-form :model="storeForm" :rules="rules" ref="storeForm">
          <el-form-item label="门店名称：" prop="name">
            <el-input v-model="storeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="所属子品牌：" prop="brand">
            <el-select v-model="storeForm.brand">
              <el-option v-for="(item, index) in storeForm.brandList"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="门店编号：" prop="no">
            <el-input v-model="storeForm.no"></el-input>
          </el-form-item>
          <el-form-item label="门店地址：" prop="address" class="adress">
            <el-input v-model="storeForm.address"></el-input>
          </el-form-item>
          <el-form-item label="门店面积：" prop="area" class="area">
            <el-input v-model="storeForm.area"></el-input>
            <span class="addition">平方米</span>
          </el-form-item>
          <el-form-item label="正式营业日期：" prop="businessDate">
            <el-date-picker type="date" v-model="storeForm.businessDate"></el-date-picker>
          </el-form-item>
          <el-form-item label="门店负责人：" prop="personCharge" class="personCharge">
            <el-input v-model="storeForm.personCharge">
            </el-input>
            <span class="addition">ID:{{storeForm.ID}}</span>
          </el-form-item>
          <el-form-item label="门店电话：" prop="tel">
            <el-input v-model="storeForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="Email：" prop="email" class="email">
            <el-input v-model="storeForm.email"></el-input>
          </el-form-item>
          <el-form-item label="备注：" prop="desc">
            <el-input type="textarea" v-model="storeForm.desc" :rows="3"></el-input>
          </el-form-item>
          <div class="btn-wrapper clearfix">
            <div class="btn btn-delete">取消</div>
            <div class="btn btn-save" @click="handleNext('storeForm')">下一步</div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  export default {
    data () {
      return {
        breadcrumbs: [
          {
            label: '服务管理'
          },
          {
            label: ' 门店管理 '
          },
          {
            label: ' 创建新门店 '
          }
        ],
        storeForm: {
          name: '肯德基桂林路店',
          brand: '肯德基',
          brandList: [{
            label: '肯德基',
            value: '肯德基'
          }, {
            label: '麦当劳',
            value: '麦当劳'
          }],
          no: 'KFC-CN16552',
          address: '中国上海市徐汇区田林田林路103号',
          area: 320,
          businessDate: '2014-10-1',
          personCharge: '王援朝',
          ID: 361784,
          tel: '021-64750619',
          email: 'guilinludian@kfc.com',
          desc: 'ouyqvsgiqhsbx'
        },
        rules: {
          name: [
            {
              required: true,
              message: '请输入门店名称',
              trigger: 'blur'
            }
          ],
          brand: [
            {
              required: true,
              message: '请选择所属子品牌',
              trigger: 'change'
            }
          ],
          no: [
            {
              required: true,
              message: '请输入门店编号',
              trigger: 'blur'
            }
          ],
          address: [
            {
              required: true,
              message: '请输入门店地址',
              trigger: 'blur'
            }
          ],
          personCharge: [
            {
              required: true,
              message: '请输入门店负责人',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    components: {
      Breadcrumb
    },
    methods: {
      handleNext (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/storeCreateStepTwo')
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
  .storeCreateStepOne {
    .stepOne {
      margin-top: 20px;
      height: 700px;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      padding: 20px;

      .stepOne_head {
        margin: 0 0 20px 0;

        img {
          width: 36px;
          height: 36px;
          margin-right: 10px;
          display: inline-block;
          vertical-align: middle;
        }

        span {
          font-size: 18px;
          color: #707070;
          letter-spacing: -0.75px;
          font-weight: bold;
          line-height: 36px;
          height: 36px;
          display: inline-block;
          vertical-align: middle;
        }
      }

      .form-wrapper {
        margin-left: 60px;

        .el-form {
          .el-form-item {
            margin-bottom: 16px;
          }

          .el-form-item__label {
            width: 120px;
            line-height: 36px;
          }

          .el-form-item__content {
            float: left;
            line-height: 36px;
            width: 180px;
            position: relative;

            .el-input {
              width: 180px;
            }

            .el-input__inner {
              height: 36px;
              border: 1px solid #D0D0D0;
              border-radius: 0;
              width: 180px;
              font-size: 14px;
              color: #707070;
            }

            textarea {
              border: 1px solid #D0D0D0;
              resize: none;
              border-radius: 0;
            }
          }

          .adress, .email {
            .el-form-item__content {
              width: 360px;

              .el-input__inner {
                width: 360px;
              }
            }
          }

          .area {
            .el-form-item__content {
              .addition {
                position: absolute;
                right: 10px;
                top: 1px;
                font-size: 14px;
                color: #707070;
                opacity: 0.5;
              }
            }
          }

          .personCharge {
            .el-form-item__content {
              .addition {
                position: absolute;
                right: 50px;
                top: 1px;
                font-size: 14px;
                color: #707070;
                opacity: 0.5;
              }
            }
          }

          .btn-wrapper {
            margin-top: 30px;
            margin-left: 120px;
            width: 240px;
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
              margin-right: 30px;
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
  }
</style>
