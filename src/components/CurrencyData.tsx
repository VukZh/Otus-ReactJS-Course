import React from 'react';
import './currencyData.css';
import { IncreasedType } from '../index';

interface CurrencyDataProps {
  exchangeRate: number | undefined;
  increased: IncreasedType;
}

export const CurrencyData: React.FC<CurrencyDataProps> = ({
  exchangeRate,
  increased,
}) => {
  if (exchangeRate === undefined) {
    throw new Error("can't get data");
  }
  const dataStyle =
    increased === 'yes'
      ? 'formattedData increased'
      : increased === 'no'
      ? 'formattedData decreased'
      : 'formattedData';
  return <div className={dataStyle}>{exchangeRate}</div>;
};
