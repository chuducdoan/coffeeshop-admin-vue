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

    const expiresIn = responseData.expiresIn;
    const expirationDate = +expiresIn + new Date().getTime();

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('expirationDate', expirationDate);
    localStorage.setItem('userId', responseData.localId);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) return;

    context.commit('setUser', {
      token,
      userId,
    });
  },
};
