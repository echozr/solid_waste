/**
 * @description 全局过滤器
 * @author zr
 */

const vFilter = {
  atReplace (value) {
    // 正则表达式，匹配 '@昵称:userName'
    const REG_FOR_AT_WHO = /@(.+?):(\w+?)\b/g
    const result = value.replace(REG_FOR_AT_WHO, (matchStr, nickName, userName) => {
      return `<a style="color:#2999cc" href="#/userInfo/:${userName}">@${nickName}</a>`
    })
    return result
  },
  changeTime (value) {
    // value左边那个属性值
    const t = new Date(value)
    const tf = function (i) { return (i < 10 ? '0' : '') + i }
    const format = 'yyyy-MM-dd HH:mm'
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear())
        case 'MM':
          return tf(t.getMonth() + 1)
        case 'mm':
          return tf(t.getMinutes())
        case 'dd':
          return tf(t.getDate())
        case 'HH':
          return tf(t.getHours())
        case 'ss':
          return tf(t.getSeconds())
      }
    })
  },
  getType (value) {
    let text
    switch (value) {
      case 100:
        text = '电影'
        break
      case 200:
        text = '音乐'
        break
      case 300:
        text = '诗句'
        break
      case 400:
        text = '书籍'
        break
      case 500:
        text = '视频'
        break
      default:
        text = '其他'
        break
    }
    return text
  },
  getBookType (value) {
    let text
    switch (Number(value)) {
      case 100:
        text = '精装'
        break
      case 200:
        text = '普装'
        break
    }
    return text
  },
  showText (value) {
    const text = value.substring(0, 45)
    return `${text}...`
  }

}

export default vFilter
