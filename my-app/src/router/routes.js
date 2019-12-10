import ShopCart from '../components/ShopCart/ShopCart'
import Personal from '../components/Personal/Personal'
import Order from '../components/Personal/Order/Order'

export default [
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
    redirect: '/personal'
  }
]