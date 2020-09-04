<template>
  <div class="intriduce-warp" :style="{backgroundImage:'url('+imgurl+')'}">
      <img class="title"  src="../../assets/img/ptText.png"/>
      <div class="intriduce-text">
        {{content}}
      </div>
      <slot name="more"></slot>
  </div>
</template>
<script>
export default {
  name: 'intriduce',
  props: {
    imgurl: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: '陕西省固体废物信息管理系统平台简介'
    }
  }
}
</script>
<style lang="less" scope>
.intriduce-warp{
    width: 100vw;
    height:20vw;
    background-repeat: no-repeat;
    position: relative;
    background-color: #242932;
    background-position-x: right;
    background-position-y: center;
  .title{
    position: absolute;
    top: 3vw;
    left: 8.5vw;
  }
  .intriduce-text{
    width:45vw;
    max-height: 3.5vw;
    overflow: hidden;
    color: #ffffff;
    font-size: 0.9vw;
    position: absolute;
    top: 7vw;
    left: 8.5vw;
    text-indent: 2em;
    line-height: 1.75vw;
  }
  .moreBtn{
    width: 8vw;
    height:2vw;
    background-color: #05a081;
    text-align: center;
    line-height: 2vw;
    color: #ffffff;
    position: absolute;
    font-size: 0.9vw;
    top: 11.5vw;
    left: 8.5vw;
  }
  .crumbs {
    margin: 10px 0;
    position: absolute;
    top: 14.5vw;
    left: 8.5vw;
  }
}
</style>
