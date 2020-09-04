<template>
  <div>
    <zr-introduce :imgurl="introduce.imgUrl" :content="introduce.content">
      <template slot="more">
        <div class="moreBtn">查看更多</div>
        <zr-accordion :title="['首页','产废单位','表单填写']"/>
      </template>
    </zr-introduce>
  </div>
</template>
<script>
import zrIntroduce from '../../components/all/Introduce'
import zrAccordion from '../../components/all/accordion'
export default {
  data () {
    return {
      introduce: {
        imgUrl: require('../../assets/images/adminbg1.png'),
        content: '陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西省固体废物信息管理系统平台简介陕西...'
      }
    }
  },
  components: {
    zrIntroduce,
    zrAccordion
  }
}
</script>
<style lang="less" scoped>

</style>
