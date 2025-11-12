<template>
  <textarea></textarea>
</template>

<script>
export default {
  props: {
    isSearch: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  outline: none;
  padding: 12px;
  border-radius: 8px;
  color: #5b6b79;
  font-weight: 400;
  font-family: inherit;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #dbe0e5;
  font-size: 14px;
}

textarea:focus {
  color: #5b6b79;
  background-color: #ffffff;
  border-color: #04a9f5;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(4, 169, 245, 0.2);
}

textarea:hover {
  background-color: #f8f9fa;
}
</style>
