<template>
  <div>
    <div class="bg-white pb-5">
      <table class="min-w-full text-left border-collapse">
        <!-- Header -->
        <thead>
          <tr>
            <th
              v-for="col in headerColumns"
              :key="col.key"
              :class="{ 'text-center': col.key === 'actions' }"
            >
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <!-- Body -->
        <tbody>
          <tr v-if="load">
            <td :colspan="headerColumns.length">
              <base-snipper v-if="true"></base-snipper>
            </td>
          </tr>
          <!-- Hiển thị empty state -->
          <template v-else>
            <tr v-if="dataSource.length === 0">
              <td
                :colspan="headerColumns.length"
                class="text-center py-6 text-gray-400"
              >
                No data found
              </td>
            </tr>
            <template v-else>
              <!-- Row -->
              <tr v-for="(value, index) in dataSource" :key="index">
                <td
                  v-for="(col, colIndex) in headerColumns"
                  :key="col.key"
                  class="px-4 py-3"
                >
                  <slot :name="col.key" :data="value">
                    <!-- giá trị default nếu component cha ko cung cấp template cho slot -->
                    {{ value[col.key] ?? '-' }}
                  </slot>
                  <div
                    v-show="colIndex === headerColumns.length - 1"
                    class="prod-actions"
                  >
                    <ul>
                      <li class="detail">
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </i>
                      </li>
                      <li class="edit">
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </i>
                      </li>
                      <li class="delete">
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </i>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </template>
          </template>
        </tbody>
      </table>
    </div>
    <div class="pb-5 px-5">
      <Base-pagination
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        @update-page-size="$emit('update:pageSize', $event)"
        @update-current-page="$emit('update:currentPage', $event)"
        @change="handleChangePagination"
      ></Base-pagination>
    </div>
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
    pageSize: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    load: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: ['change', 'update:pageSize', 'update:currentPage'],
  data() {
    return {};
  },
  computed: {
    // headerColumns excludes the actions column so we don't need v-if on <th>
    headerColumns() {
      return this.columns.filter((c) => c.key !== 'actions');
    },
  },
  methods: {
    handleChangePagination(page, size) {
      this.$emit('change', page, size);
    },
  },
};
</script>

<style scoped>
table thead th,
table tbody td {
  vertical-align: middle;
  padding: 0.7rem 0.75rem;
  z-index: 1;
}

table thead th:first-child,
table tbody td:first-child {
  padding-left: 24px;
}

table thead th {
  border-bottom: 1px solid #d9d9d9;
  font-size: 13px;
  color: #29344a;
  background: rgba(244, 247, 250, 0.5);
  text-transform: uppercase;
  white-space: nowrap;
}

table tbody td {
  border-top: 1px solid #dbe0e5;
  border-bottom: none;
  white-space: nowrap;
  position: relative;
  font-size: 14px;
  color: #39465f;
}

table tbody tr:hover {
  background-color: rgba(57, 70, 95, 0.03);
}

.prod-actions {
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  box-shadow: 0px 8px 24px rgba(27, 46, 94, 0.12);
  border-radius: 8px;
  padding: 8px;
  right: 25px;
  top: 50%;
  background-color: #fff;
  opacity: 0;
}

.prod-actions ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.prod-actions ul li {
  width: 32px;
  height: 32px;
  font-size: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
}

.prod-actions ul li.detail:hover {
  background: #ebedef;
  color: #39465f;
  border-color: #ebedef;
}

.prod-actions ul li.edit:hover {
  background: #e8fdf8;
  color: #1de9b6;
  border-color: #e8fdf8;
}

.prod-actions ul li.delete:hover {
  background: #feeceb;
  color: #f44236;
  border-color: #feeceb;
}

table tbody tr:hover .prod-actions {
  transform: translate(0, -50%);
  opacity: 1;
}

th[data-key='actions'] {
  display: none;
}
</style>
