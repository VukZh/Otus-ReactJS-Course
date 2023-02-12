import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import { Header } from './components/Header';
import { CurrencyList } from './components/CurrencyList';
import { CurrencyData } from './components/CurrencyData';
import { getCurrencyData } from './services/getCurrencyData';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Settings } from './components/Settings';

const DELAY = 3000;
interface IProps {}

interface IState {
  currency: number;
  currentCurrency: string;
  increased: IncreasedType;
}

export type IncreasedType = 'yes' | 'no' | undefined;
class App extends React.Component<IProps, IState> {
  interval: any;
  constructor(props: IProps) {
    super(props);
    this.state = {
      currency: 0,
      currentCurrency: 'BTC',
      increased: undefined,
    };
    this.changeCurrentCurrency = this.changeCurrentCurrency.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      getCurrencyData(this.state.currentCurrency).then((data) =>
        this.setState({
          currency: data.USD,
        })
      );
    }, DELAY);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
    if (this.state.currentCurrency !== prevState.currentCurrency) {
      getCurrencyData(this.state.currentCurrency).then((data) =>
        this.setState({
          currency: data.USD,
          increased: undefined,
        })
      );
    }
    if (this.state.currentCurrency === prevState.currentCurrency) {
      if (
        this.state.currency > prevState.currency &&
        prevState.currency !== 0 &&
        prevState.increased !== 'yes'
      ) {
        this.setState({
          increased: 'yes',
        });
      } else if (
        this.state.currency < prevState.currency &&
        prevState.increased !== 'no'
      ) {
        this.setState({
          increased: 'no',
        });
      }
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
            currencies={['BTC', 'ETH', 'BNB', 'DOT', 'ERR']}
            changeCurrency={this.changeCurrentCurrency}
          ></CurrencyList>
        </div>
        <ErrorBoundary>
          <CurrencyData
            exchangeRate={this.state.currency}
            increased={this.state.increased}
          ></CurrencyData>
        </ErrorBoundary>
        <Settings></Settings>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
