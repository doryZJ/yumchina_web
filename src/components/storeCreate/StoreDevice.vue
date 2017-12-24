<template>
  <div class="store-list">
    <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column prop="name" label="设备名称" min-width="80">
      </el-table-column>
      <el-table-column prop="model" label="设备型号" min-width="80">
      </el-table-column>
      <el-table-column prop="no" label="设备编号" min-width="80">
      </el-table-column>
      <el-table-column prop="count" label="数量" min-width="60">
      </el-table-column>
      <el-table-column prop="subordinateSystem" label="所属系统"  min-width="80">
      </el-table-column>
      <el-table-column prop="manufacturer" label="制造商"  min-width="120">
      </el-table-column>
      <el-table-column prop="store" label="所属门店"  min-width="120">
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
        model: 'Manitowoc',
        no: 'Manitowoc',
        count: 1,
        subordinateSystem: '冷冻冷藏',
        manufacturer: '飞利浦',
        store: '肯德基桂林路店'
      },
      {
        num: 2,
        name: '制冰机',
        model: 'Manitowoc',
        no: 'Manitowoc',
        count: 1,
        subordinateSystem: '冷冻冷藏',
        manufacturer: '飞利浦',
        store: '肯德基桂林路店'
      },
      {
        num: 3,
        name: '制冰机',
        model: 'Manitowoc',
        no: 'Manitowoc',
        count: 1,
        subordinateSystem: '冷冻冷藏',
        manufacturer: '飞利浦',
        store: '肯德基桂林路店'
      },
      {
        num: 4,
        name: '制冰机',
        model: 'Manitowoc',
        no: 'Manitowoc',
        count: 1,
        subordinateSystem: '冷冻冷藏',
        manufacturer: '飞利浦',
        store: '肯德基桂林路店'
      },
      {
        num: 5,
        name: '制冰机',
        model: 'Manitowoc',
        no: 'Manitowoc',
        count: 1,
        subordinateSystem: '冷冻冷藏',
        manufacturer: '飞利浦',
        store: '肯德基桂林路店'
      },
      {
        num: 6,
        name: '制冰机',
        model: 'Manitowoc',
        no: 'Manitowoc',
        count: 1,
        subordinateSystem: '冷冻冷藏',
        manufacturer: '飞利浦',
        store: '肯德基桂林路店'
      },
      {
        num: 7,
        name: '制冰机',
        model: 'Manitowoc',
        no: 'Manitowoc',
        count: 1,
        subordinateSystem: '冷冻冷藏',
        manufacturer: '飞利浦',
        store: '肯德基桂林路店'
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
