// 引入路由组件
import  Header from '../components/Home/components/Header/Header.vue'
import Search from '../components/Home/components/Header/Search/Search.vue'

// 暴露路由的数组配置
export default [
  {
    path: '/Header',
    component: Header
  },
  {
    path: '/Search',
    component: Search 
  }
]