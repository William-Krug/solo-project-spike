import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

function LineTest() {
  const communityRuns = useSelector((store) => store.communityRuns);

  const data = {
    labels: [
      communityRuns[0].date,
      communityRuns[1].date,
      communityRuns[2].date,
      communityRuns[3].date,
      communityRuns[4].date,
    ],
    datasets: [
      {
        label: 'Distance',
        data: [
          communityRuns[0].distance,
          communityRuns[1].distance,
          communityRuns[2].distance,
          communityRuns[3].distance,
          communityRuns[4].distance,
        ],
        fill: false,
        backgroundColor: '#ed2939',
        borderColor: '#ed2939',
        showLine: false,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            padding: 10,
          },
          gridLines: {
            drawOnChartArea: false,
            drawTicks: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            padding: 10,
            beginAtZero: true,
          },
          gridLines: {
            drawOnChartArea: false,
            drawTicks: false,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Line Test</h1>
      </div>
      <Line data={data} options={options} />
    </>
  );
}

export default LineTest;
