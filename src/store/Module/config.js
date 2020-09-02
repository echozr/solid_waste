/**
 * @description 全局配置数据存储
 * @author zr
 */
export default {
  state: {
    topMenu: [
      {
        icon: 'el-icon-s-home',
        index: 'dashboard',
        title: '系统首页'
      },
      {
        icon: 'el-icon-s-shop',
        index: 'popular',
        title: '数据管理'
      },
      {
        icon: 'el-icon-s-management',
        index: 'books',
        title: '用户管理'
      }
    ],
    leftMenu: {
      popular: [
        {
          icon: 'el-icon-s-shop',
          index: 'popular',
          title: '期刊管理'
        }
      ],
      books: [
        {
          icon: 'el-icon-s-management',
          index: 'books',
          title: '书籍管理'
        },
        {
          icon: 'el-icon-s-tools',
          index: 'authority',
          title: '权限管理',
          subs: [
            {
              index: 'user',
              title: '用户管理',
              parent: 'books'
            },
            {
              index: 'role',
              title: '角色管理',
              parent: 'books'
            }
          ]
        }
      ]
    }
  },
  getter: {
  },
  mutations: {
  },
  actions: {
  }
}
