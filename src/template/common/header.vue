<template>
  <div class="publicHeader">
    <img class="logo" src="http://lvchuang.f3322.net:7018/hnsxyd/page/img/logo.png" />
    <h2 class="title">绿创后台信息管理平台</h2>
    <div class="rightHeader">
      <el-menu :default-active="onRoutes" router class="navbar-nav"  mode="horizontal" background-color="#323641"  text-color="#fff" active-text-color="#ffd04b">
        <template v-for="item in menus" >
          <el-menu-item :index="item.index" :key="item.index">
              <span :class="item.icon" />
              <div slot="title">{{item.title}}</div>
          </el-menu-item>
        </template>
      </el-menu>
        <!-- 用户头像 -->
      <div class="user-avator">
        <img src="../../assets/img/avater.jpeg" />
      </div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
  data () {
    return {
      name: 'admin'
    }
  },
  computed: {
    ...mapState({
      menus: state => state.config.topMenu,
      leftMenus: state => state.config.leftMenu
    }),
    username () {
      const username = localStorage.getItem('userInfo')
      return username || this.name
    },
    onRoutes () {
      const path = this.$route.path.replace('/', '')
      return this.$tools.getPath(this.leftMenus, path) || path
    }
  },
  methods: {
    // 点击下拉框切换
    handleCommand (command) {
      if (command === 'loginout') {
        localStorage.clear()
        this.$router.push('/login')
      } else if (command === 'changePassword') {
        this.$router.push('/changePassword')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.publicHeader {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  background-color: #323641;
  color: #fff;
  .logo {
    float: left;
    line-height: 70px;
    margin: 8px 15px 8px 35px;
  }
  .title {
    float: left;
    width: 250px;
    font-size: 20px;
    line-height: 70px;
  }
  .rightHeader {
    float: right;
    padding-right: 50px;
    .navbar-nav {
      height: 70px;
      position: absolute;
      top: 0;
      right: 170px;
      .el-menu-item {
        position: relative;
        height: 100%;
        float: left;
        padding: 0px 10px;
        text-align: center;
        line-height: 40px;
        border-bottom: none;
        min-width: 80px;
        border-left: 1px solid #545454;
        color:#ffffff;
        span {
          position: absolute;
          top: 13px;
          left: 50%;
          margin-left: -11px;
          font-size: 22px;
        }
        div {
          width: 100%;
          text-align:center;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
    .user-avator {
      margin-left: 20px;
      position: absolute;
      top: 14px;
      right: 105px;
      img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .user-name {
      position: absolute;
      top: 24px;
      right: 30px;
      .el-dropdown-link {
        color: #fff;
        cursor: pointer;
      }
      .el-dropdown-menu__item {
        text-align: center;
      }
    }
  }
}
</style>
