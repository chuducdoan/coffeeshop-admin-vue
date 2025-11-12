<template>
  <section>
    <h2>Thêm mới sản phẩm</h2>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <base-card>
          <div class="card-header">
            <h5>Mô tả sản phẩm</h5>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="">Tên sản phẩm</label>
              <base-input placeholder="Nhập tên sản phẩm"></base-input>
            </div>
            <div class="form-group">
              <label for="">Danh mục</label>
              <base-select></base-select>
            </div>
            <div class="form-group">
              <label for="">Mô tả sản phẩm</label>
              <base-textarea placeholder="Nhập tên sản phẩm"></base-textarea>
            </div>
          </div>
        </base-card>

        <base-card class="mt-5">
          <div class="card-header">
            <h5>Giá</h5>
          </div>
          <div class="card-body">
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group">
                <label for="">Giá</label>
                <base-input placeholder="Nhập tên sản phẩm"></base-input>
              </div>
              <div class="form-group">
                <label for="">So sánh về giá</label>
                <base-input placeholder="Nhập tên sản phẩm"></base-input>
              </div>
            </div>
            <div class="form-group">
              <label for="">Chi phí cho mỗi mặt hàng</label>
              <base-input placeholder="Nhập tên sản phẩm"></base-input>
            </div>
          </div>
        </base-card>

        <base-card class="mt-5">
          <div class="card-header">
            <h5>Trạng thái</h5>
          </div>
          <div class="card-body flex gap-2">
            <product-status
              v-for="sta in lstStatus"
              :key="sta.value"
              :mode="sta.label.toLowerCase()"
              :is-selected="sta.value === status"
              @click="changeStatus(sta.value)"
              >{{ sta.label }}</product-status
            >
          </div>
        </base-card>
      </div>
      <div>
        <base-card>
          <div class="card-header">
            <h5>Loại bán</h5>
          </div>
          <div class="card-body">
            <div class="wrap-checkbox">
              <base-checkbox
                v-for="opt in sellOptions"
                :key="opt.value"
                :model-value="selected.includes(opt.value)"
                class="w-full"
                @update:model-value="(val) => onToggleCheckbox(opt.value, val)"
                >{{ opt.label }}</base-checkbox
              >
            </div>
          </div>
        </base-card>

        <base-card class="mt-5">
          <div class="card-header">
            <h5>Ảnh sản phẩm</h5>
          </div>
          <div class="card-body">
            <div class="form-group">
              <base-upload></base-upload>
            </div>
          </div>
        </base-card>

        <base-card class="mt-5">
          <div class="card-header">
            <h5>Hàng tồn kho</h5>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="">Số lượng</label>
              <base-input placeholder="Nhập số lượng"></base-input>
            </div>

            <div class="form-group">
              <label for="">SKU (optional)</label>
              <base-input placeholder="Nhập SKU"></base-input>
            </div>
          </div>
        </base-card>
      </div>

      <div class="col-span-2">
        <base-card>
          <div class="card-body flex gap-3 justify-end">
            <base-button>Save product</base-button>
            <base-button mode="outline">Reset</base-button>
          </div>
        </base-card>
      </div>
    </div>
  </section>
</template>

<script>
import ProductStatus from '../../components/product/ProductStatus.vue';

export default {
  components: { ProductStatus },
  data() {
    return {
      sellOptions: [
        { label: 'Chỉ bán tại cửa hàng', value: '1' },
        { label: 'Chỉ bán trực tuyến', value: '2' },
        { label: 'Có sẵn tại cửa hàng và trực tuyến', value: '3' },
      ],
      selected: [],
      lstStatus: [
        { label: 'Active', value: '1' },
        { label: 'Processing', value: '2' },
        { label: 'Close', value: '3' },
        { label: 'Pending', value: '4' },
      ],
      status: '1',
    };
  },
  methods: {
    onToggleCheckbox(value, checked) {
      console.log(value, checked);
      if (checked) {
        if (!this.selected.includes(value)) this.selected.push(value);
      } else {
        this.selected = this.selected.filter((v) => v !== value);
      }
    },
    changeStatus(val) {
      this.status = val;
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

.card-header {
  border-bottom: 1px solid #dbe0e5;
  padding: 25px;
}

.card-header h5 {
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 600;
}

.card-body {
  padding: 25px;
}

.form-group:not(:last-child) {
  margin-bottom: 1rem;
}

.form-group label {
  margin-bottom: 0.5rem;
  color: #1d2630;
  display: inline-block;
  font-size: 14px;
}

.wrap-checkbox {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
