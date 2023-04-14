import React from 'react';

import { Controls } from '../components/controls/Controls';
import CurrencyData from '../components/CurrencyData';
import { ErrorBoundary } from '../components/ErrorBoundary';
import Settings from '../components/settings/Settings';
import { Modal } from '../components/settings/Modal';
import { IncreasedType } from '../types';
import { State } from '../state/reducer';
import { ActionTypes } from '../state/types';
import { connect, ConnectedProps } from 'react-redux';
import { TypedDispatch } from '../state/store';
import { getCurrencyData } from '../services/getCurrencyData';
import { NavBar } from '@/components/NavBar';
import Link from 'next/link';
import { style } from 'typestyle';

type Router = {
  query: {
    loc: string;
  };
};

interface IState {
  showModal: boolean;
}

const navStyle = style({
  fontFamily: 'Helvetica, Arial, sans-serif',
  display: 'flex',
  margin: '10px auto',
  justifyContent: 'space-evenly',
});

class CurrencyPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    console.log('... ', this.props);
    this.props.changeCurrentCurrency('BTC');
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
    const hrefDetails = `/currency/${this.props.currentCurrency}`;
    return (
      <>
        <NavBar></NavBar>
        <Controls showModal={this.showModalOn} />
        <ErrorBoundary>
          <CurrencyData />
        </ErrorBoundary>
        <Link href={hrefDetails} className={navStyle}>
          Details
        </Link>
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
  // <CurrencyPage {...props} params={useRouter() as unknown as Router} />
  <CurrencyPage {...props} />
);

const connector = connect(mapStateToProps, mapDispatchToProps);

type IProps = ConnectedProps<typeof connector>;

export default connector(CurrencyPageWithParams);
