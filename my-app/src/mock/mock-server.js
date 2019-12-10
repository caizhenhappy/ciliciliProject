//引入Mock
import Mock from 'mockjs'
// 引入category 的数据
import category from './homeApi/categories.json'
// 引入食物分类的数据
import foodList from './homeApi/categoriesdetail/lk001.json'

//拦截地址,产生数据
//接口地址  '/menu' , '/ratings' , '/info'
Mock.mock(
  '/category',{code:0,data:category.data}
)
Mock.mock('/foodList',{code:0,data:foodList})

//拦截地址,产生数据
//接口地址  '/menu' , '/ratings' , '/info'
// Mock.mock('/menu', {
//   code: 0,
//   data: data.menu
// })
// Mock.mock('/score', {
//   code: 0,
//   data: data.ratings
// })
// Mock.mock('/info', {
//   code: 0,
//   data: data.info
// })