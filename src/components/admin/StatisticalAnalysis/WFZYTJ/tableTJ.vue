<template>
  <div>
    <zr-title icon="&#xe602;" title="危废登记定制报表" />
    <el-table :data="tableData"  border style="width: 100%"  :span-method="objectSpanMethod">
      <el-table-column  prop="no"  label="序号"  width="180"> </el-table-column>
      <el-table-column  prop="name" label="报表名称"> </el-table-column>
      <el-table-column  label="汇总类型" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.type}}</el-button>
        </template>
      </el-table-column>
      <el-table-column  prop="info" label="报表说明">  </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        no: 1,
        name: '危险废物生产量汇总分析报告',
        type: '地区汇总',
        info: '危险废物生产量汇总分析报告'
      },
      {
        no: 2,
        name: '危险废物生产量汇总分析报告',
        type: '行业汇总',
        info: '危险废物生产量汇总分析报告'
      },
      {
        no: 3,
        name: '工业废物生产量汇总分析报告',
        type: '地区汇总',
        info: '危险废物生产量汇总分析报告'
      },
      {
        no: 4,
        name: '工业废物生产量汇总分析报告',
        type: '行业汇总',
        info: '危险废物生产量汇总分析报告'
      }]
    }
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
