<template>
  <div class="store-list">
    <table class="table" cellpadding="0" cellspacing="0">
      <tr class="list-head">
        <th>序号</th>
        <th>门店名称</th>
        <th>在线状态</th>
        <th>门店地址</th>
        <th>门店电话</th>
        <th>电子邮箱</th>
        <th>负责人</th>
        <th>操作</th>
      </tr>
      <tr  v-for="(item, index) in list" :key="index">
        <td class="num">{{item.num}}</td>
        <td class="name">{{item.name}}</td>
        <td class="state">{{item.state}}</td>
        <td class="adress">{{item.adress}}</td>
        <td class="tel">{{item.tel}}</td>
        <td class="email">{{item.email}}</td>
        <td class="principal">{{item.principal}}</td>
        <td class="operate" @click="goStore">{{item.operate}}</td>
      </tr>
    </table>
    <div class="page-wrapper">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [{
        num: 1,
        name: '肯德基洛川店',
        state: '在线',
        adress: '上海市闸北区洛川东路221号(近平型关路)',
        tel: '021-56334891',
        email: 'asf@163.com',
        principal: '高大强',
        operate: '进入门店首页'
      },
      {
        num: 2,
        name: '肯德基洛川店',
        state: '在线',
        adress: '上海市闸北区洛川东路221号(近平型关路)',
        tel: '021-56334891',
        email: 'asf@163.com',
        principal: '高大强',
        operate: '进入门店首页'
      },
      {
        num: 3,
        name: '肯德基洛川店',
        state: '在线',
        adress: '上海市闸北区洛川东路221号(近平型关路)',
        tel: '021-56334891',
        email: 'asf@163.com',
        principal: '高大强',
        operate: '进入门店首页'
      },
      {
        num: 4
      },
      {
        num: 5
      },
      {
        num: 6
      }]
    }
  },
  methods: {
    goStore () {
      this.$router.push('/store')
    }
  }
}
</script>
<style lang="scss">
  .store-list {
    margin-top: 20px;

    .table {
      width: 100%;
      border: 1px solid #D0D0D0;

      tr {
        height: 36px;

        &:nth-child(odd) {
          background: #FFFFFF;
        }

        &:nth-child(even) {
          background: #FAFBFD;
        }

        &:first-child {
          background: #698CA7;
          border-bottom: 1px solid #D0D0D0;
        }
      }

      th {
        padding: 0 10px;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: -0.5px;
        line-height: 36px;
        text-align: left;
      }

      td {
        padding: 0 10px;
        font-size: 12px;
        color: #35404D;
        letter-spacing: -0.5px;
        box-sizing: border-box;
        line-height: 36px;
      }

      td.name {
        color: #698CA7;
        cursor: pointer;
        text-decoration: underline;
      }

      td.state {
        color: #6FB788;
      }

      td.operate {
        color: #698CA7;
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .page-wrapper {
      margin-top: 10px;
      text-align: right;
      height: 22px;
    }
  }
</style>
