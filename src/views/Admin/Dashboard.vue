<template>
  <div>
    <zr-introduce :imgurl="introduce.imgUrl" :content="introduce.content" />
    <div class="dashboard-menu">
      <ul>
        <template v-for="(item,index) in listData" >
          <li :key="index"  >
            <router-link :to="item.url" :class="{'active':index==hoverIndex}" @mouseover="hoverIndex = index"  @mouseout="hoverIndex = -1">
              <img :src="item.img" />
              <span>{{item.text}}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
    <zr-indexFoot />
  </div>
</template>
<script>
import zrIntroduce from '../../components/all/Introduce'
import zrIndexFoot from '../../components/all/indexFoot'
export default {
  data () {
    return {
      hoverIndex: -1,
      introduce: {
        imgUrl: require('../../assets/images/adminbg1.png'),
        content: '  陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西省固体废物信陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理...'
      },
      listData: [
        {
          img: require('../../assets/images/adminIcon1.png'),
          text: '综合展示',
          url: '/comprehensive'
        },
        {
          img: require('../../assets/images/adminIcon2.png'),
          text: '企业管理',
          url: '/generalIndustrialSource'
        },
        {
          img: require('../../assets/images/adminIcon3.png'),
          text: '转移监管',
          url: '/'
        },
        {
          img: require('../../assets/images/adminIcon4.png'),
          text: '交易发布',
          url: '/'
        },
        {
          img: require('../../assets/images/adminIcon5.png'),
          text: '视频监控',
          url: '/'
        },
        {
          img: require('../../assets/images/adminIcon6.png'),
          text: '统计分析',
          url: '/'
        },
        {
          img: require('../../assets/images/adminIcon7.png'),
          text: 'GIS可视化',
          url: '/'
        },
        {
          img: require('../../assets/images/adminIcon8.png'),
          text: '系统设置',
          url: '/'
        }
      ]
    }
  },
  components: {
    zrIntroduce,
    zrIndexFoot
  }
}
</script>
<style lang="less" scoped>
.dashboard-menu{
    width: 63vw;
    height:17vw;
    padding: 4vw 10vw;
    background: #ffffff;
    position: absolute;
    left: 8.5vw;
    top: 15vw;
    ul{
      width: 52vw;
      margin: 0 auto;
      li{
        float: left;
        width: 13vw;
        border-bottom: 1px solid #c6d1d3;
        height: 8.5vw;
        position: relative;
        border-right: 1px solid #c6d1d3;
        box-sizing: border-box;
        &:nth-child(4),&:nth-child(8){
          border-right:0;
        }
        &:nth-child(5),&:nth-child(6),&:nth-child(7),&:nth-child(8){
          border-bottom: 0;
        }
        a{
          width: 100%;
          height: 100%;
          display: inline-block;
          color: #708599;
          &:hover{
            background: rgba(5, 160, 129, 1);;
            color: #ffffff;
          }
          img{
            width: 4.5vw;
            height: 4.5vw;
            position: absolute;
            left: 4.3vw;
            top: 0.7vw;
          }
          span{
            width: 100%;
            height: 1.5vw;
            line-height: 1.5vw;
            font-size: 1vw;
            text-align: center;
            position: absolute;
            top: 6vw;
          }
        }
      }
    }
}
@media screen and (max-width: 1366px) {
  .dashboard-menu{
    height:15vw;
    padding: 3vw 10vw;
    top: 16vw;
  }
}
</style>
