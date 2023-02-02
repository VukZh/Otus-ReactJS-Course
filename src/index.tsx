import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import { Header } from './components/Header';
import { CurrencyList } from './components/CurrencyList';

class App extends React.Component {
  render() {
    return (
      <div className='mainWrapper'>
        <Header></Header>
        <CurrencyList
          activated='RUB'
          currencies={['RUB', 'CHF', 'KZT', 'UAH']}
        ></CurrencyList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
