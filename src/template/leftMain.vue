<template>
  <div class="wrapper">
    <zr-header :headerActive="headerActive" />
    <zr-leftMenu :collapse="collapse" @clooapseControl="clooapseControl" @changeLeftMenu="changeLeft" />
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
export default {
  data () {
    return {
      collapse: false,
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
    zrLeftMenu
  }
}
</script>
<style lang="less" scoped>
.content-collapse {
  left: 65px;
}
</style>
