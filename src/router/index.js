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
      // 转移监管
      {
        path: '/pendingWarningInformation',
        component: () => import(/* webpackChunkName: "pendingWarningInformation" */ '../views/Admin/TransferSupervision/PendingWarningInformation.vue'),
        meta: { title: '待处理预警分析' }
      },
      {
        path: '/processingWarningInformation',
        component: () => import(/* webpackChunkName: "processingWarningInformation" */ '../views/Admin/TransferSupervision/ProcessingWarningInformation.vue'),
        meta: { title: '已处理预警信息' }
      },
      {
        path: '/regionalEnterpriseWarning',
        component: () => import(/* webpackChunkName: "regionalEnterpriseWarning" */ '../views/Admin/TransferSupervision/RegionalEnterpriseWarning.vue'),
        meta: { title: '区域企业预警提示' }
      },
      {
        path: '/keyEnterprisePortraits',
        component: () => import(/* webpackChunkName: "keyEnterprisePortraits" */ '../views/Admin/TransferSupervision/KeyEnterprisePortraits.vue'),
        meta: { title: '重点企业画像' }
      },
      {
        path: '/transferWithinProvince',
        component: () => import(/* webpackChunkName: "transferWithinProvince" */ '../views/Admin/TransferSupervision/TransferWithinProvince.vue'),
        meta: { title: '电子联单查询' }
      },
      {
        path: '/transferCrossProvince',
        component: () => import(/* webpackChunkName: "transferCrossProvince" */ '../views/Admin/TransferSupervision/TransferCrossProvince.vue'),
        meta: { title: '跨省转入联单' }
      },
      {
        path: '/transferPlan',
        component: () => import(/* webpackChunkName: "transferPlan" */ '../views/Admin/TransferSupervision/TransferPlan.vue'),
        meta: { title: '转移计划查询' }
      },
      {
        path: '/transferReported',
        component: () => import(/* webpackChunkName: "transferReported" */ '../views/Admin/TransferSupervision/TransferReported.vue'),
        meta: { title: '已上报移出商请' }
      },
      {
        path: '/transferCrossMoveOutProvince',
        component: () => import(/* webpackChunkName: "transferCrossMoveOutProvince" */ '../views/Admin/TransferSupervision/TransferCrossMoveOutProvince.vue'),
        meta: { title: '跨省移出商请' }
      },
      {
        path: '/transferCrossMoveInProvince',
        component: () => import(/* webpackChunkName: "transferCrossMoveInProvince" */ '../views/Admin/TransferSupervision/TransferCrossMoveInProvince.vue'),
        meta: { title: '跨省移入商请' }
      },
      {
        path: '/personInformationManagement',
        component: () => import(/* webpackChunkName: "personInformationManagement" */ '../views/Admin/TransferSupervision/PersonInformationManagement.vue'),
        meta: { title: '人员卡信息管理' }
      },
      {
        path: '/vehicleInformationManagement',
        component: () => import(/* webpackChunkName: "vehicleInformationManagement" */ '../views/Admin/TransferSupervision/VehicleInformationManagement.vue'),
        meta: { title: '车辆信息管理' }
      },
      // 危废交易
      {
        path: '/publicShow',
        component: () => import(/* webpackChunkName: "publicShow" */ '../views/Admin/HazardousWasteBusiness/PublicShow.vue'),
        meta: { title: '发布展示' }
      },
      {
        path: '/informationQuery',
        component: () => import(/* webpackChunkName: "informationQuery" */ '../views/Admin/HazardousWasteBusiness/InformationQuery.vue'),
        meta: { title: '信息查询' }
      },
      {
        path: '/transactionSummary',
        component: () => import(/* webpackChunkName: "transactionSummary" */ '../views/Admin/HazardousWasteBusiness/TransactionSummary.vue'),
        meta: { title: '交易汇总' }
      },
      // 视频监控
      {
        path: '/wasteProductionUnit',
        component: () => import(/* webpackChunkName: "wasteProductionUnit" */ '../views/Admin/VideoSurveillance/WasteProductionUnit.vue'),
        meta: { title: '产废单位' }
      },
      {
        path: '/disposalUnit',
        component: () => import(/* webpackChunkName: "disposalUnit" */ '../views/Admin/VideoSurveillance/DisposalUnit.vue'),
        meta: { title: '处置单位' }
      },
      {
        path: '/transportVehicle',
        component: () => import(/* webpackChunkName: "transportVehicle" */ '../views/Admin/VideoSurveillance/TransportVehicle.vue'),
        meta: { title: '运输车辆' }
      },
      // 统计分析
      {
        path: '/comprehensiveStatistics',
        component: () => import(/* webpackChunkName: "comprehensiveStatistics" */ '../views/Admin/StatisticalAnalysis/ComprehensiveStatistics.vue'),
        meta: { title: '综合统计' }
      },
      {
        path: '/solidWasteStatistics',
        component: () => import(/* webpackChunkName: "solidWasteStatistics" */ '../views/Admin/StatisticalAnalysis/SolidWasteStatistics.vue'),
        meta: { title: '固废统计' }
      },
      {
        path: '/hazardousWasteTransferStatistics',
        component: () => import(/* webpackChunkName: "hazardousWasteTransferStatistics" */ '../views/Admin/StatisticalAnalysis/HazardousWasteTransferStatistics.vue'),
        meta: { title: '危废转移统计' }
      },
      {
        path: '/crossCityTransferStatistics',
        component: () => import(/* webpackChunkName: "crossCityTransferStatistics" */ '../views/Admin/StatisticalAnalysis/CrossCityTransferStatistics.vue'),
        meta: { title: '跨省转移统计' }
      },
      {
        path: '/operatingStatistics',
        component: () => import(/* webpackChunkName: "operatingStatistics" */ '../views/Admin/StatisticalAnalysis/OperatingStatistics.vue'),
        meta: { title: '经营情况统计' }
      },
      // GIS可视化
      {
        path: '/gisEnterpriseDistribution',
        component: () => import(/* webpackChunkName: "gisEnterpriseDistribution" */ '../views/Admin/GisVisualization/GisEnterpriseDistribution.vue'),
        meta: { title: '企业分布' }
      },
      {
        path: '/gisWasteProductionDisposal',
        component: () => import(/* webpackChunkName: "gisWasteProductionDisposal" */ '../views/Admin/GisVisualization/GisWasteProductionDisposal.vue'),
        meta: { title: '产废及处置情况' }
      },
      {
        path: '/gisTransferSituation',
        component: () => import(/* webpackChunkName: "gisTransferSituation" */ '../views/Admin/GisVisualization/GisTransferSituation.vue'),
        meta: { title: '转移情况' }
      },
      {
        path: '/gisVehicleTransferTrajectory',
        component: () => import(/* webpackChunkName: "gisVehicleTransferTrajectory" */ '../views/Admin/GisVisualization/GisVehicleTransferTrajectory.vue'),
        meta: { title: '车辆转移轨迹' }
      },
      {
        path: '/gisVideoSurveillance',
        component: () => import(/* webpackChunkName: "gisVideoSurveillance" */ '../views/Admin/GisVisualization/GisVideoSurveillance.vue'),
        meta: { title: '视频监控' }
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
