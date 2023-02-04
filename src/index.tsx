import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import { Header } from './components/Header';
import { CurrencyList } from './components/CurrencyList';
import { CurrencyData } from './components/CurrencyData';
import { getCurrencyData } from './services/getCurrencyData';

interface IProps {}

interface IState {
  currency: number;
}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      currency: 0,
    };
  }

  componentDidMount() {
    getCurrencyData('btc').then((data) =>
      this.setState({
        currency: data.USD,
      })
    );
  }

  render() {
    console.log('btc', getCurrencyData('btc'));
    return (
      <>
        <div className='mainWrapper'>
          <Header></Header>
          <CurrencyList
            activated='RUB'
            currencies={['BTC', 'ETH', 'BNB', 'DOT']}
          ></CurrencyList>
        </div>
        <CurrencyData exchangeRate={this.state.currency}></CurrencyData>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
