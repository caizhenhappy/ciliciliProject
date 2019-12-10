import Vue from 'vue'
import Router from 'vue-router'
import Eat from '../components/Eat/Eat.vue'
// import routes from './routes'

Vue.use(Router)

export default new Router({

  //路由模式
  //mode:'history', //不带#


  routes: [
/*     {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/',
      name: 'Eat',
      component: Eat
    }
  ]
})
