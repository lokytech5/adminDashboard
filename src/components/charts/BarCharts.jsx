import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
const data = {
  labels: ['Acquisition', 'Purchase', 'Retention'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const options = {
  cutout: '80%',
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    }
  }
}

const BarCharts = () => {
  return (
    <div className="bg-white rounded-sm shadow-lg p-5 flex flex-col h-full max-w-md mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Marketing</h2>
        <div className="relative">
          <button className="focus:outline-none">This week</button>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-200 rounded-full mr-2"></div>
          <p className="text-sm">Acquisition</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-200 rounded-full mr-2"></div>
          <p className="text-sm">Purchase</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-200 rounded-full mr-2"></div>
          <p className="text-sm">Retention</p>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}

export default BarCharts