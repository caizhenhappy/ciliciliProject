// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入样式重置
import  './mock/mock-server'
import './assets/stylus/index.styl'
//解决移动端300毫秒延迟
import fastclick from 'fastclick'
//对es6的一些api转义
import 'babel-polyfill'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入路由
//import router from './router/index.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  //router //注册路由
})
