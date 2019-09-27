/*
ajax请求模块
*/
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET', baseUrl){
  return new Promise(function (resolve, reject) {
    let BASE_URL = 'mock'
    if(baseUrl !== undefined) BASE_URL = baseUrl
    let promise
    if(type === 'GET'){
      let paramStr = ''
      Object.keys(data).forEach(key => {
        paramStr += key + '=' + data[key] + '&'
      })
      if(paramStr){
        paramStr = '?' + paramStr.substr(0, paramStr.length - 1)
      }
      promise = axios.get(BASE_URL + url + paramStr)
    }else if(type === 'POST'){
      promise = axios.post(BASE_URL + url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}