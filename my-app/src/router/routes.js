import Home from '../components/home/home'
import Classify from '../components/classify/classify'
import Login from '../components/Login/Login'
import Eat from '../components/Eat/Eat.vue'
import ShopCart from '../components/ShopCart/ShopCart'
import Personal from '../components/Personal/Personal'
import Order from '../components/Personal/Order/Order'

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