import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [{
        product_index: 1,
        product_name: 'iPhone',
        category: 'phone'
      }]
    }
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    }
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  },
  actions: {
    increment (context) {
      //비동기 처리 로직 수행 가능
      context.commit('increment')
    }
  }
})

export default store;