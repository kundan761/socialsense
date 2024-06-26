
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
    <div style={{height:"260px", margin:"auto"}}>
      <h2 style={{fontWeight:"bold"}}>Customer segmentation</h2>
      <Doughnut data={doughnutChartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
