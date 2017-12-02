<template>
  <div class="StoreDeviceDetail">
    <div class="energy-head">
      <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
      <div class="energy-filter">
        <el-select v-model="sortSelected" class="selectSort">
          <el-option 
            v-for="(item, index) in sortOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="showSelected">
          <el-option 
            v-for="(item, index) in showOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="deviceList">
      <device-item v-for="(item, index) in deviceList" :key="index" :info="item"></device-item>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import DeviceItem from '@/components/storeDevice/DeviceItem'
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
        sortOptions: [
          {
            value: '选项1',
            label: '排序: 类别1'
          },
          {
            value: '选项2',
            label: '排序: 类别2'
          }
        ],
        sortSelected: '',
        showOptions: [
          {
            value: '选项1',
            label: '显示: 全部'
          },
          {
            value: '选项2',
            label: '显示: 部分'
          }
        ],
        showSelected: '',
        deviceList: [
          {
            type: 0, // 0: 运行, 1: 待机, 2: 中, 3: 关闭, 4: 断
            name: '制冰机',
            model: 'Manitowoc',
            description: '冰块',
            label: '制冰量',
            number: 98,
            unit: '%',
            variety: 0, // 0: 上升, 1: 下降
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 0, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '工作台冷藏冰箱',
            model: 'WTC-CS-800',
            label: '温 度',
            number: 4.1,
            unit: '℃',
            variety: 1, // 0: 上升, 1: 下降
            settingNumber: '4.0',
            settingUnit: '℃',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 1, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            label: '温 度',
            number: '-11.8',
            unit: '℃',
            variety: 1, // 0: 上升, 1: 下降
            settingNumber: '-12.0',
            settingUnit: '℃',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 2, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            label: '温 度',
            number: '-11.8',
            unit: '℃',
            variety: 1, // 0: 上升, 1: 下降
            settingNumber: '-12.0',
            settingUnit: '℃',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 3, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            label: '温 度',
            number: '-11.8',
            unit: '℃',
            variety: 1, // 0: 上升, 1: 下降
            settingNumber: '-12.0',
            settingUnit: '℃',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 4, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '抽屉保温柜',
            model: 'HB3C',
            label: '温 度',
            number: '- -',
            unit: '℃',
            variety: 1, // 0: 上升, 1: 下降
            settingNumber: '- -',
            settingUnit: '℃',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 0, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '排烟（补风）',
            model: 'XXXX-XXX-XXX',
            label: '风 力',
            number: '强',
            settingNumber: '时间表控制',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 0, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '给水系统',
            model: 'XXXX-XXX-XXX',
            label: '水 压',
            number: '偏低',
            variety: 0, // 0: 上升, 1: 下降
            settingNumber: '自动控制',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 1, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '污水泵-1',
            model: 'XXXX-XXX-XXX',
            label: '污水池水位',
            number: '偏低',
            settingNumber: '自动控制',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 0 // 0: 不显示, 1: 显示
          },
          {
            type: 0, // 0: 运行, 1: 待机, 2: 中, 3: 关闭, 4: 断
            name: '制冰机',
            model: 'Manitowoc',
            description: '冰块',
            label: '制冰量',
            number: 98,
            unit: '%',
            variety: 0, // 0: 上升, 1: 下降
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 0, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '工作台冷藏冰箱',
            model: 'WTC-CS-800',
            label: '温 度',
            number: 4.1,
            unit: '℃',
            variety: 1, // 0: 上升, 1: 下降
            settingNumber: '4.0',
            settingUnit: '℃',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          },
          {
            type: 1, // 0: 运行, 1: 待机, 2: 中, 3: 关闭
            name: '冷冻冰箱',
            model: 'WTC-CS-800',
            label: '温 度',
            number: '-11.8',
            unit: '℃',
            variety: 1, // 0: 上升, 1: 下降
            settingNumber: '-12.0',
            settingUnit: '℃',
            btnMore: 1, // 0: 不显示, 1: 显示
            btnControl: 1 // 0: 不显示, 1: 显示
          }
        ]
      }
    },
    components: {
      Breadcrumb,
      DeviceItem
    }
  }
</script>
<style lang="scss">
  .StoreDeviceDetail {
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

        .selectSort {
          margin-right: 10px;
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

    .deviceList {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
    }
  }
</style>
