// import React from 'react';
// import { Scatter } from 'react-chartjs-2';

// const data = {
//   labels: ['Scatter'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [
//         { x: 65, y: 75 },
//         { x: 59, y: 49 },
//         { x: 80, y: 90 },
//         { x: 81, y: 29 },
//         { x: 56, y: 36 },
//         { x: 55, y: 25 },
//         { x: 40, y: 18 },
//       ],
//     },
//   ],
// };

// export default React.createClass({
//   displayName: 'ScatterExample',

//   render() {
//     return (
//       <div>
//         <h2>Scatter Example</h2>
//         <Scatter data={data} />
//       </div>
//     );
//   },
// });

// ========================

import React from 'react';
import { Scatter } from '@reactchartjs/react-chart.js';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  datasets: [
    {
      label: 'A dataset',
      data: [
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ScatterChart = () => (
  <>
    <div className="header">
      <h1 className="title">Scatter Chart</h1>
      <div className="links">
        <a
          className="btn btn-gh"
          href="https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Scatter.js"
        >
          Github Source
        </a>
      </div>
    </div>
    <Scatter data={data} options={options} />
  </>
);

export default ScatterChart;
