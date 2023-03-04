import React from 'react';
import ReactDOM from 'react-dom';

import { CurrencyPage } from './components/containers/CurrencyPage';
import { StartPage } from './components/containers/StartPage';

const App = () => {
  // return <CurrencyPage />;
  return <StartPage />;
};

ReactDOM.render(<App />, document.getElementById('app'));
