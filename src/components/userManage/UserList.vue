<template>
  <div class="store-list">
    <!-- <table class="table" cellpadding="0" cellspacing="0">
      <tr class="list-head">
        <th>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        </th>
        <th>序号</th>
        <th>登录名</th>
        <th>用户名</th>
        <th>用户角色</th>
        <th>电子邮箱</th>
        <th>状态</th>
        <th>最近登录</th>
        <th>最近登录IP</th>
        <th>操作</th>
      </tr>
      <tr  v-for="(item, index) in list" :key="index">
        <td class="num">{{item.num}}</td>
        <td class="loginName">{{item.loginName}}</td>
        <td class="userName">{{item.userName}}</td>
        <td class="role">{{item.role}}</td>
        <td class="email">{{item.email}}</td>
        <td class="state">{{item.state}}</td>
        <td class="recentLogin">{{item.recentLogin}}</td>
        <td class="ip">{{item.ip}}</td>
        <td>
          <span>密码重置</span>
          <i>|</i>
          <span>查看</span>
          <i>|</i>
          <span>修改</span>
          <i>|</i>
          <span>删除</span>
        </td>
      </tr>
    </table> -->
    <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column prop="loginName" label="登录名" min-width="60">
      </el-table-column>
      <el-table-column prop="userName" label="用户名" min-width="60">
      </el-table-column>
      <el-table-column prop="role" label="用户角色" min-width="80">
      </el-table-column>
      <el-table-column prop="email" label="电子邮箱" min-width="120">
      </el-table-column>
      <el-table-column prop="state" label="状态"  min-width="60">
      </el-table-column>
      <el-table-column prop="recentLogin" label="最近登录"  min-width="160">
      </el-table-column>
      <el-table-column prop="ip" label="最近登录IP"  min-width="100">
      </el-table-column>
      <el-table-column label="操作" class="operate" min-width="200">
        <template slot-scope="scope">
          <span class="resetPassword" @click="resetPassword">密码重置</span>
          <i>|</i>
          <span class="view" @click="handleView">查看</span>
          <i>|</i>
          <span class="edit" @click="handleEdit">修改</span>
          <i>|</i>
          <span class="delete" @click="handleDelete">删除</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="list-operate clearfix">
      <div class="btn-wrapper">
        <div class="btn btn-add">
          <img src="../../assets/images/icon_add_12x12 copy 2@2x.png" alt="">
          <span>新 增</span>
        </div>
        <div class="btn btn-delete">
          <img src="../../assets/images/icon_del_9x12 copy 2@2x.png" alt="">
          <span>删 除</span>
        </div>
      </div>
      <div class="page-wrapper">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </div>
    <password-reset v-show="passwordResetVisiable" @close="closePasswordReset"></password-reset>
    <user-view v-show="viewVisiable" @close="closeView"></user-view>
    <user-edit v-show="editVisiable" @close="closeEdit"></user-edit>
    <user-delete v-show="deleteVisiable" @close="closeDelete"></user-delete>
  </div>
</template>
<script>
import PasswordReset from '@/components/userManage/PasswordReset'
import UserView from '@/components/userManage/UserView'
import UserEdit from '@/components/userManage/UserEdit'
import UserDelete from '@/components/userManage/UserDelete'
export default {
  data () {
    return {
      list: [{
        num: 1,
        loginName: 'asf',
        userName: 'asf',
        role: '人事经理',
        email: 'asf@163.com',
        state: '有效',
        recentLogin: '2017/10/11 17:40:31',
        ip: '192.168.1.1'
      },
      {
        num: 2,
        loginName: 'asf',
        userName: 'asf',
        role: '人事经理',
        email: 'asf@163.com',
        state: '有效',
        recentLogin: '2017/10/11 17:40:31',
        ip: '192.168.1.1'
      },
      {
        num: 3,
        loginName: 'asf',
        userName: 'asf',
        role: '人事经理',
        email: 'asf@163.com',
        state: '有效',
        recentLogin: '2017/10/11 17:40:31',
        ip: '192.168.1.1'
      },
      {
        num: 4,
        loginName: 'asf',
        userName: 'asf',
        role: '人事经理',
        email: 'asf@163.com',
        state: '有效',
        recentLogin: '2017/10/11 17:40:31',
        ip: '192.168.1.1'
      }
      ],
      multipleSelection: [],
      passwordResetVisiable: false,
      viewVisiable: false,
      editVisiable: false,
      deleteVisiable: false
    }
  },
  components: {
    PasswordReset,
    UserView,
    UserEdit,
    UserDelete
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    resetPassword () {
      this.passwordResetVisiable = true
    },
    closePasswordReset (val) {
      this.passwordResetVisiable = val
    },
    handleView () {
      this.viewVisiable = true
    },
    closeView (val) {
      this.viewVisiable = val
    },
    handleEdit () {
      this.editVisiable = true
    },
    closeEdit (val) {
      this.editVisiable = val
    },
    handleDelete () {
      this.deleteVisiable = true
    },
    closeDelete (val) {
      this.deleteVisiable = val
    }
  }
}
</script>
<style lang="scss">
  .store-list {
    margin-top: 20px;

    .el-table {
      border: 1px solid #D0D0D0;
      border-bottom: 0;

      thead {
        font-size: 12px;
        color: #FFFFFF;

        tr {
          background: #698CA7;

          th {
            padding: 8px 0;
          }
        }
      }

      tbody {
        tr {
          &:nth-child(odd) {
            background: #FFFFFF;
          }

          &:nth-child(even) {
            background: #FAFBFD;
          }

          td {
            padding: 8px 0;
          }

          .el-table_1_column_10  {
            span {
              color: #35404D;
              cursor: pointer;
            }

            i {
              font-size: 12px;
              color: #4c545e;
              letter-spacing: 0;
              line-height: 18px;
              font-style: normal;
            }

            .resetPassword, .view, .edit {
              font-size: 12px;
              color: #839ab1;
              letter-spacing: 0;
              line-height: 18px;
              text-decoration: underline;
            }

            .delete {
              font-size: 12px;
              color: #df5b4e;
              letter-spacing: 0;
              line-height: 18px;
              text-decoration: underline;
            }
          }
        }
      }

      .operate {
        width: 200px;
      }
    }

    .list-operate {
      margin-top: 10px;
      height: 26px;

      .btn-wrapper {
        float: left;

        .btn {
          padding: 0 12px;
          display: inline-block;
          margin-right: 10px;
          height: 26px;
          box-sizing: border-box;
          font-size: 12px;

          span {
            height: 26px;
            font-size: 12px;
            line-height: 26px;
            color: #FFFFFF;
            letter-spacing: -0.5px;
            margin-left: 5px;
            display: inline-block;
            vertical-align: middle;
          }
        }

        .btn-add {
          background: #A8B3C3;

          img {
            width: 9px;
            height: 9px;
            vertical-align: middle;
          }
        }

        .btn-delete {
          background: #EE3124;

          img {
            width: 9px;
            height: 12px;
            vertical-align: middle;
          }
        }
      }

      .page-wrapper {
        float: right;
        text-align: right;
        height: 22px;
      }
    }
  }
</style>
