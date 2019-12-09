import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login.vue'
// import routes from './routes'

Vue.use(Router)

export default new Router({

  //路由模式
  //mode:'history', //不带#


  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
