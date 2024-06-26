// data.js
export const doughnutChartData = {
    labels: ['15-25', '26-35', '36-45', '>45'],
    datasets: [
      {
        label: 'Age Groups',
        data: [10, 20, 30, 15], // Example data, replace with actual data if needed
        backgroundColor: [
          'rgba(255, 206, 86, 0.6)',  // yellow
          'rgba(107, 142, 35, 0.6)',  // mehndi
          'rgba(169, 169, 169, 0.6)', // grey
          'rgba(255, 69, 0, 0.6)'     // dark orange
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(107, 142, 35, 1)',
          'rgba(169, 169, 169, 1)',
          'rgba(255, 69, 0, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  