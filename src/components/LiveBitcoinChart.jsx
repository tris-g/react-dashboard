import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import useLiveCryptoPrice from './useLiveCryptoPrice';
import './LiveBitcoinChart.css';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, TimeScale, Tooltip);

const LiveBitcoinChart = () => {
  const dataPoints = useLiveCryptoPrice();

  const chartData = {
    datasets: [
      {
        label: 'BTC/USDT',
        data: dataPoints,
        borderColor: '#4ade80',
        backgroundColor: '#4ade80',
        tension: 0.3,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          tooltipFormat: 'HH:mm:ss',
          unit: 'second',
        },
        ticks: {
          maxTicksLimit: 6,
        },
      },
      y: {
        ticks: {
          callback: (val) => `$${val.toLocaleString()}`,
        },
        beginAtZero: false,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="live-bitcoin-chart">
      <h4>Live BTC/USDT Price</h4>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LiveBitcoinChart;