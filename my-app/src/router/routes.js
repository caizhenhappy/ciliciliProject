import Home from '../components/home/home'
import Classify from '../components/classify/classify'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path:"/classify",
    component:Classify
  },{
    path:'/',
    redirect:'/home',
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