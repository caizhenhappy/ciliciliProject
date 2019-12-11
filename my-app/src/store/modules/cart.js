import { ADD_CART, RESET_CART } from '../mutation-type'

import Vue from 'vue'
/**
 * cartItem需要
 * _id  id 
 * name  name
 * price  price
 * count   
 * weight  stock_number
 * imageUrl  small_image
 * isSelect : true
 * 
 */
const state = {
  cartList: []
}
const mutations = {
   [ADD_CART] (state, cartItem) {
        if (!state.cartList.length) {
          cartItem.count = 1
          state.cartList.unshift(cartItem)
        } else {
          state.cartList.forEach(item => {
            if (item.id !== cartItem.id) {
              cartItem.count = 1
              state.cartList.unshift(cartItem)
            } else {
              item.count++
            }
          })
        }
      },
  [RESET_CART](state) {
    state.cartList = []
  }
}

const actions = {

}


const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}