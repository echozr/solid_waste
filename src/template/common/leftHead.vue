<template>
  <div class="left-warp">
    <el-menu :default-active="headerActive || onRoutes" router class="navbar-nav"  mode="horizontal" text-color="#fff" active-text-color="#ffffff">
        <template v-for="item in leftHead" >
          <el-menu-item :index="item.index" :key="item.index" :title="item.title">
              <span class="iconfont" v-html="item.icon"  />
          </el-menu-item>
        </template>
      </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    headerActive: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState({
      leftHead: state => state.config.topMenu
    }),
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>
<style lang="less" scoped>
.left-warp {
  width: 3vw;
  background: #242932;
  position: absolute;
  left: 0;
  top: 4vw;
  bottom: 0;
    ul{
      width: 100%;
      height: 100%;
      background: #242932;
      width: 3vw;
      li{
        width: 3vw;
        height: 3vw;
        display: inline-block;
        color: #ffffff;
        position: relative;
        border-bottom: none;
        &.el-menu-item{
          padding: 0;
        }
        &.is-active{
          border-bottom: none;
          background: #05a081;

        }
        .iconfont{
          font-size: 1.2vw;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -0.8vw 0 0 -0.8vw;
          width: 1.4vw;
          height: 1.4vw;
          line-height: 1.4vw;
          text-align: center;
        }
      }
    }
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: #05a081;
}
</style>
