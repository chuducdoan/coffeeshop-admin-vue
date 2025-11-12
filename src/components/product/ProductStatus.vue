<template>
  <div :class="[mode, { act: isSelected }]" class="status">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      require: false,
      default: '',
    },
    isSelected: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  methods: {},
};
</script>

<style scoped>
div {
  padding: 0.25rem 0.5rem;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.active {
  background: #e8fdf8;
  color: #1de9b6;
  border-color: #e8fdf8;
}

.processing {
  background: #e6f6fe;
  color: #04a9f5;
  border-color: #e6f6fe;
}

.close {
  background: #feeceb;
  color: #f44236;
  border-color: #feeceb;
}

.pending {
  background: #fef9ea;
  color: #f4c22b;
  border-color: #fef9ea;
}

div:hover {
  background-color: #fff;
  border-color: #fff;
  color: #000;
}

.active.act {
  background: #1de9b6;
  color: #fff;
  border-color: #1de9b6;
}

.processing.act {
  background: #04a9f5;
  color: #fff;
  border-color: #04a9f5;
}

.close.act {
  background: #f44236;
  color: #fff;
  border-color: #f44236;
}

.pending.act {
  background: #f4c22b;
  color: #fff;
  border-color: #f4c22b;
}
</style>
