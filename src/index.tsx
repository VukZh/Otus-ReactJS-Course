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
  currentCurrency: string;
}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      currency: 0,
      currentCurrency: 'ETH',
    };
    this.changeCurrentCurrency = this.changeCurrentCurrency.bind(this);
  }

  componentDidMount() {
    getCurrencyData('btc').then((data) =>
      this.setState({
        currency: data.USD,
      })
    );
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
    if (this.state.currentCurrency !== prevState.currentCurrency) {
      getCurrencyData(this.state.currentCurrency).then((data) =>
        this.setState({
          currency: data.USD,
        })
      );
    }
  }

  changeCurrentCurrency(currency: string) {
    this.setState({
      currentCurrency: currency,
    });
  }

  render() {
    return (
      <>
        <div className='mainWrapper'>
          <Header></Header>
          <CurrencyList
            activated={this.state.currentCurrency}
            currencies={['BTC', 'ETH', 'BNB', 'DOT']}
            changeCurrency={this.changeCurrentCurrency}
          ></CurrencyList>
        </div>
        <CurrencyData exchangeRate={this.state.currency}></CurrencyData>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
