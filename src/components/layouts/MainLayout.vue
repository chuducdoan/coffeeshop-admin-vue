<template>
  <div class="container">
    <div class="left">
      <sidebar></sidebar>
    </div>
    <div :class="['sidebar-mobile', isSidebarOpen ? 'show' : '']">
      <sidebar></sidebar>
    </div>

    <!-- Overlay -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black bg-opacity-30 z-40 overlay-mobile"
      @click="closeSidebar"
    ></div>

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
.container {
  display: flex;
  height: 100vh;
}

.left,
.sidebar-mobile {
  width: 264px;
  height: 100%;
  background-color: #1b264f;
  overflow-y: auto;
  flex-shrink: 0;
}

.right {
  flex-grow: 1;
  background-color: #d9deef;
  height: 100%;
  overflow-y: auto;
}

/* ----- Custom Scrollbar ----- */
.left::-webkit-scrollbar,
.right::-webkit-scrollbar {
  width: 8px; /* độ dày thanh scroll */
}

.left::-webkit-scrollbar-track,
.right::-webkit-scrollbar-track {
  background: #d9deef; /* màu nền track */
  border-radius: 8px;
}

.left::-webkit-scrollbar-thumb,
.right::-webkit-scrollbar-thumb {
  background: #1b264f; /* màu thanh cuộn */
  border-radius: 8px;
}

.left::-webkit-scrollbar-thumb:hover,
.right::-webkit-scrollbar-thumb:hover {
  background: #ccc; /* hover đậm hơn */
}

/* Firefox */
.left,
.right {
  scrollbar-width: thin; /* mỏng hơn */
  scrollbar-color: #1b5299 #d9deef; /* thumb | track */
}

.main-content {
  padding: 28px 46px 19px;
}

.sidebar-mobile {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 100vh;
}

.show {
  display: block;
}

@media (max-width: 1024px) {
  .left,
  .sidebar-mobile {
    width: 194px;
  }
  .main-content {
    padding: 20px 28px 32px;
  }
}

@media (max-width: 768px) {
  .left {
    display: none;
  }

  .overlay-mobile {
    display: block;
  }
}
</style>
