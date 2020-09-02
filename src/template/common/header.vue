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
  width: 100%;
  height: 70px;
  font-size: 22px;
  background-color: #323641;
  color: #fff;
  .logo {
    float: left;
    line-height: 70px;
    margin: 8px 35px 8px 35px;
  }
  .title {
    float: left;
    width: 270px;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    margin: 15px 0;
    padding: 0 35px;
    border-left: 1px solid #7e9081;
  }
  .rightHeader {
    float: right;
    padding-right: 50px;
    .user-avator {
      margin-left: 20px;
      position: absolute;
      top: 14px;
      right:400px;
      img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .user-name {
      position: absolute;
      top: 26px;
      right: 240px;
      height: 20px;
      color: #fff;
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      line-height: 20px;
    }
    .header-menu{
      height: 25px;
      position: absolute;
      top: 23px;
      right: 12px;
      li{
        float: left;
        font-size: 14px;
        height: 25px;
        padding: 0 15px;
        border-left: 1px solid #7e9081;
        line-height: 25px;
        cursor: pointer;
      }
    }
  }
}
</style>
