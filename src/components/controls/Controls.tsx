import React from 'react';
import { style } from 'typestyle';
import { Header } from './Header';
import { CurrencyList } from './CurrencyList';

interface ControlsProps {
  // eslint-disable-next-line no-unused-vars
  showModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  historicity: boolean;
  // eslint-disable-next-line no-unused-vars
  changeCurrency: (currency: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeRandomCurrency: (random: number) => void;
  history: Array<string>;
  currencies: Array<string>;
  currentCurrency: string;
  // eslint-disable-next-line no-unused-vars
  changeCurrentCurrency(currency: string): void;
}

const controlsStyle = style({
  margin: '20px',
  display: 'flex',
});

export const Controls: React.FC<ControlsProps> = ({
  showModal,
  historicity,
  changeCurrency,
  changeRandomCurrency,
  history,
  currencies,
  currentCurrency,
  changeCurrentCurrency,
}) => {
  return (
    <div className={controlsStyle}>
      <Header
        showModal={showModal}
        historicity={historicity}
        changeCurrency={changeCurrency}
        changeRandomCurrency={changeRandomCurrency}
        history={history}
        listSize={currencies.length}
      ></Header>
      <CurrencyList
        activated={currentCurrency}
        currencies={currencies}
        changeCurrency={changeCurrentCurrency}
      ></CurrencyList>
    </div>
  );
};
