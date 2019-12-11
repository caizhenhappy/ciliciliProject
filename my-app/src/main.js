// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入样式重置
import './assets/stylus/index.styl'
//解决移动端300毫秒延迟
import fastclick from 'fastclick'
//对es6的一些api转义
import 'babel-polyfill'
//引入路由
//import router from './router/index.js'
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入mock挂载
import mock from './mock/mock-server.js'
// 引入store
import store from '../src/store/index'
Vue.use(Vant);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  //router //注册路由
})
