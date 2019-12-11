import {
  SAVE_USER,
  SET_USER,
  SAVE_TOKEN,
  SET_TOKEN
} from "../mutation-type.js";

const state = {
  userInfo: {}, //保存用户信息
  oken: localStorage.getItem("token_key")
};

const mutations = {
  //保存用户信息
  [SAVE_USER](state, user) {
    state.userInfo = user;
  },
  //保存token
  [SAVE_TOKEN](state, token) {
    state.token = token;
  },
  //重置用户信息
  [SET_USER](state) {
    state.userInfo = {};
  },
  //重置token
  [SET_TOKEN](state) {
    state.token = "";
  }
};

const actions = {
  //保存用户信息 登录成功后 保存用户信息
  saveUser({ commit }, user) {
    //取出token
    const token = user.token;
    //保存token到vuex (vuex相当于存在内存,关闭浏览器就销毁了)
    commit(SAVE_TOKEN, token);
    //保存token到localStorage (vuex相当于存在硬盘,关闭浏览器非人为删除,并在有效期内 是持久化的存在硬盘中)
    localStorage.setItem("token_key", token);
    //上面已经将token保存了,没必要再将token保存到用户信息中去,所以要先删掉,再保存到用户信息中去
    //非必须操作,删掉仅仅是为了user跟token脱离关系. 没必要多存一次token
    delete user.token;
    const userInfo1 = user.data;
    console.log(userInfo1);
    //保存用户信息
    commit(SAVE_USER, userInfo1);
  },
  //重置用户 (退出)
  setUser({ commit }) {
    commit(SET_USER);
    commit(SET_TOKEN);
    //清楚localStorage里的token
    localStorage.removeItem("token_key");
  },
  //自动登录
  async aotoLogin({ commit, state }) {
    //发送请求  先判断是否有token,如果没有token无法自动登录 所以没必要去发送请求
    if (state.token) {
      const result = await reqAotoLogin();
      //如果请求成功
      if (result.code === 0) {
        const data = result.data;
        //保存用户信息
        commit(SAVE_USER, data);
      }
    }
    //如果没有token 应该跳转到login页面 让其登录
    //router.replace('/login')
  }
};

export default {
  state,
  mutations,
  actions
};
