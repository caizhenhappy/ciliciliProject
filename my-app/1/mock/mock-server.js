//引入Mock
import Mock from 'mockjs'

import allScene from './datas/recipe/allScene.json'

import menulist from './datas/recipe/menulist/lk01.json'

//拦截地址,产生数据
//接口地址  '/menu' , '/ratings' , '/info'
Mock.mock(
  '/allScene',{code:0,data:allScene.data}
)
Mock.mock('/menulist',{code:0,data:menulist.data})

