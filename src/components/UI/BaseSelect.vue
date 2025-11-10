<template>
  <div class="relative inline-block text-left w-full">
    <!-- Button -->
    <button
      class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 selectbox-custom"
      @click="open = !open"
    >
      <span> {{ selected.label }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-gray-500 selectbox-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="open"
      class="absolute w-40 rounded-lg border bg-white shadow-lg z-10"
    >
      <ul class="dropdown-menu">
        <li
          v-for="opt in options"
          :key="opt.value"
          class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
          :class="{ active: selected.value === opt.value }"
          @click="select(opt)"
        >
          {{ opt.label }}
        </li>
      </ul>
    </div>

    <div v-if="open" class="dropdown-backdrop" @click="open = false"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);
const selected = ref({ label: 'Chọn option', value: null });

const options = [
  { label: 'Option 1Option 1Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
];

function select(opt) {
  selected.value = opt;
  open.value = false;
}
</script>

<style scoped>
.selectbox-custom {
  background-color: #f5f4f9;
  height: 35px;
  width: 100%;
  font-size: 15px;
  color: #777777;
  border-radius: 5px;

  padding-right: 24px;
}

.selectbox-custom span {
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.dropdown-menu {
  padding: 6px;
  font-size: 15px;
}

.dropdown-menu li:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.dropdown-menu li.active {
  background-color: #e6f4ff;
  color: #000;
  font-weight: 500;
}

.dropdown-backdrop {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.selectbox-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
