<template>
  <div class="area-view">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <div class="storeInfo">
      <device-chart :type="deviceAlarmType" :list="deviceAlarmList" :title="deviceAlarmTitle"></device-chart>
      <device-chart :type="deviceOfflineType" :list="deviceOfflineList" :title="deviceOfflineTitle"></device-chart>
      <area-info :infoType="infoType"></area-info>
    </div>
    <energy-overview :overviewType="energyType" :title="energyTitle" :overviewParams="energy" :chartType="energyChartType"></energy-overview>
    <maintenance-overview :overviewType="maintenanceType" :title="maintenanceTitle" :overviewParams="maintenance" :chartType="maintenanceChartType"></maintenance-overview>
    <div class="device-wrapper">
      <div class="map">
        <div class="map-head">
          <img src="../assets/images/icon_store_map_36x36.png" alt="">
          <span>区域门店地图</span>
        </div>
        <img src="../assets/images/map.png" class="pic_map" alt="">
      </div>
      <div class="store">
        <div class="store-head">
          <img src="../assets/images/icon_energy_consumption_36x36.png" alt="">
          <span>上周节能减排店铺 TOP 10</span>
        </div>
        <ul>
          <li v-for="(item, index) in storeList" :key="index">
            <span class="store-sort">NO.{{index}}</span>
            <span class="store-name">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="screenshot">
        <img src="../assets/images/img1.png" alt="">
        <div class="screenshot-bottom">
          <div class="screenshot-select">
            <el-select v-model="storeSelected" placeholder="请选择">
              <el-option
                v-for="(item, index) in storeOptions"
                :key="index"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="btn">切换</div>
        </div>
        
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
          }
        ],
        deviceAlarmTitle: '维修申请',
        deviceAlarmType: 0,
        deviceAlarmList: [
          {
            name: '常规维修申请',
            value: 14
          },
          {
            name: '较紧急维修申请',
            value: 6
          },
          {
            name: '紧急维修申请',
            value: 4
          }
        ],
        deviceOfflineTitle: '店铺离线',
        deviceOfflineType: 0,
        deviceOfflineList: [
          {
            name: '在线店铺',
            value: 2
          },
          {
            name: '不稳定店铺',
            value: 0
          },
          {
            name: '离线店铺',
            value: 0
          }
        ],
        infoType: 0,
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
        energyTitle: '区域能耗总览',
        energy: {
          item1Name: '今日全区域总耗电量',
          item1Num1: '15,123',
          item1Num2: '25,131',
          item2Name: '今日全区域总用水量',
          item2Num1: '1,631',
          item2Num2: ' 2,131',
          item3Name: '今日全区域能耗超标店铺',
          item3Num: '3'
        },
        energyChartType: 1,
        maintenanceType: 1,
        maintenanceTitle: '区域运维总览',
        maintenance: {
          item1Name: '今日全区域已维修店铺',
          item1Num1: '8',
          item1Num2: '17',
          item2Name: '今日本店总维修费用',
          item2Num1: '21,631',
          item2Num2: '32,131',
          item3Name: '今日待处理运维申请',
          item3Num: '12'
        },
        maintenanceChartType: 1,
        storeList: [
          '小肥羊南京西路店',
          '必胜客浦东大道店',
          '肯德基民生路店',
          '小肥羊南京西路店',
          '必胜客浦东大道店',
          '肯德基民生路店',
          '小肥羊南京西路店',
          '必胜客浦东大道店',
          '肯德基民生路店',
          '小肥羊南京西路店'
        ],
        storeOptions: [
          {
            value: '选项1',
            label: '肯德基民生路店'
          },
          {
            value: '选项2',
            label: '小肥羊南京西路店'
          },
          {
            value: '选项3',
            label: '必胜客浦东大道店'
          }
        ],
        storeSelected: ''
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
  .area-view {
    .storeInfo {
      display: flex;
      margin-top: 24px;
    }

    .device-wrapper {
      display: flex;
      margin-top: 20px;

      .map {
        flex: 1;
        height: 330px;
        margin-right: 10px;
        background: #FFFFFF;
        border: 1px solid #D0D0D0;
        box-sizing: border-box;

        .map-head {
          margin: 20px;
          height: 36px;
          display: flex;
          align-items: center;

          span {
            font-family: SourceHanSansCN-Bold;
            font-size: 18px;
            color: #707070;
            letter-spacing: -0.75px;
            display: inline-block;
            margin-left: 10px;
          }
        }

        .pic_map {
          width: 100%;
          height: 254px;
          display: inline-block;
        }
      }

      .store {
        flex: 1;
        height: 330px;
        padding: 20px;
        background: #FFFFFF;
        border: 1px solid #D0D0D0;
        box-sizing: border-box;

        .store-head {
          height: 36px;
          display: flex;
          align-items: center;

          span {
            font-family: SourceHanSansCN-Bold;
            font-size: 18px;
            color: #707070;
            letter-spacing: -0.75px;
            display: inline-block;
            margin-left: 10px;
          }
        }

        ul {
          margin-left: 10px;

          li {
            list-style: none;

            .store-sort {
              font-family: SourceHanSansCN-Light;
              font-size: 14px;
              color: #707070;
              letter-spacing: -0.58px;
              line-height: 24px;
            }

            .store-name {
              font-family: SourceHanSansCN-Light;
              font-size: 14px;
              color: #707070;
              letter-spacing: -0.58px;
              line-height: 24px;
            }
          }
        }
      }

      .screenshot {
        flex: 1;
        height: 330px;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #D0D0D0;
        box-sizing: border-box;
        margin-left: 10px;

        img {
          width: 100%;
          height: 270px;
        }

        .screenshot-bottom {
          display: flex;
          justify-content: space-between;

          .el-select {
            width: 120px;
            height: 24px;
            border: 1px solid #D0D0D0;

            .el-input__inner {
              height: 24px;
              border: 0;
              outline: 0;
            }
          }

          .btn {
            width: 60px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            background: #A8B3C3;
            font-family: SourceHanSansCN-Normal;
            font-size: 12px;
            color: #FFFFFF;
            letter-spacing: -0.5px;
          }
        }
      }
    }
  }
</style>
