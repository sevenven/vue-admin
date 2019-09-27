// 接口请求函数
import ajax from './ajax'

// 获取菜单列表
export const getMenuList = () => ajax('/menu.json')
// 获取表格列表
export const getGoodsList = () => ajax('/goods.json')