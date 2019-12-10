
import Vue from 'vue'
import App from './App'
// 引入路由并注册
import router from './router'
//引入样式重置
import './assets/stylus/index.styl'
import Vant from 'vant';
// 引入Vant-UI
import { Swipe, SwipeItem } from 'vant';

//解决移动端300毫秒延迟
// import fastclick from 'fastclick'

import 'vant/lib/index.css';

// import 'lib-flexible/flexible'
//对es6的一些api转义
import 'babel-polyfill'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  router
})
