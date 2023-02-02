import React from 'react';
import './currencyList.css';

interface CurrencyListProps {
  currencies: Array<string>;
  activated: string;
}

export class CurrencyList extends React.Component<CurrencyListProps> {
  clickListHandler = (currency: string) =>
    console.log(`clicked on currency: ${currency}`);
  render() {
    const list = this.props.currencies.map((currency, index) => {
      const currencyStyle =
        this.props.activated === currency
          ? 'currency currency-active'
          : 'currency';
      return (
        <li key={`${index}-${currency}`} {...this.props}>
          <button
            className={currencyStyle}
            onClick={() => this.clickListHandler(currency)}
          >
            {currency}
          </button>
        </li>
      );
    });
    return <ul className='list'>{list}</ul>;
  }
}
