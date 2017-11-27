<template>
  <div class="navBar">
    <p class="title">设备智能管理平台</p>
    <div class="userInfo">
      <span class="icon">
        <img src="../assets/images/icon_user_24x24.png" alt="">
        <i></i>
      </span>
      <span>admin</span>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="scss">
  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background: #FFFFFF;
    border-bottom: 1px solid #D0D0D0;

    .title {
      font-family: SourceHanSansCN-Bold;
      font-size: 18px;
      color: #707070;
      letter-spacing: 0.69px;
      flex: 1;
    }

    .userInfo {
      display: flex;
      height: 70px;
      width: 200px;
      border-left: 1px solid #D0D0D0;
      box-sizing: border-box;
      padding-left: 20px;
      align-items: center;

      .icon {
        width: 24px;
        height: 24px;
        position: relative;
        margin-right: 17px;

        i {
          width: 10px;
          height: 10px;
          display: inline-block;
          border-radius: 50%;
          background: rgb(126, 177, 72);
          position: absolute;
          bottom: -2px;
          right: -2px;
        }
      }

      
    }
  }
</style>

