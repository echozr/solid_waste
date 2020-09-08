/**
 * @description eChart 配置页面
 * @author zr
 */

const chartOption = {
  /**
   * 日历热力统计图
   * @param {object} data 数据对象
   */
  calendarChartOption (data) {
    const option = {
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 10,
        textStyle: {
          color: '#000'
        }
      },
      calendar: {
        top: 60,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5
        },
        yearLabel: { show: false }
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: data
      }
    }
    return option
  }
}
export default chartOption
