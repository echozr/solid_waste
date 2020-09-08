<template>
  <div class="title-warp">
    <div class="leftIcon">
      <span class="iconfont" v-html="icon"></span>
    </div>
    <strong class="text">{{title}}</strong>
    <div class="right-warp">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: '&#xe602;'
    },
    title: {
      type: String,
      default: '危险废物总体情况统计'
    }
  }
}
</script>
<style lang="less" scoped>
.title-warp{
  height: 3vw;
  width: 100%;
  border-bottom: 1px solid #c0efe3;
  position: relative;
  margin-bottom: 10px;
  .leftIcon{
    width: 2vw;
    height: 2vw;
    background:#e0f2e9;
    text-align: center;
    line-height: 2vw;
    position: absolute;
    top: 0.5vw;
    left: 0;
    span{
      font-size: 1.5vw;
      color: #05a081;
    }
  }
  .text{
    position: absolute;
    top: 0.5vw;
    height: 2vw;
    line-height: 2vw;
    left: 2.5vw;
    color: #303030;
  }
  .right-warp{
    min-width: 8vw;
    height: 2vw;
    position: absolute;
    top: 0.5vw;
    right: 0vw;
  }

}
</style>
