import Mock from 'mockjs'
import feature from './feature.json'
import homeTab from './lk001.json'
//获取分类
import category from './homeApi/categories.json'

Mock.mock('/featrue', { code: 0, data: feature })
Mock.mock('/homeTab', { code: 0, data: homeTab })

Mock.mock(
  '/category',{code:0,data:category.data}
)
