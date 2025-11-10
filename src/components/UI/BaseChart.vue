<template>
  <div v-if="chartData" class="chart-wrapper">
    <BarChart :data="chartData" :options="chartOptions" />
  </div>
  <div v-else>Đang tải dữ liệu...</div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar as BarChart } from 'vue-chartjs';

// Đăng ký các module bắt buộc
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

export default {
  name: 'BaseChart',
  components: { BarChart },
  data() {
    return {
      chartData: {
        labels: ['2019', '2020', '2021', '2022', '2023'], // BẮT BUỘC PHẢI CÓ
        datasets: [
          {
            label: 'Doanh số',
            backgroundColor: [
              '#4F46E5',
              '#22C55E',
              '#FACC15',
              '#EF4444',
              '#3B82F6',
            ],
            data: [40, 20, 60, 80, 50], // BẮT BUỘC PHẢI CÓ
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Biểu đồ Doanh số',
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.chart-wrapper {
  max-width: 600px;
  margin: auto;
}
</style>
