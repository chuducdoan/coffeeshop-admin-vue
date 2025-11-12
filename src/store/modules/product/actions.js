export default {
  async fetchProducts(context, payload) {
    const startKey = payload.current ? `"${payload.current}"` : `"0"`;
    const response = await fetch(
      process.env.VUE_APP_API_URL +
        `products.json?limitToFirst=${payload.pageSize}&orderBy="$key"&&startAt=${encodeURIComponent(startKey)}`,
    );
    if (!response.ok) {
      throw new Error(response || 'Failed to fetch!');
    }
    const responseData = await response.json();
    const products = [];

    for (let key in responseData) {
      if (responseData[key] === null) {
        continue;
      }
      products.push(responseData[key]);
    }
    context.dispatch('fetchTotalProducts');
    context.commit('setData', { products });
  },

  async fetchTotalProducts(context) {
    const response = await fetch(
      process.env.VUE_APP_API_URL + `products.json?shallow=true`,
    );
    if (!response.ok) {
      throw new Error(response || 'Failed to fetch!');
    }
    const responseData = await response.json();
    const total = Object.keys(responseData || {}).length;
    context.commit('setTotal', total);
  },
};
