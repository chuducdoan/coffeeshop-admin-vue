export default {
  products(state) {
    return state.products;
  },
  total(state) {
    return state.total;
  },
  columns(state) {
    const columns =
      state.columns &&
      state.columns.map((item) => ({
        key: item,
        label: item,
      }));
    return columns;
  },
};
