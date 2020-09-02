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
  {
    path: '/noLeftMain',
    name: 'noLeftMain',
    component: () => import(/* webpackChunkName: "NotLeftMain" */ '../template/noLeftMain.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
        meta: { title: '系统首页' }
      }
    ]
  },
  {
    path: '/leftMain',
    name: 'leftMain',
    component: () => import(/* webpackChunkName: "leftMain" */ '../template/leftMain.vue'),
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
      },
      {
        path: '/user',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/role',
        component: () => import(/* webpackChunkName: "role" */ '../views/Role.vue'),
        meta: { title: '角色管理' }
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
