// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.register(ArcElement, Tooltip, Legend);

// const data = {
//   labels: ['15-25', '26-35', '36-45','45+'],
//   datasets: [
//     {
//       label: 'Age Groups',
//       data: [10, 20, 30, 15],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     tooltip: {
//       callbacks: {
//         label: function (context: any) {
//           let label = context.label || '';
//           if (label) {
//             label += ': ';
//           }
//           if (context.parsed !== null) {
//             label += context.parsed;
//           }
//           return label;
//         },
//       },
//     },
//   },
// };

// const DoughnutChart: React.FC = () => {
//   return (
//     <div>
//       <h2>Age Group Distribution</h2>
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// };

// export default DoughnutChart;


// DoughnutChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { doughnutChartData } from '@/Data/doughnutgraphdata'; // Adjust the path as needed

Chart.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label = context.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed !== null) {
            label += context.parsed;
          }
          return label;
        },
      },
    },
  },
};

const DoughnutChart: React.FC = () => {
  return (
    <div style={{ height: '240px'}}>
      <h2>Age Group Distribution</h2>
      <Doughnut data={doughnutChartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
