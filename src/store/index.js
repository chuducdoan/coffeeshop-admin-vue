import { createStore } from 'vuex';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    auth: authModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
});

export default store;
