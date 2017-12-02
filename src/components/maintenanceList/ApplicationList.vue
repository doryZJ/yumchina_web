<template>
  <div class="ApplicationList">
    <div class="head">
      <div class="title">
        <img src="../../assets/images/icon_maintenance_36x36.png" alt="">
        <span>运维申请列表</span>
      </div>
      <div class="btn-add">
        + &nbsp 新建运维申请
      </div>
    </div>
    <div class="table">
      <div class="table-head">
        <div class="table-left">
          <span>申请时间</span>
          <span>申请类型</span>
          <span>申请描述</span>
        </div>
        <div class="table-right">
          <span>申请人</span>
          <span>审批状态</span>
          <span>审批人</span>
        </div>
      </div>
      <div  class="table-content">
        <div class="table-item" v-for="i in 10" :key="i">
          <div class="table-left">
          </div>
          <div class="table-right">
          </div>
        </div>
        <div class="page-wrapper">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="scss">
  .ApplicationList {
    margin-top: 20px;
    height: auto;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #D0D0D0;

    .head {
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        height: 36px;
        display: flex;
        align-items: center;
        
        img {
          width: 36px;
          height: 36px;
          margin-right: 10px;
        }

        span {
          font-family: SourceHanSansCN-Bold;
          font-size: 18px;
          color: #707070;
          letter-spacing: -0.75px;
        }
      }

      .btn-add {
        width: 120px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        border: 1px solid #A8B3C3;
        font-family: SourceHanSansCN-Normal;
        font-size: 12px;
        color: #A8B3C3;
        letter-spacing: -0.5px;
        cursor: pointer;
      }
    }

    .table {
      margin-top: 20px;

      .table-head {
        height: 37px;
        line-height: 37px;
        background: #698CA7;
        border: 1px solid #D0D0D0;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;

        span {
          font-family: SourceHanSansCN-Bold;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }

        .table-left {
          span {
            padding: 0 20px;
            margin-right: 20px;
          }
        }

        .table-right {
          span {
            padding: 0 20px;
            margin-right: 50px;
          }
        }
      }

      .table-content {
        .table-item {
          height: 37px;
          line-height: 37px;
          border: 1px solid #D0D0D0;
          border-top: 0;
          box-sizing: border-box;

          &:nth-child(even) {
            background: #FAFBFD;
          }

          &:nth-child(odd) {
            background: #FFFFFF;
          }
        }

        .page-wrapper {
          margin-top: 10px;
          text-align: right;
          height: 22px;
        }
      }
    }
  }
</style>
