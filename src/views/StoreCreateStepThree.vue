<template>
  <div class="storeCreateStepOne">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <div class="stepOne">
      <div class="stepOne_head">
        <img src="../assets/images/icon_add_store_36x36 copy 2@2x.png" alt="">
        <span>创建新门店 第3步（共3步）:  设置保养（点检）计划</span>
      </div>
      <div class="check-wrapper">
        <el-select v-model="storeSelected">
          <el-option v-for="(item, index) in storeList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="frequencySelected">
          <el-option v-for="(item, index) in frequencyList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="typeSelected">
          <el-option v-for="(item, index) in typeList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-date-picker
          v-model="initialDate"
          type="date"
          placeholder="初次点检时间"
        >
        </el-date-picker>
        <el-select v-model="personSelected">
          <el-option v-for="(item, index) in personList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="add-check">
          <img src="../assets/images/icon_add_12x12 copy 2@2x.png" alt="">
          <span>新点检计划</span>
        </div>
      </div>
      <check-list></check-list>
      <div class="btn-wrapper clearfix">
        <div class="btn btn-delete">取消</div>
        <div class="btn btn-prev" @click="handlePrev">上一步</div>
        <div class="btn btn-next" @click="handleCreate">创建</div>
      </div>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import CheckList from '@/components/storeCreate/CheckList'
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
        storeSelected: '肯德基桂林路店',
        storeList: [
          {
            label: '肯德基桂林路店1',
            value: '肯德基桂林路店1'
          },
          {
            label: '肯德基桂林路店2',
            value: '肯德基桂林路店3'
          }
        ],
        frequencySelected: '点检频率',
        frequencyList: [
          {
            label: '点检频率1',
            value: '点检频率1'
          },
          {
            label: '点检频率2',
            value: '点检频率2'
          }
        ],
        typeSelected: '点检类型',
        typeList: [
          {
            label: '点检类型1',
            value: '点检类型1'
          },
          {
            label: '点检类型2',
            value: '点检类型2'
          }
        ],
        initialDate: null,
        personSelected: '点检人员',
        personList: [
          {
            label: '点检人员1',
            value: '点检人员1'
          },
          {
            label: '点检人员2',
            value: '点检人员2'
          }
        ]
      }
    },
    components: {
      Breadcrumb,
      CheckList
    },
    methods: {
      handlePrev () {
        this.$router.push('/storeCreateStepTwo')
      },
      handleCreate () {
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

      .check-wrapper {
        height: 36px;

        .el-select {
          width: 160px;
          height: 36px;
          margin-right: 8px;

          .el-input__inner {
            height: 36px;
            border: 1px solid #D0D0D0;
            border-radius: 0;
          }
        }

        .el-date-editor {
          width: 160px;
          height: 36px;
          margin-right: 8px;

          .el-input__inner {
            height: 36px;
            border: 1px solid #D0D0D0;
            border-radius: 0;
          }
        }

        .add-check {
          width: 90px;
          height: 36px;
          background: #A8B3C3;
          text-align: center;
          line-height: 36px;
          box-sizing: border-box;
          display: inline-block;

          img {
            width: 9px;
            height: 9px;
            vertical-align: middle;
          }

          span {
            font-size: 12px;
            color: #FFFFFF;
            letter-spacing: -0.5px;
            vertical-align: middle;
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
