<template>
  <div class="home-top-student">
    <div class="home-top-student-inner">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_7m_9vBbVqpkuEpWKSTPp6py-Lzb__UBcQ&s"
        alt=""
      />
      <div class="home-top-student-info">
        <h4>Mrs.Ellian George</h4>
        <p>Grade: 4</p>
      </div>
      <p><span class="label">Age:</span> <span>8 years</span></p>
      <p><span class="label">Class:</span> <span>4d</span></p>
      <p><span class="label">Score:</span> <span>96%</span></p>
      <p>
        <span class="label">Sở thích:</span>
        <span>Chơi bóng đá và đọc sách</span>
      </p>
    </div>
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
.home-top-student {
  width: 174px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.25);
  padding-top: 38px;
  overflow: hidden;
}

.home-top-student img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
}

.home-top-student-inner {
  background-color: #d9deef;
  border-radius: 10px;
  padding-top: 32px;
  position: relative;
  padding-left: 8px;
  padding-right: 13px;
  padding-bottom: 16px;
}

.home-top-student-inner > p {
  font-size: 10px;
  display: flex;
}

.home-top-student-inner > p:not(:last-child) {
  margin-bottom: 3px;
}

.home-top-student-inner .label {
  white-space: nowrap;
  margin-right: 4px;
}

.home-top-student-inner img {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
}

.home-top-student-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
}

.home-top-student-info h4 {
  font-size: 12px;
  background-color: #fff;
  border-radius: 4px;
  padding: 2px;
}

.home-top-student-info p {
  font-size: 9px;
}

@media (max-width: 1024px) {
  .home-top-student {
    width: 124px;
  }

  .home-top-student img {
    width: 43px;
    height: 43px;
    top: -21px;
  }

  .home-top-student-info h4 {
    font-size: 9px;
  }

  .home-top-student-inner {
    padding-top: 24px;
  }
}
</style>
