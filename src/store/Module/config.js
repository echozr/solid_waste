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
        index: 'pendingWarningInformation'
      },
      {
        icon: '&#xe72f;',
        title: '交易发布',
        index: 'publicShow'
      },
      {
        icon: '&#xe662;',
        title: '视频监控',
        index: 'wasteProductionUnit'
      },
      {
        icon: '&#xe615;',
        title: '统计分析',
        index: 'comprehensiveStatistics'
      },
      {
        icon: '&#xe676;',
        title: 'GIS可视化',
        index: 'gisEnterpriseDistribution'
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
      ],
      pendingWarningInformation: [
        {
          title: '预警分析',
          index: 'yjfx',
          parent: 'pendingWarningInformation',
          subs: [
            {
              index: 'pendingWarningInformation',
              title: '待处理预警分析',
              parent: 'pendingWarningInformation'
            },
            {
              index: 'processingWarningInformation',
              title: '已处理预警信息',
              parent: 'pendingWarningInformation'
            },
            {
              index: 'regionalEnterpriseWarning',
              title: '区域企业预警提示',
              parent: 'pendingWarningInformation'
            },
            {
              index: 'keyEnterprisePortraits',
              title: '重点企业画像',
              parent: 'pendingWarningInformation'
            }
          ]
        },
        {
          title: '电子联单管理',
          index: 'dzldzy',
          parent: 'pendingWarningInformation',
          subs: [
            {
              index: 'transferWithinProvince',
              title: '电子联单查询',
              parent: 'pendingWarningInformation'
            },
            {
              index: 'transferCrossProvince',
              title: '跨省转入联单',
              parent: 'pendingWarningInformation'
            }
          ]
        },
        {
          title: '转移计划管理',
          index: 'zyjhgl',
          parent: 'pendingWarningInformation',
          subs: [
            {
              index: 'transferPlan',
              title: '转移计划查询',
              parent: 'pendingWarningInformation'
            },
            {
              index: 'transferReported',
              title: '已上报移出商请',
              parent: 'pendingWarningInformation'
            }
          ]
        },
        {
          title: '跨省转移商请',
          index: 'kszysq',
          parent: 'pendingWarningInformation',
          subs: [
            {
              index: 'transferCrossMoveOutProvince',
              title: '跨省移出商请',
              parent: 'pendingWarningInformation'
            },
            {
              index: 'transferCrossMoveInProvince',
              title: '跨省移入商请',
              parent: 'pendingWarningInformation'
            }
          ]
        },
        {
          title: '人员车辆管理',
          index: 'ryclgl',
          parent: 'pendingWarningInformation',
          subs: [
            {
              index: 'personInformationManagement',
              title: '人员卡信息管理',
              parent: 'pendingWarningInformation'
            },
            {
              index: 'vehicleInformationManagement',
              title: '车辆信息管理',
              parent: 'pendingWarningInformation'
            }
          ]
        }
      ],
      publicShow: [
        {
          index: 'publicShow',
          title: '发布展示',
          parent: 'publicShow'
        },
        {
          index: 'informationQuery',
          title: '信息查询',
          parent: 'publicShow'
        },
        {
          index: 'transactionSummary',
          title: '交易汇总',
          parent: 'publicShow'
        }
      ],
      wasteProductionUnit: [
        {
          index: 'wasteProductionUnit',
          title: '产废单位',
          parent: 'wasteProductionUnit'
        },
        {
          index: 'disposalUnit',
          title: '处置单位',
          parent: 'wasteProductionUnit'
        },
        {
          index: 'transportVehicle',
          title: '运输车辆',
          parent: 'wasteProductionUnit'
        }
      ],
      comprehensiveStatistics: [
        {
          index: 'comprehensiveStatistics',
          title: '综合统计',
          parent: 'comprehensiveStatistics'
        },
        {
          index: 'solidWasteStatistics',
          title: '固废统计',
          parent: 'comprehensiveStatistics'
        },
        {
          index: 'hazardousWasteTransferStatistics',
          title: '危废转移统计',
          parent: 'comprehensiveStatistics'
        },
        {
          index: 'crossCityTransferStatistics',
          title: '跨省转移统计',
          parent: 'comprehensiveStatistics'
        },
        {
          index: 'operatingStatistics',
          title: '经营情况统计',
          parent: 'comprehensiveStatistics'
        }
      ],
      gisEnterpriseDistribution: [
        {
          index: 'gisEnterpriseDistribution',
          title: '企业分布',
          parent: 'gisEnterpriseDistribution'
        },
        {
          index: 'gisWasteProductionDisposal',
          title: '产废及处置情况',
          parent: 'gisEnterpriseDistribution'
        },
        {
          index: 'gisTransferSituation',
          title: '转移情况',
          parent: 'gisEnterpriseDistribution'
        },
        {
          index: 'gisVehicleTransferTrajectory',
          title: '车辆转移轨迹',
          parent: 'gisEnterpriseDistribution'
        },
        {
          index: 'gisVideoSurveillance',
          title: '视频监控',
          parent: 'gisEnterpriseDistribution'
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
