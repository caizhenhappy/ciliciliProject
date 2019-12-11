import Vue from 'vue'
import Vuex from 'vuex'

import { reqHomeTab } from "../api/index"

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    //详细些数据
    shop:{}
  },
  mutations: {
    "changshop"(state, shop) {
      state.shop = shop
    }
  },
  actions: {
   async getShop({ commit }) {
    const result =  await reqHomeTab()
    commit('changshop',result.data.data.cate[0].products)
    }
  }
})
