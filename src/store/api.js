import axios from 'axios'
// import store from './index.js'
var url = process.env.NODE_ENV !== 'production' ? 'localhost:3000' : 'localhost:3000'

var asyncGet = (option, cb) => {
  var options = Object.assign(option, {
    timeout: 10000
  })
  axios(options)
    .then((res) => {
      // 数据回来以后判断请求状态
      if (res.status === 200) {
        cb(res.data)
      }
    })
    .catch((error) => {
      console.log('fail axios:' + JSON.stringify(error))
      cb(error)
      return Promise.reject(error)
    })
}
export default {
  login: (cb, query) => {
    asyncGet({
      url: url + '/user/login',
      method: 'POST',
      params: query
    }, cb)
  }
}
