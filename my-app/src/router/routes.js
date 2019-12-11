import Home from '../components/home/home'
import Classify from '../components/classify/classify'
import Login from '../components/Login/Login'
import Eat from '../components/Eat/Eat.vue'
import ShopCart from '../components/ShopCart/ShopCart'
import Personal from '../components/Personal/Personal'
import Order from '../components/Personal/Order/Order'
import Category from '../components/Category/Category.vue'
import FoodDetail from '../components/Category/FoodDetail.vue'
import Discuss from '../components/Category/Discuss.vue'

export default [
  {
    path: '/login',
    component: Login,
    meta:{
      isShow:true
    }
  },
  {
    path: '/home',
    component: Home,
    meta:{
      isShow:true
    }
  },
  {
    path:"/classify",
    component:Classify,
    meta:{
      isShow:true
    }
  },
  {
    path: '/eat',
    name: 'Eat',
    component: Eat,
    meta:{
      isShow:true
    }
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{
      isShow:true
    }
  },
  {
    path:'/personal',
    component:Personal,
    meta:{
      isShow:true
    }
  },
  {
    path:'/personal/order',
    component:Order,
    meta:{
      isShow:false
    }
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/category/foodDetail',
    component:FoodDetail
  },
  {
    path:'/category/discuss',
    component:Discuss
  },
  {
    path:'/',
    redirect:'/login',
  }
  // {
  //   path:"/eat",
  //   component:Eat
  // },
  // {
  //   path:"/shop",
  //   component:Shop
  // },
  // {
  //   path:"/myself",
  //   component:Myself
  // }

]