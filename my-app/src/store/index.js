import Vue from 'vue'
import Vuex from 'vuex'
//声明使用vuex
Vue.use(Vuex)
//引入vuex 对象
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

//引入模块
import Login from './modules/Login.js'

//暴露
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    Login
  }
})
