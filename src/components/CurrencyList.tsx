import React from 'react';
import './currencyList.css';

interface CurrencyListProps {
  currencies: Array<string>;
  activated: string;
}
export const CurrencyList: React.FC<CurrencyListProps> = ({
  currencies,
  activated,
  ...props
}) => {
  const list = currencies.map((currency, index) => {
    const currencyStyle =
      activated === currency ? 'currency currency-active' : 'currency';
    return (
      <li key={`${index}-${currency}`} {...props}>
        <button className={currencyStyle}>{currency}</button>
      </li>
    );
  });
  return <ul className='list'>{list}</ul>;
};
