import Home from '../components/home/home'
import Classify from '../components/classify/classify'
import Detail from '../components/detail/detail.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: "/classify",
    component: Classify,
    meta: {
      isShow: true
    }
  },
  {
    path: '/detail/:id',
    component: Detail,
    props: (route) => ({ id: route.params.id })
  },
  {
    path: '/',
    redirect: '/home',
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