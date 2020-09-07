/**
 * @description 全局配置数据存储
 * @author zr
 */
export default {
  state: {
    topMenu: [
      {
        icon: '&#xe606;',
        title: '首页',
        index: 'dashboard'
      },
      {
        icon: '&#xe647;',
        title: '综合展示',
        index: 'comprehensive'
      },
      {
        icon: '&#xe6cd;',
        title: '企业管理',
        index: 'generalIndustrialSource'
      },
      {
        icon: '&#xe6d4;',
        title: '转移监管',
        index: 'transferSupervision'
      },
      {
        icon: '&#xe72f;',
        title: '交易发布',
        index: 'transactionRelease'
      },
      {
        icon: '&#xe662;',
        title: '视频监控',
        index: 'videoSurveillance'
      },
      {
        icon: '&#xe615;',
        title: '统计分析',
        index: 'statisticalAnalysis'
      },
      {
        icon: '&#xe676;',
        title: 'GIS可视化',
        index: 'gisVisualization'
      },
      {
        icon: '&#xe611;',
        title: '系统设置',
        index: 'systemSettings'
      }
    ],
    leftMenu: {
      generalIndustrialSource: [
        {
          title: '企业信息管理',
          index: 'enterpriseInformationManagement',
          parent: 'generalIndustrialSource',
          subs: [
            {
              index: 'generalIndustrialSource',
              title: '一般工业园',
              parent: 'generalIndustrialSource'
            },
            {
              index: 'dangerWasteProduction',
              title: '危废产生源',
              parent: 'generalIndustrialSource'
            },
            {
              index: 'medicalWasteSources',
              title: '医废产生源',
              parent: 'generalIndustrialSource'
            },
            {
              index: 'transportCompany',
              title: '运输企业',
              parent: 'generalIndustrialSource'
            },
            {
              index: 'operatingCompany',
              title: '经营企业',
              parent: 'generalIndustrialSource'
            },
            {
              index: 'tailingsPond',
              title: '尾矿库',
              parent: 'generalIndustrialSource'
            }
          ]
        },
        {
          index: 'enterpriseTaskManagement',
          title: '企业任务管理',
          parent: 'generalIndustrialSource'
        },
        {
          index: 'enterpriseReportReview',
          title: '企业报表审核',
          parent: 'generalIndustrialSource'
        },
        {
          index: 'licenseManagement',
          title: '许可证管理',
          parent: 'generalIndustrialSource'
        },
        {
          title: '电子台账',
          index: 'electronicLedger',
          parent: 'generalIndustrialSource',
          subs: [
            {
              index: 'productionLedger',
              title: '产生台账查询',
              parent: 'generalIndustrialSource'
            },
            {
              index: 'receivingLedger',
              title: '接收台账查询',
              parent: 'generalIndustrialSource'
            },
            {
              index: 'disposalLedger',
              title: '处置台账查询',
              parent: 'generalIndustrialSource'
            },
            {
              index: 'ledgerStatistics',
              title: '台账统计',
              parent: 'generalIndustrialSource'
            }
          ]
        }
      ]
    }
  },
  getter: {
  },
  mutations: {
  },
  actions: {
  }
}
