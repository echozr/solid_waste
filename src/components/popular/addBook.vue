<template>
  <div class="home">
    <el-form ref="ruleForm" :model="form" :rules="rules" label-width="80px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="标题"  prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="作者"  prop="author">
            <el-input v-model="form.author"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="选择时间" prop="creationTime">
            <el-col>
              <el-date-picker type="month" placeholder="选择时间" v-model="form.creationTime" format="yyyy 年 MM 月" value-format="yyyy-MM" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="书本类型" prop="bookType">
            <el-select v-model="form.bookType" placeholder="请选择类型" style="float:left">
              <template v-for="(item,index) in selectData">
                <el-option :label="item.lable" :value="item.val" :key="index"></el-option>
              </template>
            </el-select>
        </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="出版社" prop="publicHouse">
            <el-input v-model="form.publicHouse"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出版年" prop="PublicYear">
            <el-date-picker type="year" placeholder="选择出版年" v-model="form.PublicYear"  format="yyyy年" value-format="yyyy"  style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="页数" prop="pages">
            <el-input type="text" v-model.number="form.pages"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定价" prop="pricing">
            <el-input type="text" v-model.number="form.pricing"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="书籍简介" prop="content">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="添加图片" >
            <el-upload class="avatar-uploader" :headers="headers"  action="/api/upload/addFile" :show-file-list="false"  accept="image/*" :on-success="upSuccess">
              <img v-if="showImg || form.bgImage" :src="form.bgImage" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
      </el-col>
      </el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default () {
        return {
          title: '',
          content: '',
          addType: 400,
          creationTime: '',
          bgImage: '',
          author: '',
          publicHouse: '',
          PublicYear: '',
          pages: 0,
          pricing: 0,
          bookType: ''
        }
      }
    }
  },
  data () {
    return {
      showImg: false,
      selectData: [
        { lable: '精装', val: 100 },
        { lable: '普装', val: 200 }
      ],
      rules: {
        title: [
          { required: true, message: '请输入书籍名称', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入书籍简介', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请输入书籍作者', trigger: 'blur' }
        ],
        publicHouse: [
          { required: true, message: '请输入出版社', trigger: 'blur' }
        ],
        PublicYear: [
          { required: true, message: '请输入出版年份', trigger: 'change' }
        ],
        pricing: [
          { required: true, message: '请输入价格', trigger: 'blur' },
          { type: 'number', message: '价格必须为数字值', trigger: 'blur' }
        ],
        pages: [
          { required: true, message: '请输入页码', trigger: 'blur' },
          { type: 'number', message: '页码必须为数字值', trigger: 'blur' }
        ],
        bookType: [
          { required: true, message: '请选择书籍装订类型', trigger: 'change' }
        ],
        creationTime: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
      type: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    }
  },
  methods: {
    // 上传成功
    upSuccess (res, file) {
      // eslint-disable-next-line no-debugger
      debugger
      this.type = file.raw.type
      if (this.type.indexOf('image/') > -1) {
        this.showImg = true
        this.form.bgImage = res.data.url
      } else {
        this.form.resources = res.data.url
      }
    },
    onSubmit (formName) {
      const _this = this
      // eslint-disable-next-line no-debugger
      debugger
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.$emit('addPopular', _this.form)
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.showImage = false
      this.$refs[formName].resetFields()
      this.$emit('closePop')
    }
  }
}
</script>
<style lang="less" scoped>
.avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }
  .avatar-uploader {
    border-color: #409EFF;
    width: 100px!important;
    height: 100px!important;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height:100px;
    line-height:100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height:100px;
    display: block;
  }
  .avatar-uploader2{
    width: 300px;
    height: 120px;
  }
  .el-row{
    padding: 0 50px;
  }
  .el-select{
    width: 100%;
  }
</style>
