<template>
  <DatePicker
    v-model:value="date"
    type="date"
    placeholder="dd/mm/yyyy"
    format="DD/MM/YYYY"
    :clearable="true"
    placement="bottom-start"
    :append-to-body="false"
  />
</template>

<script setup>
import { ref } from 'vue';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css'; // css bắt buộc

const date = ref(null);
</script>

<style>
.mx-datepicker {
  width: 100%;
}

.mx-datepicker .mx-input {
  height: 42px;
}
</style>
