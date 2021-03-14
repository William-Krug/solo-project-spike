import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const array1 = [
  { state: 'California', count: 1 },
  { state: 'Minnesota', count: 2 },
  { state: 'New York', count: 1 },
  { state: 'Ontario', count: 1 },
];

const array2 = [
  {
    id: 45,
    user_id: 1,
    date: '01/05/2020',
    route: 'Secret Path',
    distance: 2.8,
    time: '0:29:15',
    mph: 5.74,
    pace: '10:27',
    notes: '',
  },
  {
    id: 76,
    user_id: 1,
    date: '01/06/2020',
    route: 'Treadmill',
    distance: 3.14,
    time: '0:30:00',
    mph: 6.28,
    pace: '09:33',
    notes: 'I hate the dreadmill',
  },
  {
    id: 188,
    user_id: 1,
    date: '01/08/2020',
    route: 'Treadmill',
    distance: 3.18,
    time: '0:30:00',
    mph: 6.36,
    pace: '09:36',
    notes: '',
  },
  {
    id: 9000,
    user_id: 1,
    date: '01/10/2020',
    route: 'Treadmill',
    distance: 3.18,
    time: '0:30:00',
    mph: 6.36,
    pace: '09:26',
    notes: '',
  },
  {
    id: 877653,
    user_id: 1,
    date: '01/12/2020',
    route: 'Bonduel 4',
    distance: 4.0,
    time: '0:38:35',
    mph: 6.22,
    pace: '09:39',
    notes: '',
  },
];

function* rootSaga() {
  yield takeEvery('FETCH_USER_STATES', fetchUserStates);
  yield takeEvery('FETCH_COMMUNITY_RUNS', fetchCommunityRuns);
  yield takeEvery('GET_SINGLE_RUN', getSingleRun);
  yield takeEvery('FETCH_RUN_DETAILS', fetchRunDetails);
}

function* fetchRunDetails(action) {
  console.log('*** saga -> in fetchRunDetails() ***');
  console.log('\taction.payload:', action.payload);
}

function* getSingleRun(action) {
  console.log('*** saga -> in getSingleRun() ***');
  console.log('\taction.payload:', action.payload);
}

function* fetchCommunityRuns(action) {
  console.log('*** saga -> in fetchCommunityRuns() ***');

  // const communityRuns = yield axios.get('/api/admin/communityRuns');

  yield put({
    type: 'SET_COMMUNITY_RUNS',
    // payload: communityRuns.data,
  });
}

function* fetchUserStates(action) {
  console.log('*** saga -> in fetchUserStates() ***');

  const userStates = yield axios.get('/api/admin/userStates');

  yield put({
    type: 'SET_USER_STATES',
    payload: userStates.data,
  });
}

const sagaMiddleware = createSagaMiddleware();

// Reducers go here
const communityRuns = (state = array2, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const userStates = (state = array1, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    userStates,
    communityRuns,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
