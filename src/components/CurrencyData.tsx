import React from 'react';
import './currencyData.css';

interface CurrencyDataProps {
  exchangeRate: number | undefined;
}

export const CurrencyData: React.FC<CurrencyDataProps> = ({ exchangeRate }) => {
  if (exchangeRate === undefined) {
    throw new Error("can't get data");
  }
  return <div className='formattedData'>{exchangeRate}</div>;
};
