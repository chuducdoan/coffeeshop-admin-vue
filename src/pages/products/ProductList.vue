<template>
  <section>
    <h2>Danh sách sản phẩm</h2>

    <base-card>
      <div class="header">
        <div class="left">
          <base-input :is-search="true"></base-input>
        </div>
        <div class="right">
          <base-button link to="/product-add">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Thêm sản phẩm</base-button
          >
        </div>
      </div>
      <div>
        <base-table
          :load="isLoading"
          :columns="columns"
          :data-source="dataSource"
          :page-size="pageSize"
          :current-page="currentPage"
          :total="total"
          @update-page-size="(v) => (pageSize = v)"
          @update-current-page="(v) => (currentPage = v)"
          @change="changePagination"
        >
          <template #thumbnailUrl="{ data }">
            <img
              :src="data.thumbnailUrl"
              :alt="data.name"
              class="image-table"
            />
          </template>
        </base-table>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 10,
      currentPage: 0,
      isLoading: false,
      error: null,
    };
  },
  computed: {
    dataSource() {
      return this.$store.getters['product/products'];
    },
    columns() {
      return this.$store.getters['product/columns'];
    },
    total() {
      console.log(this.$store.getters['product/total']);
      return this.$store.getters['product/total'];
    },
  },
  created() {
    this.fetchProducts(this.currentPage, this.pageSize);
  },
  methods: {
    changePagination(page, size) {
      this.pageSize = size;
      this.currentPage = page;
      this.fetchProducts(page, size);
    },
    async fetchProducts(current, pageSize) {
      try {
        this.isLoading = true;
        await this.$store.dispatch('product/fetchProducts', {
          pageSize: pageSize,
          current: current,
        });
        this.isLoading = false;
      } catch (e) {
        this.error = e || 'System error';
      }
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 24px;
}

.header {
  padding: 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-table {
  width: 50px;
}
</style>
