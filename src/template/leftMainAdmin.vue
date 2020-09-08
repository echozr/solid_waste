<template>
  <div class="wrapper">
    <zr-header  />
    <zr-leftHead :headerActive="onRoutes" @changeTitle="changeTitle" />
    <zr-leftMenu  :collapse="collapse"   :actvieText="activeLefeHead"  @clooapseControl="clooapseControl" @changeLeftMenu="changeLeft" v-if="onRoutes"/>
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
      activeLefeHead: {}
    }
  },
  watch: {
    '$route.path' (newVal, oldVal) {
      const path = newVal.replace('/', '')
      const pathParent = this.$tools.getPath(this.menus, path)
      this.activeLefeHead = this.leftHead.filter(v => v.index === pathParent)[0]
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
    this.activeLefeHead = this.leftHead.filter(v => v.index === this.onRoutes)[0]
  },
  methods: {
    clooapseControl (val) {
      this.collapse = val
    },
    changeLeft (val) {
      this.headerActive = val
    },
    changeTitle (val) {
      console.log(this.$route.path.replace('/', ''))
      // eslint-disable-next-line no-debugger
      debugger
      this.activeLefeHead = this.leftHead.filter(v => v.index === this.onRoutes)[0]
      console.log(this.activeLefeHead)
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
