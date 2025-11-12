<template>
  <div v-if="isSearch" class="input-search">
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </i>
    <input type="text" />
    <button>tìm kiếm</button>
  </div>
  <input v-else type="text" class="input-base" />
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
.input-search {
  height: 42px;
  width: 250px;
  position: relative;
}

.input-search input {
  height: 100%;
  padding: 10px 40px;
}

input,
.input-base {
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

input:focus {
  color: #5b6b79;
  background-color: #ffffff;
  border-color: #04a9f5;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(4, 169, 245, 0.2);
}

input:hover {
  background-color: #f8f9fa;
}

.input-search i {
  position: absolute;
  top: 11px;
  left: 14px;
  font-size: 20px;
  opacity: 0.4;
}

.input-search button {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: #ebedef;
  color: #39465f;
  border-color: #ebedef;
  font-size: 14px;
}

.input-search button:hover {
  background: #39465f;
  color: #fff;
  border-color: #39465f;
}
</style>
