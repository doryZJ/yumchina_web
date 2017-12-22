<template>
  <div class="userManagement">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <div class="list">
      <div class="head">
        <div class="title">
          <img src="../assets/images/icon_user_management_36x36 copy 2@2x.png" alt="">
          <span>用户管理</span>
        </div>
        <div class="search-wrapper">
          <el-select v-model="storeSelected">
            <el-option v-for="(item, index) in storeOptions" 
              :key="index"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
          <input type="text" class="search-input">
          <div class="btn-search">
            <img src="../assets/images/icon_search_18x18 copy 2.png" alt="">
          </div>
        </div>
      </div>
      <user-list></user-list>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@/components/Breadcrumb'
  import UserList from '@/components/userManage/UserList'
  export default {
    data () {
      return {
        breadcrumbs: [
          {
            label: '服务管理'
          },
          {
            label: '基础管理'
          },
          {
            label: '用户管理'
          }
        ],
        storeOptions: [
          {
            value: '选项1',
            label: '全部'
          },
          {
            value: '选项2',
            label: '部分'
          }
        ],
        storeSelected: ''
      }
    },
    components: {
      Breadcrumb,
      UserList
    }
  }
</script>
<style lang="scss">
  .userManagement {
    .list {
      margin-top: 20px;
      padding: 20px;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;

      .head {
        display: flex;
        height: 36px;
        justify-content: space-between;

        .title {
          height: 36px;
          display: flex;
          align-items: center;

          img {
            width: 36px;
            height: 36px;
            display: inline-block;
            margin-right: 10px;
          }

          span {
            font-family: SourceHanSansCN-Bold;
            font-size: 18px;
            color: #707070;
            letter-spacing: -0.75px;
          }
        }

        .search-wrapper {
          width: 320px;
          height: 36px;
          border: 1px solid #D0D0D0;
          position: relative;

          .el-select {
            width: 80px;

            .el-input__inner {
              height: 34px;
              border: 0px;
            }
          }

          .search-input {
            width: 180px;
            height: 24px;
            border: 0;
            outline: 0;
          }

          .btn-search {
            width: 36px;
            height: 36px;
            background: #aab2c1;
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
</style>
