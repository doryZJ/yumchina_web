<template>
  <div class="storeCreateStepOne">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <div class="stepOne">
      <div class="stepOne_head">
        <img src="../assets/images/icon_add_store_36x36 copy 2@2x.png" alt="">
        <span>创建新门店 第2步（共3步）:  添加设备</span>
      </div>
      <div class="addDevice">
        <div class="input-wrapper">
          <input type="text" placeholder="在此输入设备名称或型号">
        </div>
        <div class="btn-add">
          <img src="../assets/images/icon_add_18x18@2x.png" alt="">
        </div>
      </div>
      <store-device></store-device>
      <div class="btn-wrapper clearfix">
        <div class="btn btn-delete">取消</div>
        <div class="btn btn-prev" @click="handlePrev">上一步</div>
        <div class="btn btn-next" @click="handleNext">下一步</div>
      </div>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import StoreDevice from '@/components/storeCreate/StoreDevice'
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
        ]
      }
    },
    components: {
      Breadcrumb,
      StoreDevice
    },
    methods: {
      handlePrev () {
        this.$router.push('/storeCreateStepOne')
      },
      handleNext () {
        this.$router.push('/storeCreateStepThree')
      }
    }
  }
</script>
<style lang="scss">
  .storeCreateStepOne {
    .stepOne {
      height: auto;
      min-height: 670px;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      padding: 20px;
      margin-top: 20px;

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

      .addDevice {
        width: 320px;
        height: 36px;
        margin: 20px 0;
        border: 1px solid #D0D0D0;

        .input-wrapper {
          padding: 8px 10px;
          width: 284px;
          box-sizing: border-box;
          float: left;

          input {
            width: 100%;
            height: 100%;
            font-size: 12px;
            border: 0;
            outline: none;
          }
        }

        .btn-add {
          width: 36px;
          height: 36px;
          float: right;
          background: #aab3c1;
          text-align: center;

          img {
            width: 18px;
            height: 18px;
            margin-top: 9px;
          }
        }
      }

      .btn-wrapper {
        margin-top: 30px;
        margin-left: 120px;
        width: auto;
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

        .btn-prev {
          background: #fff;
          border: 1px solid #A8B3C3;
          font-size: 12px;
          color: #A3B3BF;
          letter-spacing: -0.5px;
          margin-right: 10px;
        }

        .btn-next {
          background: #A8B3C3;
          border: 1px solid #A8B3C3;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }
      }
    }
  }
</style>
