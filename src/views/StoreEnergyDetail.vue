<template>
  <div class="StoreEnergyDetail">
    <div class="energy-head">
      <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
      <div class="energy-filter">
        <el-select v-model="energySelected">
          <el-option 
            v-for="(item, index) in energyOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="period">
          <span class="active">日</span>
          <span>周</span>
          <span>月</span>
        </div>
      </div>
    </div>
    <div class="energy-content">
      <energy-item v-for="i in 3"></energy-item>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import EnergyItem from '@/components/storeEnergy/EnergyItem'
  export default {
    data () {
      return {
        breadcrumbs: [
          {
            label: '上海地区'
          },
          {
            label: ' 肯德基洛川店'
          },
          {
            label: '门店能耗详情'
          }
        ],
        energyOptions: [
          {
            value: '选项1',
            label: '显示: 全部'
          },
          {
            value: '选项2',
            label: '显示: 部分'
          }
        ],
        energySelected: ''
      }
    },
    components: {
      Breadcrumb,
      EnergyItem
    }
  }
</script>
<style lang="scss">
  .StoreEnergyDetail {
    .energy-head {
      display: flex;
      justify-content: space-between;

      .energy-filter {
        display: flex;

        .el-select {
          background: #FFFFFF;
          border: 1px solid #707070;
          width: 120px;
          height: 24px;

          .el-input__inner {
            height: 24px;
            border: 0;
            outline: 0;
            font-family: SourceHanSansCN-Normal;
            font-size: 12px;
            color: #707070;
            letter-spacing: -0.5px;
          }
        }

        .period {
          margin-left: 20px;

          span {
            width: 24px;
            height: 24px;
            border: 1px solid #698CA7;
            line-height: 24px;
            text-align: center;
            display: inline-block;
            font-family: SourceHanSansCN-Medium;
            font-size: 12px;
            color: #698CA7;
            letter-spacing: -0.5px;
            
          }

          span:not(:last-child) {
            margin-right: 5px;
          }

          span.active {
            background: #698CA7;
            color: #FFFFFF;
          }
        }
      }
    }
  }
</style>
