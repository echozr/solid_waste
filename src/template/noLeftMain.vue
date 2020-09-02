<template>
  <div class="wrapper">
    <el-container>
      <zr-header />
      <div class="content-box-no-left" >
          <transition name="move" mode="out-in">
              <keep-alive>
                  <router-view></router-view>
              </keep-alive>
          </transition>
          <el-backtop target=".content-box-no-left"></el-backtop>
      </div>
    </el-container>
  </div>
</template>
<script>
import zrHeader from './common/header'
export default {
  components: {
    zrHeader
  }
}
</script>
<style lang="less" scoped>
html,body{
  width: 100%;
  height: 100%;
  background: pink;
}
</style>
