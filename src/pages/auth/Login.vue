<template>
  <div class="login-page" :style="bgStyle">
    <div class="bg-overlay" aria-hidden="true"></div>
    <div class="login-card">
      <h2 class="title">Sign In</h2>

      <form novalidate @submit.prevent="onSubmit">
        <div class="form-group">
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            :class="{ invalid: errors.email }"
            placeholder="Email"
            autocomplete="username"
            @blur="handleBlur"
          />
          <div v-if="errors.email" class="error">{{ errors.email }}</div>
        </div>

        <div class="form-group">
          <input
            id="password"
            v-model="form.password"
            type="password"
            :class="{ invalid: errors.password }"
            placeholder="Password"
            autocomplete="current-password"
            @blur="handleBlur"
          />
          <div v-if="errors.password" class="error">{{ errors.password }}</div>
        </div>

        <div class="form-row">
          <label class="remember">
            <input v-model="remember" type="checkbox" />
            <span>Remember me</span>
          </label>

          <a class="forgot" @click.prevent="onForgot">Forgot your password?</a>
        </div>

        <button type="submit" class="btn" :disabled="loading">
          <span v-if="loading">Signing in...</span>
          <span v-else>Sign in</span>
        </button>
      </form>

      <div v-if="submitError" class="submit-error">{{ submitError }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      remember: false,
      errors: {
        email: '',
        password: '',
      },
      loading: false,
      submitError: '',
    };
  },

  computed: {
    bgStyle() {
      try {
        // Use webpack alias @ to resolve image in src/assets
        const img = require('@/assets/images/bg-login.jpg');
        return {
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        };
      } catch (e) {
        // If image not found or require fails, return empty style
        return {};
      }
    },
  },
  created() {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      this.form.email = rememberedEmail;
      this.remember = true;
    }
  },
  methods: {
    validate() {
      this.errors.email = '';
      this.errors.password = '';
      let valid = true;

      if (!this.form.email) {
        this.errors.email = 'Email is required.';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = 'Email is invalid.';
        valid = false;
      }

      if (!this.form.password) {
        this.errors.password = 'Password is required.';
        valid = false;
      }

      return valid;
    },
    async onSubmit() {
      if (!this.validate()) {
        return;
      }

      this.loading = true;
      this.submitError = '';

      try {
        await this.$store.dispatch('auth/login', {
          email: this.form.email,
          password: this.form.password,
        });
        const redirectUrl = '/' + (this.$route.query.redirect || 'home');
        this.$router.replace(redirectUrl);
        if (this.remember) {
          localStorage.setItem('rememberedEmail', this.form.email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
      } catch (error) {
        this.submitError =
          error.message || 'Failed to sign in. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    onForgot() {
      alert('Redirecting to password recovery...');
    },

    handleBlur(e) {
      const field = e.target.id;
      if (field === 'email' || field === 'password') {
        this.validate();
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fb;
  padding: 24px;
  /* Background image is set inline via computed `bgStyle` to avoid CSS loader/alias issues. */
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  /* backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px); */
  z-index: 0;
  opacity: 0.4;
}

.login-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 500px;
  background: #fff;
  border-radius: 8px;
  padding: 28px;
  /* Brighter, more pronounced shadow for emphasis */
  box-shadow:
    0 12px 30px rgba(29, 39, 64, 0.12),
    0 4px 8px rgba(29, 39, 64, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.title {
  margin: 16px 0 32px;
  font-size: 25px;
  color: rgba(45, 52, 72, 0.75);
  text-align: center;
  font-weight: 800;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 16px;
  color: #374151;
  margin-bottom: 6px;
}

input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 0.47rem 0.75rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 0.25rem;
  border: 1px solid #eff2f7;
  outline: none;
}

input[type='email']:focus,
input[type='password']:focus {
  border-color: #87cef9;
}

input.invalid {
  border-color: #f87171;
  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.06);
}

.error {
  color: #ef4444;
  font-size: 14px;
  margin-top: 6px;
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0 32px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #374151;
}

.forgot {
  color: #2563eb;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;
}

.btn {
  width: 100%;
  padding: 10px 14px;
  background: #007986;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-error {
  margin-top: 12px;
  color: #992222;
  font-size: 13px;
  text-align: center;
}
</style>
