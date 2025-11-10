<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="radio"
      :value="value"
      :checked="value === modelValue"
      class="hidden peer"
      @change="$emit('update:modelValue', value)"
    />
    <span
      class="w-5 h-5 mr-2 bg-white inline-block rounded-full border border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 relative transition"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="none"
        viewBox="0 0 24 24"
        class="absolute inset-0 m-auto rounded-full text-white"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 11.917 9.724 16.5 19 7.5"
        />
      </svg>
    </span>
    <span class="text-gray-700"><slot></slot></span>
  </label>
</template>

<script setup>
defineProps({
  // eslint-disable-next-line
  modelValue: String,
  // eslint-disable-next-line
  value: String,
});
defineEmits(['update:modelValue']);
</script>

<style scoped></style>
