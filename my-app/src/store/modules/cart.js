import { ADD_CART, RESET_CART, DEL_CART, UPDATE_COUNT } from '../mutation-type.js'
/**
 * cartItem需要
 * id
 * name
 * price
 * count
 * weight
 * imageUrl
 * isSelect
 * 
 */
const state = {
  cartList: [
    // {
    //   id: '12323123',
    //   name: '祢豆子',
    //   weight: '130g/袋',
    //   price: 2.39,
    //   image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3739812277,923348386&fm=26&gp=0.jpg',
    //   count: 1,
    //   isSelect: true
    // },
    // {
    //   id: '11223123',
    //   name: '祢豆子',
    //   weight: '130g/袋',
    //   price: 2.39,
    //   image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3739812277,923348386&fm=26&gp=0.jpg',
    //   count: 23,
    //   isSelect: true
    // },
    // {
    //   id: '1232423',
    //   name: '祢豆子',
    //   weight: '130g/袋',
    //   price: 2.39,
    //   image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3739812277,923348386&fm=26&gp=0.jpg',
    //   count: 1,
    //   isSelect: true
    // },
    // {
    //   id: '163123',
    //   name: '祢豆子',
    //   weight: '130g/袋',
    //   price: 2.39,
    //   image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3739812277,923348386&fm=26&gp=0.jpg',
    //   count: 3,
    //   isSelect: true
    // },
    // {
    //   id: '12633',
    //   name: '祢豆子',
    //   weight: '130g/袋',
    //   price: 2.39,
    //   image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3739812277,923348386&fm=26&gp=0.jpg',
    //   count: 1,
    //   isSelect: true
    // },
    // {
    //   id: '112323',
    //   name: '祢豆子',
    //   weight: '130g/袋',
    //   price: 2.39,
    //   image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3739812277,923348386&fm=26&gp=0.jpg',
    //   count: 4,
    //   isSelect: true
    // },

  ]
}
const mutations = {
  [ADD_CART] (state, cartItem) {
    if (!state.cartList.length) {
      cartItem.count = 1
      state.cartList.unshift(cartItem)
    } else {
      state.cartList.forEach(item => {
        if (item.id !== cartItem.id) {
          cartItem.count = 1
          state.cartList.unshift(cartItem)
        } else {
          item.count++
        }
      })
    }
  },
  [RESET_CART] (state) {
    state.cartList = []
  },
  [DEL_CART] (state, id) {
    const index = state.cartList.findIndex(item => item.id === id)
    state.cartList.splice(index, 1)
  },
  [UPDATE_COUNT] (state, { count, id }) {
    state.cartList.forEach(cartItem => {
      if (cartItem.id === id) {
        cartItem.count = count
      }
    })
  }
}

const actions = {
  addCart ({ commit }, cartItem) {
    console.log('action调用了')
    commit(ADD_CART, cartItem)
  },
  resetCart ({ commit }) {
    commit(RESET_CART)
  },
  delCart ({ commit }, id) {
    commit(DEL_CART, id)
  },
  updateCount ({ commit }, { count, id }) {
    commit(UPDATE_COUNT, { count, id })
  }
}





const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}