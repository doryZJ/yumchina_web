<template>
  <div class="home">
    <div class="home-left">
      <div class="home-logo">
        <img src="../assets/images/logo_honeywell_115x34@2x.png" alt="">
      </div>
      <side-bar></side-bar>
    </div>
    <div class="home-right">
      <nav-bar></nav-bar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import SideBar from '@/components/SideBar'
  import NavBar from '@/components/NavBar'
  export default {
    components: {
      SideBar,
      NavBar
    }
  }
</script>
<style lang="scss">
  .home {
    width: 100%;
    display: flex;

    .home-left {
      width: 240px;
      min-height: 100%;
      background: #35404D;

      .home-logo {
        padding: 11px 0 11px 16px;
        height: 48px;
        display: flex;
        align-items: center;
        background: #323D4A;

        img {
          margin-right: 15px;
          width: 115px;
          height: 34px;
          display: inline-block;
        }

        span {
          font-family: SourceHanSansCN-Bold;
          font-size: 18px;
          color: #F2F2F2;
          letter-spacing: 0.69px;
        }
      }
    }

    .home-right {
      flex: 1;

      .content {
        padding: 20px;
        background: #f4f8fb;
      }
    }
  }
</style>
