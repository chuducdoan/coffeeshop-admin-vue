import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
    };
  },
  mutations,
  actions,
  getters,
};
