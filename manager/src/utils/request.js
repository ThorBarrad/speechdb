import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken, removeToken } from '@/utils/auth'

// request interceptor
axios.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    const token = Vue.ls.get('Access-Token')
    console.log(token)
    config.crossDomain = true
    config.withCredentials = true
    if (token) {
      // config.headers['Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (response.status == 401) {
      removeToken()
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } else if (response.status !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // console.log("this is result")
      // console.log(res)
      return res
    }
  },
  error => {
    if (error.response) {
      const data = error.response.data
      const token = Vue.ls.get('ACCESS_TOKEN')
      if (error.response.status === 403) {
        Message.error({
          message: 'Forbidden',
          description: data.message
        })
      }
      if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
        Message.error({
          message: 'Unauthorized',
          description: 'Authorization verification failed'
        })
        window.localStorage.clear()
        if (token) {
          store.dispatch('logout').then(() => {
            
          })
        }
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      }
    }
    return Promise.reject(error)
  }
)

export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: process.env.VUE_APP_BASE_API + `${url}`
  })
}

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: process.env.VUE_APP_BASE_API + `${url}`,
    data: params,
    // transformRequest: [
    //   function(data) {
    //     let ret = ''
    //     for (const it in data) {
    //       ret +=
    //         encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //     }
    //     return ret
    //   }
    // ],
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const postJsonRequest = (url, params) => {
  return axios({
    method: 'post',
    url: process.env.VUE_APP_BASE_API + `${url}`,
    data: JSON.stringify(params),
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
}

// export default service
export const postDataFormRequest = (url, params) => {
  return axios({
    method: 'post',
    url: process.env.VUE_APP_BASE_API + `${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
