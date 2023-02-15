import React, { useState } from 'react';

import { Button } from './Button';
import { IconButton } from './IconButton';
import { style } from 'typestyle';
interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  showModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  historicity: boolean;
  // eslint-disable-next-line no-unused-vars
  changeCurrency: (currency: string) => void;
  history: Array<string>;
}

type Direction = 'f' | 'b';

const headerWrapperStyle = style({
  fontFamily: 'Helvetica, Arial, sans-serif',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  padding: '30px 20px',
  display: 'flex',
  justifyContent: 'space-around',
  width: '80vw',
});

const selectTimeStyle = style({
  fontWeight: '700',
  fontSize: '15px',
  lineHeight: '3',
  margin: '2px 20px',
  display: 'inline-block',
  verticalAlign: 'top',
});
export const Header: React.FC<HeaderProps> = ({
  showModal,
  historicity,
  changeCurrency,
  history,
}) => {
  // eslint-disable-next-line prefer-const
  const [indexCurrencyArray, setIndexCurrencyArray] = useState(0);
  const handleChangeCurrency = (direction: Direction) => {
    if (history.length === 0) return;
    if (
      historicity &&
      direction === 'f' &&
      indexCurrencyArray < history.length - 1
    ) {
      setIndexCurrencyArray(indexCurrencyArray + 1);
      changeCurrency(history[indexCurrencyArray]);
    } else if (historicity && direction === 'b' && indexCurrencyArray > 0) {
      setIndexCurrencyArray(indexCurrencyArray - 1);
      changeCurrency(history[indexCurrencyArray]);
    } else if (
      historicity &&
      direction === 'f' &&
      indexCurrencyArray === history.length - 1
    ) {
      changeCurrency(history[history.length - 1]);
    } else if (historicity && direction === 'b' && indexCurrencyArray === 0) {
      changeCurrency(history[0]);
    }
  };
  return (
    <header>
      <div className={headerWrapperStyle}>
        <div>
          <div className={selectTimeStyle}>Please select time period</div>
          <Button active={true} label='15'></Button>
          <Button label='30'></Button>
          <Button label='60'></Button>
          <IconButton
            icon='backward'
            disabled={!historicity}
            onClickAction={() => handleChangeCurrency('b')}
          ></IconButton>
          <IconButton
            icon='forward'
            disabled={!historicity}
            onClickAction={() => handleChangeCurrency('f')}
          ></IconButton>
          <IconButton icon='settings' onClickAction={showModal}></IconButton>
        </div>
      </div>
    </header>
  );
};
