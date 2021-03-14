import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

function LineTest() {
  const dispatch = useDispatch();

  const communityRuns = useSelector((store) => store.communityRuns);

  const getElementAtEvent = (element) => {
    console.log('*** in getElementAtEvent() ***');
    console.log('element:', element);

    console.log(communityRuns[element[0]._index].id);

    dispatch({
      type: 'GET_SINGLE_RUN',
      payload: {
        id: communityRuns[element[0]._index].id,
      },
    });
  };

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
    tooltips: { enabled: false },
    hover: { mode: null },
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
      <Line
        data={data}
        options={options}
        getElementAtEvent={getElementAtEvent}
      />
    </>
  );
}

export default LineTest;
