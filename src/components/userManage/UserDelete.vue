<template>
  <div class="popUp">
    <div class="delete">
      <div class="popup-head clearfix">
        <span class="title">
          删除
        </span>
        <span class="close" @click="close">x</span>
      </div>
      <div class="delete-content">
        <p>确定要删除吗？</p>
      </div>
      <div class="btn-wrapper clearfix">
        <div class="btn btn-delete" @click="handleCancel">取消</div>
        <div class="btn btn-save">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      close () {
        this.$emit('close', false)
      },
      handleCancel () {
        this.close()
      }
    }
  }
</script>
<style lang="scss">
  .popUp {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(53, 64, 77, 0.8);
    top: 0;
    left: 0;
    z-index: 9999;

    .delete {
      width: 320px;
      height: 200px;
      padding: 20px;
      box-sizing: border-box;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -160px;

      .popup-head {
        width: 100%;
        height: 18px;

        .title {
          float: left;
          font-size: 18px;
          color: #707070;
          letter-spacing: -0.75px;
        }

        .close {
          float: right;
          cursor: pointer;
          font-size: 18px;
        }
      }

      .delete-content {
        margin: 40px auto 0;
        height: 36px;
        line-height: 36px;
        width: 240px;
        text-align: center;
        
        p {
          font-size: 14px;
          color: #707070;
          letter-spacing: -0.58px;
        }
      }

      .btn-wrapper {
        margin: 30px auto 0;
        width: 210px;
        height: 28px;

        .btn {
          width: 95px;
          height: 28px;
          box-sizing: border-box;
          text-align: center;
          line-height: 28px;
          float: left;
          cursor: pointer;
        }

        .btn-delete {
          background: #fff;
          border: 1px solid #A8B3C3;
          font-size: 12px;
          color: #A3B3BF;
          letter-spacing: -0.5px;
          margin-right: 10px;
        }

        .btn-save {
          background: #A8B3C3;
          border: 1px solid #A8B3C3;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }
      }
    }
  }
</style>
