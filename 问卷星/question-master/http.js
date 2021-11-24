// import axios from 'axios'
// import store from '@/store'

// /* 配置环境 */
// const instance = axios.create({
//   timeout: 10000, // 设置请求超时
//   headers: {
//     /* 设置post请求头信息 */
//     post: {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//     }
//   }
// })

// /* 请求拦截器 */
// instance.interceptors.request.use(config => {
//   const token = store.state.token || localStorage.getItem('tokenlo') // 获取token值
//   token && (config.headers.Authorization = token) // token存在则将token值携带在请求头上
//   return config // 请求放行
// })

// /* 响应拦截器 */
// instance.interceptors.response.use(response => {
//   /* 判断响应状态码是否为正确响应 */
//   if (response.status >= 200 && response.status < 300) {
//     return Promise.resolve(response.data) // 响应正确的Promise
//   }
//   return Promise.reject(response) // 响应错误的Promise
// }, error => {
//   let message = error.response.data
//   /* 判断是否为超时响应 */
//   if (error.message.includes('timeout')) {
//     /* 设置网络状态 */
//     store.dispatch('asyncSetNetwork', false)
//     message = '请求超时'
//   } else if (/Proxy Error/i.test(message)) {
//     message = '网络走丢了'
//   } else {
//     const start = (error.response.data).indexOf('<h1>')
//     const end = (error.response.data).lastIndexOf('</h1>')
//     message = message.slice(start + 4, end)
//   }
//   return Promise.reject(message)
// })

// export default instance