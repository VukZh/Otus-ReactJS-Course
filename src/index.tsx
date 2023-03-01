import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { CurrencyList } from './components/CurrencyList';
import { CurrencyData } from './components/CurrencyData';
import { getCurrencyData } from './services/getCurrencyData';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Settings } from './components/settings/Settings';
import { Modal } from './components/settings/Modal';
import { style } from 'typestyle';

const DELAY = 3000;
interface IProps {}

interface IState {
  currency: number;
  currentCurrency: string;
  increased: IncreasedType;
  showModal: boolean;
  historicity: boolean;
  history: Array<string>;
  randomCurrency: number;
  currencies: Array<string>;
}

const mainWrapperStyle = style({
  margin: '20px',
  display: 'flex',
});

export type IncreasedType = 'yes' | 'no' | undefined;
class App extends React.Component<IProps, IState> {
  interval: any;
  constructor(props: IProps) {
    super(props);
    this.state = {
      currency: 0,
      currentCurrency: 'BTC',
      increased: undefined,
      showModal: false,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC', 'ETH', 'BNB', 'DOT', 'ERR'],
    };
    this.changeCurrentCurrency = this.changeCurrentCurrency.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.showModalOn = this.showModalOn.bind(this);
    this.showModalOff = this.showModalOff.bind(this);
    this.setGettingPeriod = this.setGettingPeriod.bind(this);
    this.setHistoricity = this.setHistoricity.bind(this);
    this.changeRandomCurrency = this.changeRandomCurrency.bind(this);
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
    if (
      this.state.historicity &&
      this.state.history[this.state.history.length - 1] !== currency
    ) {
      this.setState((prevState) => ({
        history: [...prevState.history, currency],
      }));
    }
  }

  changeCurrency(currency: string) {
    this.setState(() => ({
      currentCurrency: currency,
    }));
  }

  changeRandomCurrency(random: number) {
    this.changeCurrentCurrency(this.state.currencies[random]);
  }

  showModalOn() {
    this.setState({
      showModal: true,
    });
  }

  showModalOff() {
    this.setState({
      showModal: false,
    });
  }
  setGettingPeriod(time: number) {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      getCurrencyData(this.state.currentCurrency).then((data) =>
        this.setState({
          currency: data.USD,
        })
      );
    }, time);
  }

  setHistoricity(historicity: boolean) {
    this.setState({
      historicity: historicity,
    });
  }

  render() {
    return (
      <>
        <div className={mainWrapperStyle}>
          <Header
            showModal={this.showModalOn}
            historicity={this.state.historicity}
            changeCurrency={this.changeCurrency}
            changeRandomCurrency={this.changeRandomCurrency}
            history={this.state.history}
            listSize={this.state.currencies.length}
          ></Header>
          <CurrencyList
            activated={this.state.currentCurrency}
            currencies={this.state.currencies}
            changeCurrency={this.changeCurrentCurrency}
          ></CurrencyList>
        </div>
        <ErrorBoundary>
          <CurrencyData
            exchangeRate={this.state.currency}
            increased={this.state.increased}
          ></CurrencyData>
        </ErrorBoundary>
        {this.state.showModal && (
          <Modal>
            <Settings
              close={this.showModalOff}
              setGettingPeriod={this.setGettingPeriod}
              setHistoricity={this.setHistoricity}
            ></Settings>
          </Modal>
        )}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
