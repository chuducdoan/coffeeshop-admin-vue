let timer;

export default {
  async login(context, payload) {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_KEY_FIREBASE}`;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData, response);
      const error = new Error(responseData.error.message || 'Failed to fetch!');
      throw error;
    }

    const expiresIn = responseData.expiresIn * 1000;
    const expirationDate = +expiresIn + new Date().getTime();

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('expirationDate', expirationDate);
    localStorage.setItem('userId', responseData.localId);

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationDate = localStorage.getItem('expirationDate');
    if (!token) return;
    const expiresIn = +expirationDate - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token,
      userId,
    });
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    clearTimeout(timer);
    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },

  autoLogout(context) {
    console.log('auto logout');
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },
};
