<template>
  <div class="loginWarp">
    <div class="login" :class="{'loading':isLogin}">
      <div>账号登录</div>
      <div class="inputWarp" >
        <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="form.account" clearable />
        <el-input prefix-icon="el-icon-key" placeholder="请输入密码" v-model="form.password" show-password />
      </div>
      <div class="buttonWarp">
        <el-button round type="success" plain @click="submit">登录</el-button>
        <div>忘记密码</div>
      </div>
    </div>
    <div class="authent" :class="{'loading':isLogin}">
      <img src="../assets/img/puff.svg" />
      <div>{{isMsg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isMsg: '验证中',
      isLogin: false,
      form: {
        account: 'admin',
        password: 'Aa123456',
        type: 102
      }
    }
  },
  methods: {
    async submit () {
      this.isLogin = true
      const { data } = await this.$axios.user.login(this.form)
      console.log(data)
      const { code, data: url } = data
      this.isMsg = '验证成功即将跳转'
      if (code === 200) {
        sessionStorage.setItem('token', url)
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/css/login.less");
</style>
