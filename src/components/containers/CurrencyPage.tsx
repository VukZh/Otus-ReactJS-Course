import React from 'react';
import { useParams } from 'react-router-dom';

import { Controls } from '../controls/Controls';
import CurrencyData from '../CurrencyData';
import { ErrorBoundary } from '../ErrorBoundary';
import Settings from '../settings/Settings';
import { Modal } from '../settings/Modal';
import { IncreasedType } from '../../types';
import { State } from '../../state/reducer';
import { ActionTypes } from '../../state/types';
import { connect, ConnectedProps } from 'react-redux';
import { TypedDispatch } from '../../state/store';
import { getCurrencyData } from '../../services/getCurrencyData';

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
    const curr = this.props.params.id || this.props.currentCurrency || 'BTC';
    this.props.changeCurrentCurrency(curr);
    this.props.dispatch({
      type: ActionTypes.GET_CURRENCY_VALUE,
    });
  }

  componentDidUpdate(prevProps: Readonly<IProps>) {
    this.props.dispatch({ type: ActionTypes.SAVE_STATE });
    if (this.props.currentCurrency !== prevProps.currentCurrency) {
      getCurrencyData(this.props.currentCurrency)
        .then((data) => {
          this.props.setCurrencyValue(data.USD);
        })
        .then(() => this.props.setIncreased(undefined));
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

  render() {
    return (
      <>
        <Controls showModal={this.showModalOn} />

        <ErrorBoundary>
          <CurrencyData />
        </ErrorBoundary>
        {this.state.showModal && (
          <Modal>
            <Settings close={this.showModalOff} />
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
});

const mapDispatchToProps = (dispatch: TypedDispatch) => {
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
    setIncreased: (increased: IncreasedType) =>
      dispatch({
        type: ActionTypes.SET_INCREASED,
        payload: increased,
      }),
    dispatch: dispatch,
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
