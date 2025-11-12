import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      total: 0,
      columns: ['id', 'name', 'price', 'quantity', 'thumbnailUrl'],
    };
  },
  mutations,
  actions,
  getters,
};
