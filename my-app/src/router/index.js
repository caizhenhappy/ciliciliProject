import Vue from 'vue'
import Router from 'vue-router'
// import routes from './routes'
import routes from './routes'
Vue.use(Router)

export default new Router({
  //路由模式
  mode:'history', //不带#
  routes
})
