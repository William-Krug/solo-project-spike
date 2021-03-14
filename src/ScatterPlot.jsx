import React from 'react';
import { useSelector } from 'react-redux';
import { Scatter } from 'react-chartjs-2';
import moment from 'moment';

function ScatterPlot() {
  const communityRuns = useSelector((store) => store.communityRuns);

  console.log('*** Moment.js ***');
  console.log(moment(communityRuns[0].date).format('MM/DD/YYYY'));
  console.log(moment(communityRuns[1].date).format('MM/DD/YYYY'));
  console.log(moment(communityRuns[2].date).format('MM/DD/YYYY'));
  console.log(moment(communityRuns[3].date).format('MM/DD/YYYY'));
  console.log(moment(communityRuns[4].date).format('MM/DD/YYYY'));

  console.log('### array ###');
  console.log(communityRuns[0].date);
  console.log(communityRuns[1].date);
  console.log(communityRuns[2].date);
  console.log(communityRuns[3].date);
  console.log(communityRuns[4].date);

  const data = {
    datasets: [
      {
        label: 'Run',
        data: [
          {
            x: 1,
            y: communityRuns[0].distance,
          },
          {
            x: 2,
            y: communityRuns[1].distance,
          },
          {
            x: 3,
            y: communityRuns[2].distance,
          },
          {
            x: 4,
            y: communityRuns[3].distance,
          },
          {
            x: 5,
            y: communityRuns[4].distance,
          },
        ],
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          // type: 'date',
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    events: ['click'],
  };

  const graphClicked = () => {
    // console.log('Run History Dot Clicked');
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Run History</h1>
      </div>
      <Scatter
        data={data}
        options={options}
        onElementsClick={() => graphClicked()}
      />
    </>
  );
}

export default ScatterPlot;
