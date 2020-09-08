<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="图形统计">
        <zr-chart />
      </el-tab-pane>
      <el-tab-pane label="报表统计">
        <zr-table />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import zrChart from '@/components/admin/StatisticalAnalysis/WFZYTJ/chartTJ'
import zrTable from '@/components/admin/StatisticalAnalysis/WFZYTJ/tableTJ'
export default {
  components: {
    zrChart,
    zrTable
  }
}
</script>
<style lang="less" scoped>

</style>
