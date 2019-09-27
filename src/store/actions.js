import {
  GET_MENU_LIST,
  GET_CURPAGE,
  INCREMEN_CURPAGELIST,
  DECREMEN_CURPAGELIST
} from './mutation-types'

import {
  getMenuList
} from '../api'

export default {
  // 获取菜单列表
  async getMenuList({ commit }) {
    const { menuList } = await getMenuList()
    commit(GET_MENU_LIST, { menuList })
  },
  // 获取当前打开的菜单
  getCurPage({ commit }, curPage) {
    commit(GET_CURPAGE, { curPage })
  },
  // 修改当前打开页面列表
  updateCurPageList({ commit }, { curPage, isAdd }) {
    if (isAdd === undefined) isAdd = true
    if(isAdd) {
      commit(INCREMEN_CURPAGELIST, { curPage })
    } else {
      commit(DECREMEN_CURPAGELIST, { curPage })
    }
  }
}