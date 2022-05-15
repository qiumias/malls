import axios from 'axios'
// 方式4
export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        // baseURL: 'http://123.207.32.32:8000',
        baseURL: 'http://106.54.54.237:8000/api/mn',
        timeout: 5000
    })

    instance.interceptors.request.use(res => {
        return res
    }, err => {
        console.log(err);
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}