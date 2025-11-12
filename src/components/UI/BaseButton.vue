<template>
  <button v-if="!link" :class="[mode, buttonFullWidth]" class="btn">
    <slot></slot>
  </button>
  <router-link v-else :to="to" class="btn">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: '',
    },

    isFull: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
      required: false,
    },
    to: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    buttonFullWidth() {
      return this.isFull ? 'full-width' : '';
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 0.6rem 1.5rem;
  font-family: inherit;
  background-color: #04a9f5;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 8px;
  gap: 4px;
  transition: all 0.2s ease-out;
}

.btn:hover {
  background-color: #0390d0;
  border-color: #0387c4;
}

.lg {
  padding: 29px;
  font-size: 18px;
  height: 60px;
  border-radius: 50px;
}

.sm {
  height: 20px;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 10px;
  /* padding: 0; */
}

.full-width {
  width: 100%;
}

.secondary {
  background-color: inherit;
  border: 1px solid #000;
  border-radius: 10px;
  gap: 10px;
  color: #000;
  font-size: 13.6px;
}

.outline {
  color: #39465f;
  background-color: #fff;
  border: 1px solid #39465f;
  outline: none;
}

.outline:hover {
  background-color: #39465f;
  color: #fff;
}
</style>
