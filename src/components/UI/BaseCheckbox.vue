<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      class="hidden peer"
      @change="onChange"
    />
    <span class="box-radio w-5 h-5 mr-2 inline-block transition">
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
    <span class="text-checkbox"><slot></slot></span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

function onChange(event) {
  emit('update:modelValue', event.target.checked);
}
</script>

<style scoped>
.box-radio {
  /* background-color: #04a9f5; */
  position: relative;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.peer:checked + .box-radio {
  border-color: #04a9f5;
  background: #04a9f5;
}

.peer:disabled + .box-radio {
  opacity: 0.6;
  cursor: not-allowed;
}

.text-checkbox {
  font-size: 14px;
  font-weight: 200;
  color: #39456f;
}
</style>
