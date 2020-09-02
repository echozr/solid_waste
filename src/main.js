import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import api from './api' // 导入api接口
import tools from './utils/tools'
import vFilter from './utils/vFilters' // 全局过滤方法

Vue.prototype.$axios = api // 将api挂载到vue的原型上
Vue.prototype.$tools = tools
Vue.use(ElementUI)
Vue.config.productionTip = false

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | vue-manage-system`
  const role = sessionStorage.getItem('token')
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    // role === 'admin' ? next() : next('/403')
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      })
    } else {
      next()
    }
  }
})

// 全局过滤器注册
Object.keys(vFilter).forEach(key => {
  Vue.filter(key, vFilter[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
