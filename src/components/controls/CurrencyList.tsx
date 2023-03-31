import React from 'react';
import { classes, style } from 'typestyle';
import { State } from '../../state/reducer';
import { Dispatch } from 'redux';
import { ActionsType, ActionTypes } from '../../state/types';
import { IncreasedType } from '../../types';
import { connect, ConnectedProps } from 'react-redux';

const listStyle = style({
  display: 'inline-block',
  fontFamily: 'Helvetica, Arial, sans-serif',
  width: '20vw',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  margin: '0 15px',
  padding: '8px',
  listStyle: 'none',
  textAlign: 'start',
});

const currencyStyle = style({
  color: 'black',
  backgroundColor: 'white',
  border: 'none',
  $nest: {
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  },
});

const currencyActiveStyle = style({
  backgroundColor: 'darkgray',
});

const CurrencyList: React.FC<CurrencyListProps> = ({
  currencies,
  currentCurrency,
  changeCurrentCurrency,
  setIncreased,
  ...props
}) => {
  const list = currencies.map((currency, index) => {
    const currency_Style =
      currentCurrency.toLowerCase() === currency.toLowerCase()
        ? classes(currencyStyle, currencyActiveStyle)
        : currencyStyle;
    const clickListHandler = (currency: string) => {
      changeCurrentCurrency(currency);
      setIncreased(undefined);
    };
    return (
      <li key={`${index}-${currency}`} {...props}>
        <button
          className={currency_Style}
          onClick={() => clickListHandler(currency)}
        >
          {currency}
        </button>
      </li>
    );
  });
  return <ul className={listStyle}>{list}</ul>;
};

const mapStateToProps = (state: State) => ({
  currentCurrency: state.currentCurrency,
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
  return {
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
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type CurrencyListProps = ConnectedProps<typeof connector>;

export default connector(CurrencyList);
