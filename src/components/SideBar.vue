<template>
  <div class="sideBar">
    <el-menu default-active="2" class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose" background-color="#35404D" text-color="#fff"  active-text-color="#fff">
      <el-submenu index="Area">
        <template slot="title">
          <img src="../assets/images/icon_home_24x24.png" alt="">
          <span>区域首页</span>
        </template>
        <el-menu-item index="AreaEnergyDetail"> - 区域能耗详情</el-menu-item>
        <el-menu-item index="AreaMaintenanceDetail"> - 区域运维详情</el-menu-item>
        <el-menu-item index="AreaDeviceDetail"> - 区域设备详情</el-menu-item>
      </el-submenu>
      <el-submenu index="StoreList">
        <template slot="title">
          <img src="../assets/images/icon_store_list_24x24.png" alt="">
          <span>门店列表</span>
        </template>
        <el-menu-item-group>
          <template slot="title">肯德基洛川路店</template>
          <el-menu-item index="StoreEnergyDetail"> - 门店能耗详情</el-menu-item>
          <el-menu-item index="StoreMaintenanceDetail"> - 门店运维详情</el-menu-item>
          <el-menu-item index="StoreDeviceDetail"> - 门店设备详情</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="肯德基桂林路店">
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="UserManagement">
        <template slot="title">
          <img src="../assets/images/icon_service_management_24x24.png" alt="">
          <span>服务管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">基础管理</template>
          <el-menu-item index="StoreEnergyDetail"> - 用户管理</el-menu-item>
          <el-menu-item index="StoreMaintenanceDetail"> - 组织管理</el-menu-item>
          <el-menu-item index="StoreDeviceDetail"> - 职务管理</el-menu-item>
          <el-menu-item index="StoreDeviceDetail"> - 菜单管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item index="StoreDeviceDetail"> 门店管理</el-menu-item>
        <el-menu-item index="StoreDeviceDetail"> 维保商管理</el-menu-item>
        <el-menu-item index="StoreDeviceDetail"> 维保工程师管理</el-menu-item>
        <el-menu-item index="StoreDeviceDetail"> 员工管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <img src="../assets/images/icon_system_management_24x24.png" alt="">
        <span slot="title">系统管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen (key, keyPath) {
        this.$router.push({'name': key})
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style lang="scss">
  .sideBar {
    background: #35404D;

    .el-menu {
      border-right: 0;

      li {
        
        img {
          margin-right: 6px;
        }

        span {
          font-size: 14px;
          opacity: .5;
        }

        .el-submenu__title {
          a {
            text-decoration: none;
            color: #fff;
            opacity: .5;
          }

          img {
            margin-right: 6px;
          }

          span {
            font-size: 14px;
            opacity: .5;
          }
        }
      }

      .el-menu-item {
        opacity: .5;
      }

      .el-menu-item:focus, .el-menu-item:hover {
        background-color: #64707F!important;
        opacity: 1;

        span {
          opacity: 1;
        }
      }

      .el-submenu__title:focus, .el-submenu__title:hover {
        background-color: #64707F!important;

        span {
          opacity: 1;
        }
      }
    }

    .el-menu-item, .el-submenu__title {
      height: 42px;
      line-height: 42px;
    }
  }
</style>
