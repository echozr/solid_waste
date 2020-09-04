<template>
  <div  class="sidebar">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
        <i v-if="!collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
    </div>
    <el-menu class="sidebar-el-menu"
            :default-active="onActive"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            @select="changeleftMenu"
            router>
      <template v-for="item in menus[onRoutes]">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index"  >
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
                </el-submenu>
                <el-menu-item  v-else  :index="subItem.index"  :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      headerPath: ''
    }
  },
  created () {
    // if (document.body.clientWidth < 1280) {
    //   this.collapseChage()
    // }
  },
  computed: {
    ...mapState({
      menus: state => state.config.leftMenu
    }),
    onRoutes () {
      const path = this.$route.path.replace('/', '')
      return this.$tools.getPath(this.menus, path)
    },
    onActive () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    // 展开收起左侧菜单
    collapseChage () {
      const data = !this.collapse
      this.$emit('clooapseControl', data)
    },
    changeleftMenu (index) {
      this.$emit('changeLeftMenu', this.onRoutes)
    }
  }

}
</script>
<style lang="less" scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 3vw;
    top: 4vw;
    bottom: 0;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 0;
    }
    .collapse-btn{
      position: absolute;
      top: 0;
      right: 0px;
      z-index: 10019;
      background: #ffffff;
      padding: 5px;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
    }
    ul{
      height: 100%;
    }
}
</style>
