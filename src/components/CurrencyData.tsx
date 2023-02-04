import React from 'react';
import './currencyData.css';

interface CurrencyDataProps {
  exchangeRate: number;
}
export class CurrencyData extends React.Component<CurrencyDataProps> {
  render() {
    return <div className='formattedData'>{this.props.exchangeRate}</div>;
  }
}
