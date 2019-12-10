import Home from '../components/home/home'
import Classify from '../components/classify/classify'
import Login from '../components/Login/Login'
import Eat from '../components/Eat/Eat.vue'

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