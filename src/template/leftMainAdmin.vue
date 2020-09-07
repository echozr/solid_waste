<template>
  <div class="wrapper">
    <zr-header  />
    <zr-leftHead :headerActive="onRoutes" />
    <zr-leftMenu  :collapse="collapse"   :title="activeLefeHead"  @clooapseControl="clooapseControl" @changeLeftMenu="changeLeft" v-if="onRoutes"/>
    <div class="content-box" :class="{'content-collapse':onRoutes!==undefined?true:false}">
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
import { mapState } from 'vuex'
export default {
  data () {
    return {
      collapse: true,
      headerActive: '',
      activeLefeHead: []
    }
  },
  computed: {
    ...mapState({
      menus: state => state.config.leftMenu,
      leftHead: state => state.config.topMenu
    }),
    onRoutes () {
      const path = this.$route.path.replace('/', '')
      return this.$tools.getPath(this.menus, path)
    }
  },
  mounted () {
    this.headerActive = this.onRoutes
    this.activeLefeHead = this.leftHead.filter(v => v.index === this.headerActive)
    console.log(this.activeLefeHead)
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
