<template>
  <div class="store-list">
    <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column prop="name" label="门店名称" min-width="100">
      </el-table-column>
      <el-table-column prop="frequency" label="点检频率" min-width="100">
      </el-table-column>
      <el-table-column prop="type" label="点检类型" min-width="100">
      </el-table-column>
      <el-table-column prop="initialDate" label="初次点检时间" min-width="120">
      </el-table-column>
      <el-table-column prop="person" label="点检人员"  min-width="100">
      </el-table-column>
      <el-table-column prop="remark" label="备注"  min-width="120">
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
        name: '制冰机',
        frequency: '每周',
        type: '火警系统',
        initialDate: '2014年10月1日',
        person: '范坚强',
        remark: '无'
      },
      {
        num: 2,
        name: '制冰机',
        frequency: '每周',
        type: '火警系统',
        initialDate: '2014年10月1日',
        person: '范坚强',
        remark: '无'
      },
      {
        num: 3,
        name: '制冰机',
        frequency: '每周',
        type: '火警系统',
        initialDate: '2014年10月1日',
        person: '范坚强',
        remark: '无'
      },
      {
        num: 4,
        name: '制冰机',
        frequency: '每周',
        type: '火警系统',
        initialDate: '2014年10月1日',
        person: '范坚强',
        remark: '无'
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
            cursor: pointer;
          }

          .delete {
            font-size: 12px;
            color: #df5b4e;
            letter-spacing: 0;
            line-height: 18px;
            text-decoration: underline;
            cursor: pointer;
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
