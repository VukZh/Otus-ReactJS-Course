import React from 'react';
import { classes, style } from 'typestyle';
import { State } from '@/state/reducer';
import { connect, ConnectedProps } from 'react-redux';

const formattedDataStyle = style({
  width: '90vw',
  height: '20vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  fontFamily: 'Arial, SansSerif',
  fontSize: '5rem',
  lineHeight: '7rem',
  color: 'darkblue',
  border: '2px solid black',
});

const increasedStyle = style({
  backgroundColor: 'lightgreen',
});

const decreasedStyle = style({
  backgroundColor: 'lightcoral',
});

const CurrencyData: React.FC<CurrencyDataProps> = ({
  exchangeRate,
  increased,
  isLoading,
}) => {
  if (exchangeRate === undefined) {
    throw new Error("can't get data");
  }
  const dataStyle =
    increased === 'yes'
      ? classes(formattedDataStyle, increasedStyle)
      : increased === 'no'
      ? classes(formattedDataStyle, decreasedStyle)
      : formattedDataStyle;
  return (
    <div className={dataStyle}>{isLoading ? 'loading ...' : exchangeRate}</div>
  );
};

const mapStateToProps = (state: State) => ({
  exchangeRate: state.currency,
  increased: state.increased,
  isLoading: state.isLoading,
});

const connector = connect(mapStateToProps);

type CurrencyDataProps = ConnectedProps<typeof connector>;

export default connector(CurrencyData);
