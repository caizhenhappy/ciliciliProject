import {ADD_ORDER,DEL_ORDER} from '../mutation-type'
/**
 * order需要
 * product---->cart
 * time----时间+标识
 * account
 * allCount
 * 
 */
const state = {
  orders:[]
}
const mutations = {
  [ADD_ORDER](state,order){
    state.orders.unshift(order)
  },
  [DEL_ORDER](state,time){
    const index = state.orders.findIndex(item=>{
      return item.time===time
    })
    state.orders.splice(index,1)
  }
}

const actions = {
  addOrder({commit},order){
    commit(ADD_ORDER,order)
  },
  delOrder({commit},time){
    commit(DEL_ORDER,time)
  }
}





const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}