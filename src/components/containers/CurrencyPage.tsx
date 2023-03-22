import React from 'react';
import { useParams } from 'react-router-dom';

import { Controls } from '../controls/Controls';
import { CurrencyData } from '../CurrencyData';
import { getCurrencyData } from '../../services/getCurrencyData';
import { ErrorBoundary } from '../ErrorBoundary';
import { Settings } from '../settings/Settings';
import { Modal } from '../settings/Modal';
import { IncreasedType } from '../../types';

type CurrencyName = {
  id: string;
};
interface IProps {
  params: undefined | CurrencyName;
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

type IntervalType = ReturnType<typeof setInterval>;
class CurrencyPage extends React.Component<IProps, IState> {
  interval: IntervalType;
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
  }

  componentDidMount() {
    const curr = this.props.params.id || 'BTC';
    this.setState({ currentCurrency: curr });
    this.interval = setInterval(() => {
      getCurrencyData(this.state.currentCurrency).then((data) =>
        this.setState({
          currency: data.USD,
        })
      );
    }, 3000);
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

  changeCurrentCurrency = (currency: string): void => {
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
  };

  changeCurrency = (currency: string): void => {
    this.setState(() => ({
      currentCurrency: currency,
    }));
  };

  changeRandomCurrency = (random: number): void => {
    this.changeCurrentCurrency(this.state.currencies[random]);
  };

  showModalOn = (): void => {
    this.setState({
      showModal: true,
    });
  };

  showModalOff = (): void => {
    this.setState({
      showModal: false,
    });
  };
  setGettingPeriod = (time: number): void => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      getCurrencyData(this.state.currentCurrency).then((data) =>
        this.setState({
          currency: data.USD,
        })
      );
    }, time);
  };

  setHistoricity = (historicity: boolean): void => {
    this.setState({
      historicity: historicity,
    });
  };

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
        />

        <ErrorBoundary>
          <CurrencyData
            exchangeRate={this.state.currency}
            increased={this.state.increased}
          />
        </ErrorBoundary>
        {this.state.showModal && (
          <Modal>
            <Settings
              close={this.showModalOff}
              setGettingPeriod={this.setGettingPeriod}
              setHistoricity={this.setHistoricity}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default (props: any) => <CurrencyPage {...props} params={useParams()} />;
