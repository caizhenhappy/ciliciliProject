// 引入axios
import axios from "axios";
// 引入qs---将对象数据转UrlEncoding
import qs from "qs";
//引入store
import store from "../store";
/* import { Toast } from 'mint-ui' */
import router from "../router";
// 添加请求拦截器
axios.interceptors.request.use(config => {
  const { method, data } = config;
  // 判断,method中是不是POST请求,并且data应该是一个对象----->urlEncoding形式
  if (method.toUpperCase() === "POST" && data instanceof Object) {
    config.data = qs.stringify(data);
  }
  //判断当前请求是否需要TOKEN
  if (config.headers.needToken) {
    const token = store.state.user.token;
    if (!token) {
      const error = new Error("请重新登录");
      error.status = 401;
      throw error;
    } else {
      config.headers.authorization = token;
    }
  }
  return config;
});
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // 请求的错误
    if (!error.response) {
      if (error.status === 401) {
        Toast(error.message);
        if (router.currentRoute.path != "/Login") {
          router.replace("/Login");
        }
      }
    } else {
      //响应错误
      const status = error.response.status;
      if (status === 401) {
        Toast(error.response.message);
        store.dispatch("quitUser");
        router.replace("/Login");
      } else if (status === 404) {
        Toast("没有资源");
      } else {
        Toast("请求错误" + error.message);
      }
    }
    return new Promise(() => {});
  }
);
// 暴露axios
export default axios;
