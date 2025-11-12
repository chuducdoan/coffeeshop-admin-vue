import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      isAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};
