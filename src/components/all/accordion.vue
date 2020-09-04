<template>
  <div class="crumbs" :class="isGreen?'green':'gray'">
    <el-breadcrumb separator-class="el-icon-arrow-right" v-if="title.length>0">
    <template v-for="(item,index) in title">
      <el-breadcrumb-item :key="index">
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
    },
    isGreen: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less">
.green{
  .el-breadcrumb__item{
    .el-breadcrumb__inner{
      width: 5.5vw;
      height:1.5vw;
      text-align: center;
      line-height: 1.5vw;
      border-radius: 2px;
      border: solid 1px #05a081;
      display:inline-block;
      color: #05a081;
      font-size: 0.8vw;
    }
    .el-breadcrumb__separator{
      color: #05a081;
    }
    &:last-child{
      .el-breadcrumb__inner{
        background: #05a081;
        color:#ffffff;
      }
    }
  }
}
.gray{
  .el-breadcrumb__item{
    .el-breadcrumb__inner{
      height: 22px;
      text-align: center;
      line-height: 22px;
      border-radius: 2px;
      display:inline-block;
      color: #3a4046;
      font-size: 14px;
    }
    .el-breadcrumb__separator{
      color: #3a4046;
    }
    &:last-child{
      .el-breadcrumb__inner{
        color:#05a081;
        font-weight: bold;
      }
    }
  }
}

</style>
