import Vue from 'vue'
import Router from 'vue-router'
import Eat from '../components/Eat/Eat.vue'
import Recipe from '../components/Eat/Recipe.vue'
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
      path: '/eat',
      
      component: Eat,
      meta:{
        isShow:true
      },
    },
        {
          path:'/eat/recipe', // 使用/:id 来占位,用来传递参数 
          name:'recipe',
          component:Recipe,
        /*   props: (route) => ({ id: route.params.id }) */
        }
      
    
  ]
})
