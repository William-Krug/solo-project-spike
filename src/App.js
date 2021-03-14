import './App.css';

// import React, { useEffect, useState } from 'react';
import { /*useDispatch,*/ useSelector } from 'react-redux';
import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Scatter } from 'react-chartjs-2';

import PieChart from './PieChart';
import LineTest from './LineTest';

function App() {
  const communityRuns = useSelector((store) => store.communityRuns);

  function deleteRun(runId) {
    console.log('*** in deleteRun ***');
  }

  return (
    <div className="App">
      <main>
        <h1>ADMIN PORTAL</h1>

        <PieChart />

        <br />
        <br />
        <br />
        <br />
        <br />

        <h2>All Community Runs</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Route</th>
              <th>Distance</th>
              <th>Time</th>
              <th>MPH</th>
              <th>Pace</th>
              <th>Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {communityRuns.map((run, i) => {
              return (
                <tr key={i}>
                  <td>{run.date}</td>
                  <td>{run.route}</td>
                  <td>{run.distance}</td>
                  <td>{run.time}</td>
                  <td>{run.mph}</td>
                  <td>{run.pace}</td>
                  <td>{run.notes}</td>
                  <td>
                    <button onClick={() => deleteRun(i)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />
        <br />
        <br />
        <br />
        <br />

        <LineTest />

        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}

export default App;
