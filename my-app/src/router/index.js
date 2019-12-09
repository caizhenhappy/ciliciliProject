import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import routes from './routes'

Vue.use(Router)

export default new Router({

  //路由模式
  //mode:'history', //不带#


  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
