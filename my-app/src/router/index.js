// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes 
import routes from './routes'
import Home from '@/components/Home/Home'
// 引入Search
import Search from '../components/Home/components/Header/Search/Search.vue'

// 声明使用的插件
Vue.use(VueRouter)

export default new VueRouter({

  //路由模式
  mode:'history', //不带#
  routes
})
