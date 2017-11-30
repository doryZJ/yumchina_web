<template>
  <div class="breadcrumb">
    <span class="title">当前位置：</span>
    <span v-for="(item, index) in breadcrumbs" :key="index">
      {{item.label}}
      <i>></i>
    </span>
  </div>
</template>
<script>
  export default {
    props: {
      breadcrumbs: {
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>
<style lang="scss">
  .breadcrumb {
    span {
      font-family: SourceHanSansCN-Regular;
      font-size: 14px;
      color: #6A8EA5;
      letter-spacing: -0.25px;
      line-height: 18px;

      i {
        font-style: normal;
      }

      &:last-child {
        i {
          display: none;
        }
      }
    }


  }
</style>

