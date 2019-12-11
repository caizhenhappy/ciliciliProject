// 引入路由组件
import Category from '../components/Category/Category.vue'
import FoodDetail from '../components/Category/FoodDetail.vue'
import Discuss from '../components/Category/Discuss.vue'
export default [
  {
    path:'/category',
    component:Category
  },
  {
    path:'/category/foodDetail/:id',
    component:FoodDetail,
    props: (route) => ({ id: route.params.id })
  },
  {
    path:'/category/discuss',
    component:Discuss
  }
]