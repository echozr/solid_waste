import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  // 管理员无左侧路由
  {
    path: '/noLeftMainAdmin',
    name: 'noLeftMainAdmin',
    component: () => import(/* webpackChunkName: "NotLeftMain" */ '../template/noLeftMainAdmin.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Admin/Dashboard.vue'),
        meta: { title: '管理员首页' }
      }
    ]
  },
  // 企业无左侧路由
  {
    path: '/noLeftMainEnterprise',
    name: 'noLeftMainEnterprise',
    component: () => import(/* webpackChunkName: "NotLeftMain" */ '../template/noLeftMainEnterprise.vue'),
    children: [
      {
        path: '/enterpriseEntrance',
        component: () => import(/* webpackChunkName: "EnterpriseEntrance" */ '../views/Enterprise/EnterpriseEntrance.vue'),
        meta: { title: '企业入口' }
      }
    ]
  },
  // 管理员带左侧路由
  {
    path: '/leftMainAdmin',
    name: 'leftMainAdmin',
    component: () => import(/* webpackChunkName: "leftMain" */ '../template/leftMainAdmin.vue'),
    children: [
      {
        path: '/comprehensive',
        component: () => import(/* webpackChunkName: "comprehensive" */ '../views/Admin/Comprehensive.vue'),
        meta: { title: '综合展示' }
      },
      {
        path: '/books',
        component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue'),
        meta: { title: '书籍管理' }
      },
      {
        path: '/popular',
        component: () => import(/* webpackChunkName: "popular" */ '../views/Popular.vue'),
        meta: { title: '期刊管理' }
      }
    ]
  },
  // 企业带左侧路由
  {
    path: '/leftMainEnterprise',
    name: 'leftMainEnterprise',
    component: () => import(/* webpackChunkName: "leftMain" */ '../template/leftMainEnterprise.vue'),
    children: [
      {
        path: '/books',
        component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue'),
        meta: { title: '书籍管理' }
      },
      {
        path: '/popular',
        component: () => import(/* webpackChunkName: "popular" */ '../views/Popular.vue'),
        meta: { title: '期刊管理' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
