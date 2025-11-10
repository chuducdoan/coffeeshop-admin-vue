<template>
  <div class="bg-white py-5 rounded-xl overflow-x-auto">
    <table class="min-w-full text-left border-collapse">
      <!-- Header -->
      <thead class="text-gray-600 text-sm">
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            class="px-4 py-3 font-medium"
            :class="{ 'text-center': col.key === 'actions' }"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <!-- Body -->
      <tbody class="divide-y divide-gray-200 text-sm text-gray-700">
        <!-- Hiển thị empty state -->
        <tr v-if="dataSource.length === 0">
          <td :colspan="columns.length" class="text-center py-6 text-gray-400">
            No data found
          </td>
        </tr>
        <template v-else>
          <!-- Row -->
          <tr
            v-for="(value, index) in dataSource"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td v-for="col in columns" :key="col.key" class="px-4 py-3">
              <slot :name="col.key" :data="value">
                {{ value[col.key] ?? '-' }}
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    dataSource: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
table thead {
  background-color: #f4faff;
}
</style>
