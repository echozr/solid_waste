<template>
  <div class="about">
    <zr-accordion :title="['期刊管理']" iconfont="el-icon-s-shop"  />
    <div class="container">
      <div class="handle-box">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="标题">
            <el-input v-model="formInline.title" placeholder="输入标题"></el-input>
          </el-form-item>
          <el-form-item label="选择类型">
            <el-select v-model="formInline.type" placeholder="选择类型">
              <el-option label="全部" value=""></el-option>
              <el-option label="电影" value="100"></el-option>
              <el-option label="音乐" value="200"></el-option>
              <el-option label="诗句" value="300"></el-option>
              <el-option label="视频" value="500"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-col>
              <el-date-picker type="month" placeholder="选择时间" v-model="formInline.time"  format="yyyy 年 MM 月"  value-format="yyyy-MM"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-button type="success" size="medium" @click="handleAdd"><i class="el-icon-plus el-icon--left"></i>添加期刊</el-button>
      </div>
      <el-table :data="tableData"  border  class="table" ref="multipleTable"  header-cell-class-name="table-header" >
          <el-table-column type="index"  :index="indexMethod" label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="title" label="标题" align="center"></el-table-column>
          <el-table-column prop="content" label="内容" align="center"></el-table-column>
          <el-table-column label="类型" width="100" align="center">
            <template slot-scope="scope">{{scope.row.addType | getType}}</template>
          </el-table-column>
          <el-table-column prop="creationTime" label="创建时间" align="center" width="150"></el-table-column>
          <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
              <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                  type="text"
                  icon="el-icon-delete"
                  class="red"
                  @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
      </el-table>
      <div class="paginationWarp">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
      </div>
    </div>
    <!-- 新增编辑弹出框 -->
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <add-popular ref="popularInfo" @addPopular='addPopular' @closePop="dialogFormVisible=false" :form="popularForm"/>
    </el-dialog>
  </div>
</template>
<script>
import zrAccordion from '../components/all/accordion'
import addPopular from '../components/popular/addPopular'
export default {
  data () {
    return {
      currentPage: 1,
      total: null,
      formInline: {
        title: '',
        type: '',
        time: '',
        start: '',
        count: ''
      },
      tableData: [],
      dialogFormVisible: false,
      title: '添加期刊',
      popularForm: {},
      popularId: '',
      isEdit: false
    }
  },
  created () {
    this.getPopularList(this.formInline)
  },
  methods: {
    // 点击查询
    onSubmit () {
      this.getPopularList(this.formInline)
    },
    // 点击新增
    handleAdd () {
      !this.isEdit || this.$refs.popularInfo.resetForm('ruleForm')
      this.isEdit = false
      this.dialogFormVisible = true
      this.title = '添加期刊'
    },
    // 点击编辑
    handleEdit (index, row) {
      this.dialogFormVisible = true
      this.isEdit = true
      this.title = '编辑期刊'
      this.getPopularInfoById({ id: row.id })
    },
    // 点击删除
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deletePopular({ id: row.id })
      })
    },
    // 新增期刊
    async addPopular (value) {
      const _this = this
      if (!this.isEdit) { // 新增
        const result = await this.$tools.awaitWrap(this.$axios.popular.addPopular(value), _this)
        if (result.data) {
          const { data, code } = result.data
          if (code === 200) {
            this.getPopularList()
            this.$notify({
              title: '成功',
              message: data,
              type: 'success',
              position: 'bottom-right'
            })
          }
        }
      } else { // 编辑
        const params = {
          id: this.popularId
        }
        Object.assign(params, value)
        const result = await this.$tools.awaitWrap(this.$axios.popular.updatePopular(params), _this)
        if (result.data) {
          const { data, code } = result.data
          if (code === 200) {
            this.$notify({
              title: '成功',
              message: data,
              type: 'success',
              position: 'bottom-right'
            })
            this.getPopularList()
          }
        }
      }
      this.dialogFormVisible = false
    },
    // 获取列表
    async getPopularList (params) {
      const _this = this
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      const result = await this.$tools.awaitWrap(this.$axios.popular.getPopularList(params), _this)
      if (result.data) {
        const { data, code } = result.data
        if (code === 200) {
          loading.close()
          this.tableData = data.list
          this.total = data.total
          this.formInline.count = data.count
          this.formInline.start = data.start
        }
      }
    },
    // 删除期刊
    async deletePopular (params) {
      const _this = this
      const result = await this.$tools.awaitWrap(this.$axios.popular.deletePopular(params), _this)
      if (result.data) {
        const { data, code } = result.data
        if (code === 200) {
          this.$notify({
            title: '成功',
            message: data,
            type: 'success',
            position: 'bottom-right'
          })
          this.getPopularList()
        }
      }
    },
    // 获取期刊详情
    async getPopularInfoById (params) {
      const _this = this
      const result = await this.$tools.awaitWrap(this.$axios.popular.getPopularInfoById(params), _this)
      if (result.data) {
        const { data, code } = result.data
        if (code === 200) {
          const { title, addType, content, creationTime, resources, bgImage, id } = data
          this.popularForm = {
            title, addType, content, creationTime, resources, bgImage
          }
          this.popularId = id
        }
      }
    },
    // 分页size切换
    handleSizeChange (val) {
      this.formInline.count = val
      this.getPopularList(this.formInline)
      console.log(`每页 ${val} 条`)
    },
    // 分页切换
    handleCurrentChange (val) {
      this.formInline.start = val - 1
      this.getPopularList(this.formInline)
      console.log(`当前页: ${val}`)
    },
    // 设置序号
    indexMethod (index) {
      return this.formInline.count * this.formInline.start + (index + 1)
    }
  },
  components: {
    zrAccordion,
    addPopular
  }
}
</script>
<style lang="less" scoped>
.red{
  color: red;
}

</style>
