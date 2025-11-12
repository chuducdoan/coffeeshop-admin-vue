<template>
  <div class="sidebar">
    <div class="sidebar-profile">
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
          alt=""
        />
      </div>
      <p>Mr. Edun Stephen</p>
    </div>
    <div class="sidebar-menu">
      <ul>
        <li
          v-for="item in menuMain"
          :key="item.nameRoute"
          :class="{ active: isActive(item) }"
          @click="
            item.children && item.children.length > 0
              ? toggleMenu(item)
              : go(item)
          "
        >
          <div
            v-if="!item.children || item.children.length === 0"
            class="menu-item"
          >
            <!-- eslint-disable-next-line -->
            <span v-html="item.icon"></span>
            {{ item.label }}
          </div>
          <div v-else class="menu-item">
            <!-- eslint-disable-next-line -->
            <span v-html="item.icon"></span>
            {{ item.label }}
            <span
              class="item-menu-arrow"
              :class="{ 'arrow-down': expanded === item.nameRoute }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </div>

          <ul v-show="expanded === item.nameRoute" class="menu-sub">
            <li
              v-for="subItem in item.children"
              :key="subItem.nameRoute"
              class="menu-sub-item"
              :class="{ active: isActive(subItem) }"
              @click.stop="go(subItem)"
            >
              {{ subItem.label }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowMore: false,
      menuMain: [
        {
          label: 'Trang chủ',
          nameRoute: '/home',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          `,
        },
        {
          label: 'Sản phẩm',
          nameRoute: '/product',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          `,
          children: [
            {
              label: 'Danh sách',
              nameRoute: '/product-list',
            },

            {
              label: 'Thêm mới',
              nameRoute: '/product-add',
            },
            {
              label: 'Chi tiết',
              nameRoute: '/product-detail',
            },
          ],
        },
        {
          label: 'Bài viết',
          nameRoute: '/blog-list',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
          `,
          children: [
            {
              label: 'Danh sách',
              nameRoute: '/blog-list',
            },

            {
              label: 'Thêm mới',
              nameRoute: '/blog-add',
            },
            {
              label: 'Chi tiết',
              nameRoute: '/blog-detail',
            },
          ],
        },
      ],
      activeMenu: null,
      expanded: null,
    };
  },
  watch: {
    '$route.path'(newPath) {
      this.activeMenu = newPath;
      // auto expand parent when route changes (e.g. navigation outside sidebar)
      const parent = this.menuMain.find(
        (i) => i.children && i.children.some((c) => c.nameRoute === newPath),
      );
      this.expanded = parent ? parent.nameRoute : null;
    },
  },
  created() {
    const path = this.$route.path;
    this.activeMenu = path;
    this.menuMain.forEach((i) => {
      if (i.children && i.children.some((c) => c.nameRoute === path)) {
        this.expanded = i.nameRoute;
      }
    });
  },

  methods: {
    isActive(item) {
      if (item.children && item.children.length > 0) {
        return (
          item.nameRoute === this.activeMenu ||
          item.children.some((c) => c.nameRoute === this.activeMenu)
        );
      }
      return item.nameRoute === this.activeMenu;
    },
    toggleMenu(item) {
      this.expanded = this.expanded === item.nameRoute ? null : item.nameRoute;
    },
    go(item) {
      const path = item.nameRoute;
      this.activeMenu = path;
      const parent = this.menuMain.find(
        (i) => i.children && i.children.some((c) => c.nameRoute === path),
      );
      if (!parent) {
        this.expanded = null;
      }
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.sidebar {
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.sidebar-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
  margin-bottom: 24px;
}

.sidebar-profile div {
  width: 100px;
  height: 100px;
  background-color: #9ea5a9;
  border-radius: 50%;
}

.sidebar-profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sidebar-profile p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  color: #fff;
  margin-top: 16px;
}

.sidebar-menu {
  transition: all 5s ease-in-out;
}

.sidebar-menu p {
  color: #bfbfbf;
  margin-bottom: 16px;
}

.sidebar-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-menu ul li {
  margin: 10px 0;
}

.sidebar-menu ul li .menu-item {
  color: #39465f;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
}

.sidebar-menu ul li .menu-item .item-menu-arrow {
  position: absolute;
  right: 20px;
}

.sidebar-menu ul li .menu-item:hover {
  background-color: #ebecef;
}

.sidebar-menu ul li .menu-item.active,
.sidebar-menu ul li.active .menu-item {
  background-color: #e5f6fe;
  color: #04a9f5;
  font-weight: 500;
}

.sidebar-menu ul li .menu-item .item-menu-arrow.arrow-down {
  transform: rotate(90deg);
}

.menu-sub {
  position: relative;
  /* display: none; */
}
.menu-sub::after {
  content: '';
  position: absolute;
  top: 0;
  left: 30px;
  height: 100%;
  width: 1px;
  border-left: 1px solid #dbe0e5;
  left: 30px;
}

.menu-sub .menu-sub-item {
  color: #39465f;
  padding: 12px 30px 12px 60px;
  display: block;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  position: relative;
}

.menu-sub .menu-sub-item::after {
  content: '';
  position: absolute;
  top: 20px;
  left: 45px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #dbe0e5;
}

.menu-sub .menu-sub-item:hover,
.menu-sub .menu-sub-item.active {
  color: #04a9f5;
}

.menu-sub .menu-sub-item:hover::after,
.menu-sub .menu-sub-item.active::after {
  background-color: #04a9f5;
}

/* .sidebar-menu ul li.active .menu-sub {
  display: block;
} */
</style>
