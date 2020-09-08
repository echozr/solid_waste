<template>
  <div>
    <zr-title icon="&#xe602;" title="全省固废日历" />
    <div class="handle-box">
      <el-form :inline="true" :model="form1" class="demo-form-inline">
        <el-form-item label="行业类别">
          <el-select v-model="form1.type" placeholder="选择行业">
            <el-option label="全部" value></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年份选项">
          <el-col>
            <el-date-picker type="year" placeholder="选择时间"  v-model="form1.year" format="yyyy 年"  value-format="yyyy" ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div ref="chart1" class="chart1"></div>
    <zr-title icon="&#xe615;" title="危废总体分析" />
    <div class="handle-box">
      <el-form :inline="true" :model="form2" class="demo-form-inline">
        <el-form-item label="统计时间">
          <el-col>
            <el-date-picker type="month"  placeholder="选择时间"  v-model="form2.startTiem"  format="yyyy年MM月" value-format="yyyy-MM"></el-date-picker>-
            <el-date-picker type="month"  placeholder="选择时间"  v-model="form2.endTime"  format="yyyy年MM月" value-format="yyyy-MM"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="行业类别">
          <el-select v-model="form2.type" placeholder="选择行业">
            <el-option label="全部" value></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="统计维度">
          <el-select v-model="form2.type1" placeholder="选择行业">
            <el-option label="全部" value></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <zr-title>
      <template slot="right-icon">
        <el-button type="success" class="aaa">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
      </template>
    </zr-title>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form1: {
        type: '',
        year: ''
      },
      form2: {
        startTime: '',
        endTime: '',
        type: '',
        type1: ''
      }
    }
  },
  mounted () {
    this.getEchartData()
  },
  methods: {
    getEchartData () {
      const chart = this.$refs.chart1
      if (chart) {
        const myChart = this.$charts.init(chart)
        const data = [['2016-01-01', 3329], ['2016-01-02', 7427], ['2016-01-03', 7576], ['2016-01-04', 7152], ['2016-01-13', 5210]]
        const option = this.$option.calendarChartOption(data)
        myChart.setOption(option)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.chart1 {
  width: 100%;
  height: 190px;
  background: #f4f5f6;
  border-radius: 5px;
}
</style>
