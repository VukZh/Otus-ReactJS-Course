import React from 'react';
import { classes, style } from 'typestyle';

interface CurrencyListProps {
  currencies: Array<string>;
  activated: string;
  changeCurrency(currency: string): void;
}

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

export const CurrencyList: React.FC<CurrencyListProps> = ({
  currencies,
  activated,
  changeCurrency,
  ...props
}) => {
  const list = currencies.map((currency, index) => {
    const currency_Style =
      activated.toLowerCase() === currency.toLowerCase()
        ? classes(currencyStyle, currencyActiveStyle)
        : currencyStyle;
    const clickListHandler = (currency: string) => changeCurrency(currency);
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
