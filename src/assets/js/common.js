export default {
  // 设置一个LocalStore
  setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  // 获取一个LocalStore
  getStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  // 删除一个LocalStore
  removeStorage(key) {
    localStorage.removeItem(key)
  }
}
