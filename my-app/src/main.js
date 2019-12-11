// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入样式重置
import './mock/mock-server'
import './assets/stylus/index.styl'
//解决移动端300毫秒延迟
import fastclick from 'fastclick'
//事件总线
Vue.prototype.$bus = new Vue()
//黄回到顶部
import VTop from './components/backToTop/ToTop.vue'
//vuex
import store from './store/index'
//对es6的一些api转义
import 'babel-polyfill'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入路由
//import router from './router/index.js'
Vue.config.productionTip = false


Vue.use(Vant)
Vue.component('v-top',VTop)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
  //router //注册路由
})
