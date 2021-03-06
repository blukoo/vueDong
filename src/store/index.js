import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    checkPop: false,
  },
  mutations: {
    SET_POP(state, flag) {
      console.log(state, flag);
      state.checkPop = flag;
    },
  },
});
