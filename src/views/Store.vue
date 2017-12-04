<template>
  <div class="store-view">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <div class="storeInfo">
      <device-chart :type="deviceAlarmType" :list="deviceAlarmList" :title="deviceAlarmTitle"></device-chart>
      <device-chart :type="deviceOfflineType" :list="deviceOfflineList" :title="deviceOfflineTitle"></device-chart>
      <area-info :infoType="infoType"></area-info>
    </div>
    <energy-overview :overviewType="energyType" :title="energyTitle" :overviewParams="energy" :chartType="energyChartType"></energy-overview>
    <maintenance-overview :overviewType="maintenanceType" :title="maintenanceTitle" :overviewParams="maintenance" :chartType="maintenanceChartType"></maintenance-overview>
    <div class="device-wrapper">
      <device-overview></device-overview>
      <div class="screenshot">
        <img src="../assets/images/img1.png" alt="">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import DeviceChart from '@/components/store/DeviceChart'
  import AreaInfo from '@/components/store/AreaInfo'
  import EnergyOverview from '@/components/store/EnergyOverview'
  import MaintenanceOverview from '@/components/store/MaintenanceOverview'
  import DeviceOverview from '@/components/store/DeviceOverview'
  export default {
    data () {
      return {
        breadcrumbs: [
          {
            label: '上海地区'
          },
          {
            label: ' 肯德基洛川店'
          }
        ],
        deviceAlarmTitle: '设备告警',
        deviceAlarmType: 1,
        deviceAlarmList: [
          {
            name: '设备告警·低',
            value: 1
          },
          {
            name: '设备告警·中',
            value: 1
          },
          {
            name: '设备告警·高',
            value: 2
          }
        ],
        deviceOfflineTitle: '设备离线',
        deviceOfflineType: 0,
        deviceOfflineList: [
          {
            name: '在线设备',
            value: 32
          },
          {
            name: '不稳定设备',
            value: 2
          },
          {
            name: '离线设备',
            value: 1
          }
        ],
        infoType: 1,
        options: [
          {
            value: '选项1',
            label: 'cctv-01 厨房'
          },
          {
            value: '选项2',
            label: 'cctv-02 厨房'
          },
          {
            value: '选项3',
            label: 'cctv-03 厨房'
          }
        ],
        value: '',
        energyType: 0,
        energyTitle: '门店能耗总览',
        energy: {
          item1Name: '今日全店总耗电量',
          item1Num1: '95',
          item1Num2: '150',
          item2Name: '今日全店总用水量',
          item2Num1: '41',
          item2Num2: '70',
          item3Name: '今日全区域节能减排排名',
          item3Num: '53'
        },
        energyChartType: 0,
        maintenanceType: 1,
        maintenanceTitle: '门店运维总览',
        maintenance: {
          item1Name: '今日待处理设备告警',
          item1Num1: '4',
          item2Name: '今日本店总维修费用',
          item2Num1: '2000',
          item3Name: '今日全区域优秀运维排名',
          item3Num: '72'
        },
        maintenanceChartType: 0
      }
    },
    components: {
      Breadcrumb,
      DeviceChart,
      AreaInfo,
      EnergyOverview,
      MaintenanceOverview,
      DeviceOverview
    }
  }
</script>
<style lang="scss">
  .store-view {
    .storeInfo {
      display: flex;
      margin-top: 24px;
    }

    .device-wrapper {
      display: flex;
      margin-top: 20px;

      .screenshot {
        width: 380px;
        height: 330px;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #D0D0D0;
        box-sizing: border-box;
        margin-left: 20px;

        img {
          width: 360px;
          height: 270px;
        }

        .el-select {
          width: 150px;
          height: 24px;
          border: 1px solid #D0D0D0;

          .el-input__inner {
            height: 24px;
            border: 0;
            outline: 0;
          }
        }
      }
    }
  }
</style>
