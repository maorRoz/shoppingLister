import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: Array<{ message: string }>()
  },
  mutations: {
    addItem(state, value: string) {
      state.items.push({ message: value });
    },
    removeItem(state, index: number) {
      state.items = state.items.filter((item, i) => i !== index);
    }
  },
  actions: {
    addItem(context, value) {
      context.commit('addItem', value);
    },
    removeItem(context, value) {
      context.commit('removeItem', value);
    }
  },
  modules: {}
});
