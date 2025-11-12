import { createStore } from 'vuex';
import authModule from './modules/auth/index.js';
import productModule from './modules/product/index.js';

const store = createStore({
  modules: {
    auth: authModule,
    product: productModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
});

export default store;
