<template>
  <div>
    <zr-introduce >
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
  components: {
    zrIntroduce,
    zrAccordion
  }
}
</script>
<style lang="less" scoped>

</style>
