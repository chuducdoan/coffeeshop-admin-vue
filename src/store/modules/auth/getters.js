export default {
  isAuthenticated(state) {
    return !!state.token;
  },
  isAutoLogout(state) {
    return state.isAutoLogout;
  },
};
