<template>
  <nav class="base-pagination" aria-label="Pagination">
    <div class="pager">
      <button
        aria-label="Previous page"
        class="pager-btn prev"
        :disabled="internalCurrent <= 1"
        @click="prev"
      >
        ‹
      </button>

      <template v-if="!simple">
        <template v-for="p in pagesToShow" :key="p.key">
          <button
            v-if="p.type === 'page'"
            class="pager-btn page"
            :class="{ active: p.num === internalCurrent }"
            @click="goToPage(p.num)"
          >
            {{ p.num }}
          </button>

          <span v-else class="pager-dots">…</span>
        </template>
      </template>

      <template v-else>
        <span class="simple-info"
          >{{ internalCurrent }} / {{ totalPages }}</span
        >
        <input
          v-model.number="inputPage"
          class="simple-input"
          type="number"
          min="1"
          :max="totalPages"
          @keyup.enter="onSimpleInputEnter"
        />
      </template>

      <button
        aria-label="Next page"
        class="pager-btn next"
        :disabled="internalCurrent >= totalPages"
        @click="next"
      >
        ›
      </button>
    </div>

    <div v-if="showSizeChanger" class="pager-right">
      <label class="size-label">Per page</label>
      <select
        v-model.number="internalPageSize"
        class="size-select"
        @change="onPageSizeChange"
      >
        <option v-for="opt in pageSizeOptions" :key="opt" :value="Number(opt)">
          {{ opt }}
        </option>
      </select>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BasePagination',

  props: {
    total: { type: Number, default: 0 },
    pageSize: { type: Number, default: 10 },
    currentPage: { type: Number, default: 1 },
    pageSizeOptions: { type: Array, default: () => [10, 20, 50, 100] },
    showSizeChanger: { type: Boolean, default: true },
    simple: { type: Boolean, default: false },
    maxPagesToShow: { type: Number, default: 7 },
  },
  emits: ['update:currentPage', 'update:pageSize', 'change'],
  data() {
    return {
      internalCurrent: this.currentPage || 1,
      internalPageSize: this.pageSize || 10,
      inputPage: this.currentPage || 1,
    };
  },
  computed: {
    totalPages() {
      return Math.max(1, Math.ceil((this.total || 0) / this.internalPageSize));
    },
    pagesToShow() {
      const total = this.totalPages;
      const max = Math.max(5, this.maxPagesToShow || 7);
      const pages = [];

      if (total <= max) {
        for (let i = 1; i <= total; i++)
          pages.push({ type: 'page', num: i, key: `p-${i}` });
        return pages;
      }

      const half = Math.floor(max / 2);
      let start = Math.max(1, this.internalCurrent - half);
      let end = Math.min(total, start + max - 1);
      if (end - start + 1 < max) {
        start = Math.max(1, end - max + 1);
      }

      if (start > 1) {
        pages.push({ type: 'page', num: 1, key: 'p-1' });
        if (start > 2) pages.push({ type: 'dots', key: 'dots-left' });
      }

      for (let i = start; i <= end; i++)
        pages.push({ type: 'page', num: i, key: `p-${i}` });

      if (end < total) {
        if (end < total - 1) pages.push({ type: 'dots', key: 'dots-right' });
        pages.push({ type: 'page', num: total, key: `p-${total}` });
      }

      return pages;
    },
  },
  watch: {
    currentPage(v) {
      this.internalCurrent = v || 1;
      this.inputPage = this.internalCurrent;
    },
    pageSize(v) {
      this.internalPageSize = v || this.internalPageSize;
    },
    internalCurrent(v) {
      this.$emit('update:currentPage', v);
    },
    internalPageSize(v) {
      this.$emit('update:pageSize', v);
    },
  },

  methods: {
    goToPage(page) {
      const p = Math.min(Math.max(1, Number(page) || 1), this.totalPages);
      if (p === this.internalCurrent) return;
      this.internalCurrent = p;
      this.inputPage = p;
      this.$emit('change', p, this.internalPageSize);
    },
    prev() {
      if (this.internalCurrent > 1) this.goToPage(this.internalCurrent - 1);
    },
    next() {
      if (this.internalCurrent < this.totalPages)
        this.goToPage(this.internalCurrent + 1);
    },
    onPageSizeChange() {
      // when changing page size, reset to page 1
      this.internalCurrent = 1;
      this.inputPage = 1;
      this.$emit('change', this.internalCurrent, this.internalPageSize);
    },
    onSimpleInputEnter() {
      if (!this.inputPage) return;
      this.goToPage(this.inputPage);
    },
  },
};
</script>

<style scoped>
.base-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
}
.pager {
  display: flex;
  align-items: center;
  gap: 6px;
}
.pager-btn {
  min-width: 34px;
  height: 34px;
  padding: 0 10px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #fff;
  cursor: pointer;
}
.pager-btn[disabled] {
  opacity: 0.45;
  cursor: not-allowed;
}
.pager-btn.page:hover {
  background-color: #d9d9d9;
}
.pager-btn.page.active {
  background: #04a9f5;
  color: #fff;
  border-color: #04a9f5;
}

.pager-dots {
  padding: 0 6px;
  color: #9ca3af;
}
.pager-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.size-select {
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}
.simple-input {
  width: 60px;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}
.simple-info {
  margin-right: 8px;
  color: #374151;
}
</style>
