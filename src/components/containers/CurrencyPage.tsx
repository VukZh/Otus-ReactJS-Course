import React from 'react';
import { useParams } from 'react-router-dom';

import { Controls } from '../controls/Controls';
import { CurrencyData } from '../CurrencyData';
import { getCurrencyData } from '../../services/getCurrencyData';
import { ErrorBoundary } from '../ErrorBoundary';
import { Settings } from '../settings/Settings';
import { Modal } from '../settings/Modal';
import { IncreasedType } from '../../types';
import { State } from '../../state/reducer';
import { Dispatch } from 'redux';
import { ActionsType, ActionTypes } from '../../state/types';
import { connect, ConnectedProps } from 'react-redux';

type CurrencyName = {
  id: string;
};

interface IState {
  showModal: boolean;
}

type IntervalType = ReturnType<typeof setInterval>;
class CurrencyPage extends React.Component<IProps, IState> {
  interval: IntervalType;
  constructor(props: IProps) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    const curr = this.props.params.id || 'BTC';
    // this.setState({ currentCurrency: curr });
    this.props.changeCurrentCurrency(curr);
    this.interval = setInterval(() => {
      getCurrencyData(this.props.currentCurrency).then((data) =>
        this.props.setCurrencyValue(data.USD)
      );
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps: Readonly<IProps>) {
    if (this.props.currentCurrency !== prevProps.currentCurrency) {
      getCurrencyData(this.props.currentCurrency).then((data) => {
        this.props.setCurrencyValue(data.USD);
        this.props.setIncreased(undefined);
      });
    }
    if (this.props.currentCurrency === prevProps.currentCurrency) {
      if (
        this.props.currency > prevProps.currency &&
        prevProps.currency !== 0 &&
        prevProps.increased !== 'yes'
      ) {
        this.props.setIncreased('yes');
      } else if (
        this.props.currency < prevProps.currency &&
        prevProps.increased !== 'no'
      ) {
        this.props.setIncreased('no');
      }
    }
  }

  changeCurrentCurrency = (currency: string): void => {
    this.props.changeCurrentCurrency(currency);
    if (
      this.props.historicity &&
      this.props.history[this.props.history.length - 1] !== currency
    ) {
      this.props.addHistory(currency);
    }
  };

  changeCurrency = (currency: string): void => {
    this.props.changeCurrentCurrency(currency);
    this.props.setIncreased(undefined);
  };

  changeRandomCurrency = (random: number): void => {
    this.changeCurrentCurrency(this.props.currencies[random]);
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
      getCurrencyData(this.props.currentCurrency).then((data) =>
        this.props.setCurrencyValue(data.USD as number)
      );
    }, time);
  };

  setHistoricity = (historicity: boolean): void => {
    this.props.setHistoricity(historicity);
  };

  render() {
    return (
      <>
        <Controls
          showModal={this.showModalOn}
          historicity={this.props.historicity}
          changeCurrency={this.changeCurrency}
          changeRandomCurrency={this.changeRandomCurrency}
          history={this.props.history}
          currentCurrency={this.props.currentCurrency}
          currencies={this.props.currencies}
          changeCurrentCurrency={this.changeCurrentCurrency}
        />

        <ErrorBoundary>
          <CurrencyData
            exchangeRate={this.props.currency}
            increased={this.props.increased}
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

const mapStateToProps = (state: State) => ({
  currency: state.currency,
  currentCurrency: state.currentCurrency,
  increased: state.increased,
  historicity: state.historicity,
  history: state.history,
  randomCurrency: state.randomCurrency,
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
  return {
    setCurrencyValue: (value: number) =>
      dispatch({
        type: ActionTypes.SET_CURRENCY_VALUE,
        payload: value,
      }),
    changeCurrentCurrency: (currency: string) =>
      dispatch({
        type: ActionTypes.SET_CURRENT_CURRENCY,
        payload: currency,
      }),
    changeRandomCurrency: (ind: number) =>
      dispatch({
        type: ActionTypes.CHANGE_RANDOM_CURRENCY,
        payload: ind,
      }),
    setGettingPeriod: (period: number) =>
      dispatch({
        type: ActionTypes.SET_GETTING_PERIOD,
        payload: period,
      }),
    setIncreased: (increased: IncreasedType) =>
      dispatch({
        type: ActionTypes.SET_INCREASED,
        payload: increased,
      }),
    setHistoricity: (historicity: boolean) =>
      dispatch({
        type: ActionTypes.SET_HISTORICITY,
        payload: historicity,
      }),
    addHistory: (currency: string) =>
      dispatch({
        type: ActionTypes.ADD_HISTORY,
        payload: currency,
      }),
  };
};

const CurrencyPageWithParams = (props: IProps) => (
  <CurrencyPage {...props} params={useParams() as CurrencyName} />
);

const connector = connect(mapStateToProps, mapDispatchToProps);

type CurrencyPageProps = ConnectedProps<typeof connector>;
interface IProps extends CurrencyPageProps {
  params?: CurrencyName;
}
export default connector(CurrencyPageWithParams);
