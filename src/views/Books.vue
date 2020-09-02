<template>
  <div class="about">
    <zr-accordion :title="['书籍管理']" iconfont="el-icon-s-management"  />
    <div class="container">
      <div class="handle-box">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="标题">
            <el-input v-model="formInline.title" placeholder="输入标题"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-button type="success" size="medium" @click="handleAdd"><i class="el-icon-plus el-icon--left"></i>添加书籍</el-button>
      </div>
      <el-table :data="tableData"  border  class="table" ref="multipleTable"  header-cell-class-name="table-header" >
          <el-table-column type="index"  :index="indexMethod" label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="title" label="标题" align="center"></el-table-column>
          <el-table-column prop="content" label="内容" align="center">
            <template slot-scope="scope">
              {{scope.row.content | showText}}
            </template>
          </el-table-column>
          <el-table-column prop="creationTime" label="创建时间" align="center" width="150"></el-table-column>
          <el-table-column prop="author" label="作者" align="center" width="120"></el-table-column>
          <el-table-column prop="publicHouse" label="出版社" align="center" width="150"></el-table-column>
          <el-table-column prop="bookType" label="装订类型" align="center" width="100">
            <template slot-scope="scope">{{scope.row.bookType | getBookType}}</template>
          </el-table-column>
          <el-table-column prop="pages" label="页数" align="center" width="100"></el-table-column>
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
      <add-book ref="popularInfo" @addPopular='addPopular' @closePop="dialogFormVisible=false" :form="bookForm"/>
    </el-dialog>
  </div>
</template>
<script>
import zrAccordion from '../components/all/accordion'
import addBook from '../components/popular/addBook'
export default {
  data () {
    return {
      currentPage: 1,
      total: null,
      formInline: {
        title: '',
        start: '',
        count: ''
      },
      tableData: [],
      dialogFormVisible: false,
      title: '添加书籍',
      bookForm: {},
      bookId: '',
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
      this.getBookInfoById({ id: row.id })
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
    // 新增书籍
    async addPopular (value) {
      const _this = this
      console.log(value)
      Object.assign(value, { addType: 400 })
      if (!this.isEdit) { // 新增
        const result = await this.$tools.awaitWrap(this.$axios.popular.addBook(value), _this)
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
          id: this.bookId
        }
        Object.assign(params, value)
        const result = await this.$tools.awaitWrap(this.$axios.popular.updateBook(params), _this)
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
      const result = await this.$tools.awaitWrap(this.$axios.popular.getBookList(params), _this)
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
    // 删除书籍
    async deletePopular (params) {
      const _this = this
      const result = await this.$tools.awaitWrap(this.$axios.popular.deleteBooks(params), _this)
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
    async getBookInfoById (params) {
      const _this = this
      const result = await this.$tools.awaitWrap(this.$axios.popular.getBookInfoById(params), _this)
      if (result.data) {
        const { data, code } = result.data
        if (code === 200) {
          const { title, addType, content, creationTime, bgImage, id, author, publicHouse, PublicYear, pages, pricing, bookType } = data
          this.bookForm = {
            title,
            addType,
            content,
            creationTime,
            bgImage,
            author,
            publicHouse,
            PublicYear,
            pages: Number(pages),
            pricing: Number(pricing),
            bookType
          }
          this.bookId = id
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
    addBook
  }
}
</script>
<style lang="less" scoped>
.red{
  color: red;
}

</style>
