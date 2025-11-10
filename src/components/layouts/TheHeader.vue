<template>
  <div class="header-container">
    <header>
      <div class="header-left">
        <i class="btn-sidebar-mb" @click="toggleSidebar()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
        </i>
        <h4>Chào mừng quay trở lại,</h4>
        <p>Chu Đức Đoàn</p>
      </div>
      <div class="header-right">
        <div class="relative inline-block">
          <!-- Icon mail -->
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                fill="black"
              />
            </svg>
          </i>

          <!-- Badge thông báo -->
          <span
            class="absolute -top-2 -right-2 inline-flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-[10px] font-bold"
          >
            {{ cartQuantity }}
          </span>
        </div>

        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.1461 3.24805C10.2956 2.87876 10.5519 2.5625 10.8822 2.33982C11.2125 2.11714 11.6018 1.99817 12.0001 1.99817C12.3985 1.99817 12.7878 2.11714 13.1181 2.33982C13.4484 2.5625 13.7047 2.87876 13.8541 3.24805C15.3329 3.65473 16.6373 4.5356 17.5669 5.75538C18.4966 6.97516 19.0001 8.46639 19.0002 10V14.697L20.8322 17.445C20.9326 17.5956 20.9903 17.7707 20.9991 17.9515C21.0079 18.1324 20.9674 18.3122 20.882 18.4718C20.7966 18.6314 20.6695 18.7649 20.5142 18.8579C20.3588 18.951 20.1812 19.0001 20.0002 19H15.4651C15.3447 19.8331 14.9282 20.595 14.2919 21.146C13.6555 21.697 12.8419 22.0003 12.0001 22.0003C11.1584 22.0003 10.3448 21.697 9.70845 21.146C9.07209 20.595 8.65555 19.8331 8.53515 19H4.00015C3.81911 19.0001 3.64145 18.951 3.48614 18.8579C3.33083 18.7649 3.20369 18.6314 3.11828 18.4718C3.03287 18.3122 2.99239 18.1324 3.00118 17.9515C3.00996 17.7707 3.06767 17.5956 3.16815 17.445L5.00015 14.697V10C5.00015 6.77605 7.18015 4.06005 10.1461 3.24805ZM10.5862 19C10.6894 19.2927 10.8809 19.5461 11.1343 19.7254C11.3876 19.9046 11.6903 20.0009 12.0006 20.0009C12.311 20.0009 12.6137 19.9046 12.867 19.7254C13.1204 19.5461 13.3119 19.2927 13.4151 19H10.5851H10.5862ZM12.0001 5.00005C10.6741 5.00005 9.4023 5.52683 8.46462 6.46451C7.52693 7.40219 7.00015 8.67396 7.00015 10V15C7.00019 15.1976 6.94174 15.3907 6.83215 15.555L5.86915 17H18.1301L17.1671 15.555C17.0579 15.3906 16.9998 15.1975 17.0001 15V10C17.0001 8.67396 16.4734 7.40219 15.5357 6.46451C14.598 5.52683 13.3262 5.00005 12.0001 5.00005Z"
              fill="black"
            />
          </svg>
        </i>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
              fill="black"
            />
          </svg>
        </i>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  inject: ['toggleSidebar'],
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
  },
};
</script>

<style scoped>
.header-container {
  padding: 16px 16px 0;
}
header {
  width: 100%;
  height: 62px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 7px 7px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 16px 30px;
}
header h1 {
  color: white;
  margin: 0;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-left h4 {
  font-size: 18px;
  font-weight: bold;
  margin-right: 9px;
}

.header-left p {
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 30px;
}

.btn-sidebar-mb {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  cursor: pointer;
  display: none;
}

@media (max-width: 1024px) {
  header {
    height: 44px;
  }
}

@media (max-width: 768px) {
  header {
    padding-left: 16px;
  }

  .btn-sidebar-mb {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header-left h4 {
    font-size: 12px;
  }

  .header-left p {
    font-size: 10px;
  }
}
</style>
