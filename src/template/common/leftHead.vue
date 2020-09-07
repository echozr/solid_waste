<template>
  <div class="left-warp">
    <el-menu :default-active="headerActive || onRoutes" router class="navbar-nav"  mode="horizontal" background-color="#323641"  text-color="#fff" active-text-color="#ffd04b" >
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
    li{
      width: 3vw;
      height: 3vw;
      display: inline-block;
      color: #ffffff;
      position: relative;
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
</style>
