import React from 'react';
import './currencyList.css';

interface CurrencyListProps {
  currencies: Array<string>;
  activated: string;
  // eslint-disable-next-line no-unused-vars
  changeCurrency(currency: string): void;
}

export const CurrencyList: React.FC<CurrencyListProps> = ({
  currencies,
  activated,
  changeCurrency,
  ...props
}) => {
  const list = currencies.map((currency, index) => {
    const currencyStyle =
      activated === currency ? 'currency currency-active' : 'currency';
    const clickListHandler = (currency: string) => changeCurrency(currency);
    return (
      <li key={`${index}-${currency}`} {...props}>
        <button
          className={currencyStyle}
          onClick={() => clickListHandler(currency)}
        >
          {currency}
        </button>
      </li>
    );
  });
  return <ul className='list'>{list}</ul>;
};
