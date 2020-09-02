<template>
  <div>
    <el-form ref="ruleForm" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="标题"  prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="addType">
        <el-select v-model="form.addType" placeholder="请选择类型" style="float:left">
          <template v-for="(item,index) in selectData">
            <el-option :label="item.lable" :value="item.val" :key="index"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="选择时间" prop="creationTime">
        <el-col>
          <el-date-picker type="month" placeholder="选择时间" v-model="form.creationTime"  format="yyyy 年 MM 月" value-format="yyyy-MM"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="添加图片" prop="bgImage">
        <el-upload class="avatar-uploader" :headers="headers"  action="/api/upload/addFile" :show-file-list="false"  accept="image/*" :on-success="upSuccess">
          <img v-if="showImage || form.bgImage" :src="form.bgImage" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="添加资源" v-show="form.addType === 300 || form.addType === 500" prop="resources">
        <el-upload class="avatar-uploader2" :headers="headers"  action="/api/upload/addFile" :show-file-list="false"  accept="audio/mp3 ,audio/mp4, video/mp4  " :on-success="upSuccess">
          <video v-if="showRouse || form.resources"  :src="form.resources" controls="controls" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
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
          addType: '',
          creationTime: '',
          bgImage: '',
          resources: ''
        }
      }
    }
  },
  data () {
    return {
      showImage: false,
      showRouse: false,
      selectData: [
        { lable: '电影', val: 100 },
        { lable: '诗句', val: 200 },
        { lable: '音乐', val: 300 },
        { lable: '视频', val: 500 }
      ],
      rules: {
        title: [
          { required: true, message: '请输入期刊名称', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入期刊内容', trigger: 'blur' }
        ],
        addType: [
          { required: true, message: '请选择期刊类型', trigger: 'change' }
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
      this.type = file.raw.type
      if (this.type.indexOf('image/') > -1) {
        this.showImage = true
        this.form.bgImage = res.data.url
      } else {
        this.showRouse = true
        this.form.resources = res.data.url
      }
    },
    onSubmit (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.$emit('addPopular', _this.form)
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.showRouse = false
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
</style>
