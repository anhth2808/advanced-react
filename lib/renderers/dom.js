import React from 'react';
import ReactDOM from 'react-dom';

import StateApi from 'state-api';
// import StateApi from '../state-api/lib/index';
import App from 'components/App';

const store = new StateApi(window.initialData);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
