/**
 * @description 期刊模块接口列表
 * @author zr
 */
import base from './base' // 导入接口域名列表
import axios from '@/http'// 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

const popular = {
  // 新增期刊
  addPopular (params) {
    return axios.post(`${base.api}/popular/addPopular`, qs.stringify(params))
  },
  // 获取期刊列表
  getPopularList (params) {
    return axios.get(`${base.api}/popular/getPopularList`, { params })
  },
  // 点击删除期刊
  deletePopular (params) {
    return axios.delete(`${base.api}/popular/deletePopular`, { params })
  },
  // 根据ID获取期刊基本信息
  getPopularInfoById (params) {
    return axios.get(`${base.api}/popular/getPopularInfoById`, { params })
  },
  // 修改期刊
  updatePopular (params) {
    return axios.post(`${base.api}/popular/updatePopular`, qs.stringify(params))
  },
  // 添加书籍
  addBook (params) {
    return axios.post(`${base.api}/books/addBooks`, qs.stringify(params))
  },
  // 获取书籍列表
  getBookList (params) {
    return axios.get(`${base.api}/books/getBookList`, { params })
  },
  // 删除书籍
  deleteBooks (params) {
    return axios.delete(`${base.api}/books/deleteBooks`, { params })
  },
  // 根据ID获取书籍详情
  getBookInfoById (params) {
    return axios.get(`${base.api}/books/getBookInfoByID`, { params })
  },
  // 编辑书籍
  updateBook (params) {
    return axios.post(`${base.api}/books/updateBook`, qs.stringify(params))
  }
}

export default popular
