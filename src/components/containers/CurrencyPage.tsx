import React from 'react';
import { useParams } from 'react-router-dom';

import { Controls } from '../controls/Controls';
import { CurrencyData } from '../CurrencyData';
import { getCurrencyData } from '../../services/getCurrencyData';
import { ErrorBoundary } from '../ErrorBoundary';
import { Settings } from '../settings/Settings';
import { Modal } from '../settings/Modal';

const DELAY = 3000;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {
  params: any;
}

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

export type IncreasedType = 'yes' | 'no' | undefined;
class CurrencyPage extends React.Component<IProps, IState> {
  interval: any;
  constructor(props: IProps) {
    super(props);
    this.state = {
      currency: 0,
      currentCurrency: '',
      increased: undefined,
      showModal: false,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC', 'ETH', 'BNB', 'DOT', 'ER~'],
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
    const curr = this.props.params.id ? this.props.params.id : 'BTC';
    this.setState({ currentCurrency: curr });
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
        <Controls
          showModal={this.showModalOn}
          historicity={this.state.historicity}
          changeCurrency={this.changeCurrency}
          changeRandomCurrency={this.changeRandomCurrency}
          history={this.state.history}
          currentCurrency={this.state.currentCurrency}
          currencies={this.state.currencies}
          changeCurrentCurrency={this.changeCurrentCurrency}
        ></Controls>

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

export default (props: any) => <CurrencyPage {...props} params={useParams()} />;
