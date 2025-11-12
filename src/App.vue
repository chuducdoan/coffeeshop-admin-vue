<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isAutoLogout() {
      return this.$store.getters['auth/isAutoLogout'];
    },
  },
  watch: {
    isAutoLogout(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.$router.replace('/login?');
      }
    },
  },
  created() {
    this.$store.dispatch('auth/tryLogin');
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Public Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
