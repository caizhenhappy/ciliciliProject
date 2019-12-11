import Mock from 'mockjs'
import feature from './feature.json'
import homeTab from './lk001.json'

// 引入data数据
import navItem from './datas/data.json'
import flashFood from "./datas/homeApi.json"
//获取分类
import category from './homeApi/categories.json'

Mock.mock('/featrue', { code: 0, data: feature })
Mock.mock('/homeTab', { code: 0, data: homeTab })

Mock.mock('/navItem', { code: 0, data: navItem });
Mock.mock('/flashFood', { code: 0, data: flashFood })

Mock.mock(
  '/category',{code:0,data:category.data}
)
