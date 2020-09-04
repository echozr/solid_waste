<template>
  <div class="foot-warp">
    <el-row>
      <el-col :span="12">
        <div class="right">主办单位：陕西省固体废物管理中心</div>
      </el-col>
      <el-col :span="12">
        <div class="left">许可证号：陕IPC备08001043号</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.foot-warp{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2vw;
    line-height: 2vw;
    font-size: 0.8vw;
    background: #323641;
    color: #ffffff;
    .right{
      text-align: right;
      padding-right: 50px;
      box-sizing: content-box;
    }
    .left{
      padding-left: 50px;
      box-sizing: content-box;
    }
}
</style>
