import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';

function PieChart() {
  const userStates = useSelector((store) => store.userStates);

  const data = {
    labels: [
      userStates[0].state,
      userStates[1].state,
      userStates[2].state,
      userStates[3].state,
    ],
    datasets: [
      {
        data: [
          userStates[0].count,
          userStates[1].count,
          userStates[2].count,
          userStates[3].count,
        ],
        backgroundColor: ['#ed2939', '#002395', '#fdc651', '#00a86b'],
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="Users by State">Pie Chart</h1>
      </div>
      <Pie
        data={data}
        // width={10}
        // height={5}
        // options={{ maintainAspectRatio: false }}
      />
    </>
  );
}

export default PieChart;
