<template>
  <div class="left-warp">
    <el-menu :default-active="onRoutes" router class="navbar-nav"  mode="horizontal" background-color="#323641"  text-color="#fff" active-text-color="#ffd04b">
        <template v-for="item in leftHead" >
          <el-menu-item :index="item.index" :key="item.index" :title="item.title">
              <span class="iconfont" v-html="item.icon"  />
          </el-menu-item>
        </template>
      </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      leftHead: [
        {
          icon: '&#xe606;',
          title: '首页',
          index: 'dashboard'
        },
        {
          icon: '&#xe647;',
          title: '综合展示',
          index: 'books'
        },
        {
          icon: '&#xe6cd;',
          title: '企业管理',
          index: 'dashboard'
        },
        {
          icon: '&#xe6d4;',
          title: '转移监管',
          index: 'dashboard'
        },
        {
          icon: '&#xe72f;',
          title: '交易发布',
          index: 'dashboard'
        },
        {
          icon: '&#xe662;',
          title: '视频监控',
          index: 'dashboard'
        },
        {
          icon: '&#xe615;',
          title: '统计分析',
          index: 'dashboard'
        },
        {
          icon: '&#xe676;',
          title: 'GIS可视化',
          index: 'dashboard'
        },
        {
          icon: '&#xe611;',
          title: '系统设置',
          index: 'dashboard'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.left-warp {
  width: 3vw;
  background: #242932;
  position: absolute;
  left: 0;
  top: 4vw;
  bottom: 0;
  ul{
    width: 100%;
    height: 100%;
    li{
      width: 3vw;
      height: 3vw;
      display: inline-block;
      color: #ffffff;
      position: relative;
      .iconfont{
        font-size: 1.2vw;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -0.8vw 0 0 -0.8vw;
        width: 1.4vw;
        height: 1.4vw;
        line-height: 1.4vw;
        text-align: center;
      }
    }
  }
}
</style>
