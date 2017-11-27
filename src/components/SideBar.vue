<template>
  <div class="sideBar">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#35404D" text-color="#fff"  active-text-color="#fff">
      <el-menu-item index="1">
        <template slot="title">
          <img src="../assets/images/icon_home_24x24.png" alt="">
          <span>区域首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <img src="../assets/images/icon_store_list_24x24.png" alt="">
          <span>门店列表</span>
        </template>
        <el-menu-item-group>
          <template slot="title">肯德基洛川路店</template>
          <el-menu-item index="2-1"> - 门店能耗详情</el-menu-item>
          <el-menu-item index="2-2"> - 门店运维详情</el-menu-item>
          <el-menu-item index="2-3"> - 门店设备详情</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="肯德基桂林路店">
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <img src="../assets/images/icon_service_management_24x24.png" alt="">
        <span slot="title">服务管理</span>
      </el-menu-item>
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
        console.log(key, keyPath)
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
