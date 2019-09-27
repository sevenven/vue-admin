export default {
  systemName: 'vue后台管理系统',
  menuList: {}, // 菜单列表
  curPage: { // 当前打开的页面
    index: 'main-page',
    name: '系统首页',
    url: '/main'
  },
  curPageList: [ // 当前打开的页面列表
    {
      index: 'main-page',
      name: '系统首页',
      url: '/main',
      noClose: true
    }
  ]
}