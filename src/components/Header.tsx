import React, { useState } from 'react';

import { Button } from './Button';
import './header.css';
import { IconButton } from './IconButton';

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  showModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  historicity: boolean;
  // eslint-disable-next-line no-unused-vars
  changeCurrency: (currency: string) => void;
  history: Array<string>;
}

type Direction = 'f' | 'b';

export const Header: React.FC<HeaderProps> = ({
  showModal,
  historicity,
  changeCurrency,
  history,
}) => {
  // eslint-disable-next-line prefer-const
  const [indexCurrencyArray, setIndexCurrencyArray] = useState(0);
  const handleChangeCurrency = (direction: Direction) => {
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
      <div className='wrapper'>
        <div>
          <div className='select-time'>Please select time period</div>
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
