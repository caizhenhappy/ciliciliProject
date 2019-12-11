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
// 全局引入rem
import './rem'
//搞不好 
import mock from  './mock/mock-server.js' 

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,  //预加载高度比例
  loading: 'http://img4.imgtn.bdimg.com/it/u=4061390949,2489050853&fm=26&gp=0.jpg',  //预加载图片
  attempt: 1  //尝试加载图片数量
})

import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

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
