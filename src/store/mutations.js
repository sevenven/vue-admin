import {
  GET_MENU_LIST,
  GET_CURPAGE,
  INCREMEN_CURPAGELIST,
  DECREMEN_CURPAGELIST
} from './mutation-types'

export default {
  // 获取菜单列表
  [GET_MENU_LIST](state, { menuList }) {
    state.menuList = menuList
  },
  // 获取当前打开的菜单
  [GET_CURPAGE](state, { curPage }) {
    state.curPage = curPage
  },
  // 在打开的菜单列表添加一个菜单
  [INCREMEN_CURPAGELIST](state, { curPage }) {
    if(state.curPageList.indexOf(curPage) === -1) state.curPageList.push(curPage)
  },
  // 删除当前打开菜单列表的一个菜单
  [DECREMEN_CURPAGELIST](state, { curPage }) {
    var index = state.curPageList.indexOf(curPage)
    state.curPageList.splice(index, 1)
  }
}