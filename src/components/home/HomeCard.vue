<template>
  <div class="home-card">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_7m_9vBbVqpkuEpWKSTPp6py-Lzb__UBcQ&s"
      alt=""
    />
    <div class="home-card-info">
      <h4>Mrs.Ellian George</h4>
      <p>Principial</p>
    </div>
    <base-button size="sm" @click="handleClick()">View Details</base-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('abc');
    },
  },
};
</script>

<style scoped>
.home-card {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 16px;
}

.home-card img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.home-card-info {
  flex-grow: 1;
}

.home-card-info h4 {
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.home-card-info p {
  font-size: 12px;
  color: #565353;
}

@media (max-width: 1024px) {
  .home-card img {
    width: 29px;
    height: 29px;
  }

  .home-card-info h4 {
    font-size: 12px;
  }

  .home-card-info p {
    font-size: 9px;
  }

  .home-card button {
    font-size: 8px;
    white-space: nowrap;
  }
}
</style>
