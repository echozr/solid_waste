<template>
  <div class="publicHeader">
    <img class="logo" src="../../assets/img/logo.png" />
    <h2 class="title">陕西省固体废物信息管理系统</h2>
    <div class="rightHeader">
        <!-- 用户头像 -->
      <div class="user-avator">
        <img src="../../assets/img/avater.png" />
      </div>
      <div class="user-name">
          {{username}}
        </div>
      <ul class="header-menu">
        <template v-for="(item,index) in headList">
          <li :key="index" @click="handleCommand(item.attr)">{{item.name}}</li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    headerActive: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      name: 'admin（系统管理员）',
      headList: [
        {
          name: '账号管理',
          attr: 'changePassword'
        },
        {
          name: '帮助',
          attr: ''
        },
        {
          name: '退出系统',
          attr: 'loginout'
        }

      ]
    }
  },
  computed: {
    username () {
      const username = localStorage.getItem('userInfo')
      return username || this.name
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
  width: 100vw;
  height: 4vw;
  font-size: 1vw;
  background-color: #323641;
  color: #fff;
  .logo {
    float: left;
    width: 1.8vw;
    height: 3vw;
    position:absolute;
    top:0.5vw;
    left: 2.5vw;
  }
  .title {
    float: left;
    width: 22vw;
    font-size: 1.2vw;
    height: 2.4vw;
    line-height: 2.4vw;
    padding: 0 2.5vw;
    border-left: 1px solid #7e9081;
    position:absolute;
    top:0.8vw;
    left:6.5vw;
  }
  .rightHeader {
    float: right;
    padding-right: 2vw;
    .user-avator {
      margin-left: 1vw;
      position: absolute;
      top: 0.9vw;
      right:27vw;
      img {
        display: block;
        width: 2.2vw;
        height: 2.2vw;
        border-radius: 50%;
      }
    }
    .user-name {
      position: absolute;
      top: 1vw;
      right: 16vw;
      height: 2vw;
      line-height: 2vw;
      color: #fff;
      width: 10vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-family: MicrosoftYaHei;
      font-size: 0.9vw;
    }
    .header-menu{
      height: 1.6vw;
      position: absolute;
      top: 1.2vw;
      right: 1vw;
      li{
        float: left;
        font-size: 0.9vw;
        height: 1.6vw;
        padding: 0 15px;
        border-left: 1px solid #7e9081;
        line-height: 1.6vw;
        cursor: pointer;
      }
    }
  }
}
</style>
