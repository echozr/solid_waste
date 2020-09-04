<template>
  <div class="wrapper">
    <zr-header :headerActive="headerActive" />
    <zr-leftHead />
    <zr-leftMenu  :collapse="collapse" @clooapseControl="clooapseControl" @changeLeftMenu="changeLeft" />
    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
          <transition name="move" mode="out-in">
              <keep-alive>
                  <router-view></router-view>
              </keep-alive>
          </transition>
          <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>
<script>
import zrHeader from './common/header'
import zrLeftMenu from './common/leftMenu'
import zrLeftHead from './common/leftHead'
export default {
  data () {
    return {
      collapse: true,
      headerActive: ''
    }
  },
  methods: {
    clooapseControl (val) {
      this.collapse = val
    },
    changeLeft (val) {
      this.headerActive = val
    }
  },
  components: {
    zrHeader,
    zrLeftMenu,
    zrLeftHead
  }
}
</script>
<style lang="less" scoped>
.content-collapse {
  left: 13vw;
}
</style>
