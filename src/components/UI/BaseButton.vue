<template>
  <button :class="[size, buttonFullWidth, color]">
    <slot></slot>
  </button>
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
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #1b5299;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
