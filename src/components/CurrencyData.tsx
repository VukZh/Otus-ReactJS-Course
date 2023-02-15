import React from 'react';
import { IncreasedType } from '../index';
import { classes, style } from 'typestyle';

interface CurrencyDataProps {
  exchangeRate: number | undefined;
  increased: IncreasedType;
}

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

export const CurrencyData: React.FC<CurrencyDataProps> = ({
  exchangeRate,
  increased,
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
  return <div className={dataStyle}>{exchangeRate}</div>;
};
