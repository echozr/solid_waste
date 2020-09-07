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
      // 企业信息管理
      {
        path: '/generalIndustrialSource',
        component: () => import(/* webpackChunkName: "generalIndustrialSource" */ '../views/Admin/BusinessManagement/GeneralIndustrialSource.vue'),
        meta: { title: '一般工业园' }
      },
      {
        path: '/dangerWasteProduction',
        component: () => import(/* webpackChunkName: "dangerWasteProduction" */ '../views/Admin/BusinessManagement/DangerWasteProduction.vue'),
        meta: { title: '危废产生源' }
      },
      {
        path: '/medicalWasteSources',
        component: () => import(/* webpackChunkName: "medicalWasteSources" */ '../views/Admin/BusinessManagement/MedicalWasteSources.vue'),
        meta: { title: '医废产生源' }
      },
      {
        path: '/transportCompany',
        component: () => import(/* webpackChunkName: "transportCompany" */ '../views/Admin/BusinessManagement/TransportCompany.vue'),
        meta: { title: '运输企业' }
      },
      {
        path: '/operatingCompany',
        component: () => import(/* webpackChunkName: "operatingCompany" */ '../views/Admin/BusinessManagement/OperatingCompany.vue'),
        meta: { title: '经营企业' }
      },
      {
        path: '/tailingsPond',
        component: () => import(/* webpackChunkName: "tailingsPond" */ '../views/Admin/BusinessManagement/TailingsPond.vue'),
        meta: { title: '尾矿库' }
      },
      {
        path: '/enterpriseTaskManagement',
        component: () => import(/* webpackChunkName: "enterpriseTaskManagement" */ '../views/Admin/BusinessManagement/EnterpriseTaskManagement.vue'),
        meta: { title: '企业任务管理' }
      },
      {
        path: '/enterpriseReportReview',
        component: () => import(/* webpackChunkName: "enterpriseReportReview" */ '../views/Admin/BusinessManagement/EnterpriseReportReview.vue'),
        meta: { title: '企业报表审核' }
      },
      {
        path: '/licenseManagement',
        component: () => import(/* webpackChunkName: "licenseManagement" */ '../views/Admin/BusinessManagement/LicenseManagement.vue'),
        meta: { title: '许可证管理' }
      },
      {
        path: '/productionLedger',
        component: () => import(/* webpackChunkName: "productionLedger" */ '../views/Admin/BusinessManagement/ProductionLedger.vue'),
        meta: { title: '产生台账查询' }
      },
      {
        path: '/receivingLedger',
        component: () => import(/* webpackChunkName: "receivingLedger" */ '../views/Admin/BusinessManagement/ReceivingLedger.vue'),
        meta: { title: '接收台账查询' }
      },
      {
        path: '/disposalLedger',
        component: () => import(/* webpackChunkName: "disposalLedger" */ '../views/Admin/BusinessManagement/DisposalLedger.vue'),
        meta: { title: '处置台账查询' }
      },
      {
        path: '/ledgerStatistics',
        component: () => import(/* webpackChunkName: "ledgerStatistics" */ '../views/Admin/BusinessManagement/LedgerStatistics.vue'),
        meta: { title: '台账统计' }
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
