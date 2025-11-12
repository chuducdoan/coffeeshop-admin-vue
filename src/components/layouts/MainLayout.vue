<template>
  <div class="wrap-container">
    <div class="left">
      <sidebar></sidebar>
    </div>

    <div class="right">
      <the-header></the-header>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import TheHeader from './TheHeader.vue';

export default {
  components: { Sidebar, TheHeader },
  provide() {
    return {
      toggleSidebar: this.toggleSidebar,
    };
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },
};
</script>

<style scoped>
.wrap-container {
  background-color: #f4f7fa;
}
.left {
  width: 280px;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1026;
  background-color: #fff;
  box-shadow: 0px 0px 24px rgba(27, 46, 94, 0.05);
}

.right {
  min-height: calc(100vh - 74px);
  margin-left: 280px;
  width: calc(100% - 280px);
  position: relative;
  top: 74px;
  background-color: #f4f7fa;
}

/* ----- Custom Scrollbar ----- */
/* .left::-webkit-scrollbar,
.right::-webkit-scrollbar {
  width: 8px;
}

.left::-webkit-scrollbar-track,
.right::-webkit-scrollbar-track {
  background: #d9deef;
  border-radius: 8px;
}

.left::-webkit-scrollbar-thumb,
.right::-webkit-scrollbar-thumb {
  background: #1b264f;
  border-radius: 8px;
}

.left::-webkit-scrollbar-thumb:hover,
.right::-webkit-scrollbar-thumb:hover {
  background: #ccc;
} */

/* Firefox */
.left,
.right {
  scrollbar-width: thin; /* mỏng hơn */
  scrollbar-color: #1b5299 #d9deef; /* thumb | track */
}

.main-content {
  padding: 28px 46px 19px;
}

.show {
  display: block;
}
</style>
