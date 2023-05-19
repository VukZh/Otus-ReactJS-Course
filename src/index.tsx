import ReactDOM from 'react-dom';
import React from 'react';
import { store } from './state/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <></>
  </Provider>,
  document.getElementById('app')
);
