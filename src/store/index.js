import Vue from 'vue'
import Vuex from 'vuex'

// 引入模块

import config from './Module/config'
import user from './Module/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    user
  }
})
