export default {
  setData(state, payload) {
    state.products = payload.products;
  },
  setTotal(state, payload) {
    state.total = payload;
  },
};
