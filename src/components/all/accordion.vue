<template>
  <div class="crumbs">
    <el-breadcrumb separator="/" v-if="title.length>0">
    <template v-for="(item,index) in title">
      <el-breadcrumb-item :key="item">
        <i v-if="index===0" :class="iconfont" ></i>
        {{item}}
      </el-breadcrumb-item>
    </template>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    iconfont: {
      type: String,
      default: 'el-icon-s-home'
    },
    title: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
