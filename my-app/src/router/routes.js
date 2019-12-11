import Home from '../components/home/home'
import Classify from '../components/classify/classify'
import Login from '../components/Login/Login'
import Eat from '../components/Eat/Eat.vue'
import Recipe from '../components/Eat/Recipe.vue'
import ShopCart from '../components/ShopCart/ShopCart'
import Personal from '../components/Personal/Personal'
import Order from '../components/Personal/Order/Order'
import Category from '../components/Category/Category.vue'
import FoodDetail from '../components/Category/FoodDetail.vue'
import Discuss from '../components/Category/Discuss.vue'

export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:"/classify",
    component:Classify
  },
  {
    path: '/eat',
    name: 'Eat',
    component: Eat
  },
  {
    path: '/eat/recipe',
    name: 'recipe',
    component: Recipe
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/personal/order',
    component:Order
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