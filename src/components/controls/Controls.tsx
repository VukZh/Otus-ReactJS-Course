import React from 'react';
import { style } from 'typestyle';
import { ControlButtons } from './ControlButtons';
import { CurrencyList } from './CurrencyList';

interface ControlsProps {
  showModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  historicity: boolean;
  changeCurrency: (currency: string) => void;
  changeRandomCurrency: (random: number) => void;
  history: Array<string>;
  currencies: Array<string>;
  currentCurrency: string;
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
      <ControlButtons
        showModal={showModal}
        historicity={historicity}
        changeCurrency={changeCurrency}
        changeRandomCurrency={changeRandomCurrency}
        history={history}
        listSize={currencies.length}
      ></ControlButtons>
      <CurrencyList
        activated={currentCurrency}
        currencies={currencies}
        changeCurrency={changeCurrentCurrency}
      ></CurrencyList>
    </div>
  );
};
