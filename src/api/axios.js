import axios from 'axios'
import config from '../config'
// 判断运行环境开发or生产
const baseUrl = process.env.NODE_ENV === 'development'?config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
   constructor(baseUrl){
      this.baseUrl = baseUrl
   }  
   // 定义返回配置对象的函数
   getInsideConfig(){
      const config = {
         baseUrl: this.baseUrl,
         header:{}
      }
      return config
   }
   // 定义拦截器函数
   interceptors(instance){
      instance.interceptors.request.use(function (config) {
         // 在发送请求之前做些什么
         return config;
       }, function (error) {
         // 对请求错误做些什么
         return Promise.reject(error);
       });
     
     // 添加响应拦截器
     instance.interceptors.response.use(function (response) {
         // 对响应数据做点什么
         console.log(response,'@@');
         return response;
       }, function (error) {
         // 对响应错误做点什么
         console.log(error,'@@');

         return Promise.reject(error);
       });
     

   }
   // 定义请求函数
   request(options){
      // 创建axios实例
      const instance = axios.create()
      // 获取配置对象,及传入的配置对象
      options = {...this.getInsideConfig(),...options};
      // 调用拦截器
      this.interceptors(instance)
      // 返回
      return instance(options)
   } 

}
export default new HttpRequest(baseUrl)