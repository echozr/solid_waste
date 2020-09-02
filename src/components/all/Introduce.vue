<template>
  <div class="intriduce-warp" :style="{backgroundImage:imgurl}">
      <img class="title"  src="../../assets/img/ptText.png"/>
      <div class="intriduce-text">
        陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西省固体废物信陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理...
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
      default: '../../assets/images/adminbg1.png'
    }
  }
}
</script>
<style lang="less" scope>
.intriduce-warp{
  width: 100%;
  height: 350px;
  background-image: url('../../assets/images/adminbg1.png');
  background-size: 100% 350px;
  background-repeat: no-repeat;
  position: relative;
  .title{
    position: absolute;
    top: 50px;
    left: 115px;
  }
  .intriduce-text{
    height: 50px;
    width: 600px;
    color: #ffffff;
    font-size: 14px;
    position: absolute;
    top: 120px;
    left: 115px;
  }
  .moreBtn{
    width: 130px;
    height: 36px;
    background-color: #05a081;
    TEXT-ALIGN: CENTER;
    LINE-HEIGHT: 36px;
    color: #ffffff;
    position: absolute;
    top: 200px;
    left: 113px;
  }
  .crumbs {
    margin: 10px 0;
    position: absolute;
    top: 263px;
    left: 113px;
  }
}
</style>
