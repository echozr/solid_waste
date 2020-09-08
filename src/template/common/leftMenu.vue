<template>
  <div  class="sidebar" >
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
        <i v-if="!collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="sideTitle" >
      <span class="iconfont" v-html="actvieText.icon"></span>
      <strong>{{actvieText.title}}</strong>
    </div>
    <el-menu class="sidebar-el-menu"
            :default-active="onActive"
            text-color="#4e5568"
            active-text-color="#ffffff"
            unique-opened
            @select="changeleftMenu"
            router>
      <template v-for="item in menus[onRoutes]">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index"  >
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index"><i class="el-icon-caret-right"></i>{{ threeItem.title }}</el-menu-item>
                </el-submenu>
                <el-menu-item  v-else  :index="subItem.index"  :key="subItem.index"><i class="el-icon-caret-right"></i>{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
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
    },
    actvieText: {
      type: Object,
      default () {
        return {
          icon: '',
          title: ''
        }
      }
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
<style lang="less" >
.sidebar {
    display: block;
    position: absolute;
    left: 3vw;
    top: 4vw;
    bottom: 0;
    background-color: #ffffff;
    overflow-y: scroll;
    box-shadow: 0vw 0.15vw 0.88vw 0vw rgba(34, 24, 21, 0.16);
      &::-webkit-scrollbar{
        width: 0;
      }
    .el-menu-item{
      height: 2.2vw;
      line-height: 2.2vw;
      text-align: center;
      font-size: 0.8vw;
      span{
        font-size: 0.8vw;
      }
      &.is-active{
        background: #323641;
      }
    }
    .el-submenu{
      line-height: 2.2vw;
      .el-menu-item{
        padding: 0 2vw 0 0;
        padding-left: 0!important;
        min-width: 0;
        .el-icon-caret-right{
          margin-right: 1vw;
          color:#ffffff;
        }
      }
      &.is-active{
          .el-submenu__title{
          background: #323641;
          i{
            color: #ffffff;
            font-size: 0.8vw;
          }
          span{
            color:#ffffff
          }
        }
        .is-active{
          background: #f7f7f7;
          color: #05a081!important;
          .el-icon-caret-right{
            color: #05a081!important;
            margin-top: -2px;
          }
        }
      }
      .el-submenu__title{
        height: 2.2vw!important;
        line-height: 2vw!important;
        text-align: center;
        span{
          font-size: 0.8vw;
        }
        i{
          color:#323641;
          font-size: 0.9vw;
        }
      }
    }
    .sideTitle{
      width: 100%;
      height: 4vw;
      line-height: 5vw;
      text-align: center;
      font-weight: 0.9vw;
      color: #05a081;
      margin-top: 1vw;
      .iconfont{
        font-size: 1.4vw;
        margin-right: 1vw;
      }
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
    width:10vw;
    }
    ul{
      height: 100%;
    }
}
</style>
