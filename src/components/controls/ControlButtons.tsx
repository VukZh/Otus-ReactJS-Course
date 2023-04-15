import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { IconButton, Icons } from '../IconButton';
import { style } from 'typestyle';
import { State } from '../../state/reducer';
import { Dispatch } from 'redux';
import { ActionsType, ActionTypes } from '../../state/types';
import { IncreasedType } from '../../types';
import { connect, ConnectedProps } from 'react-redux';

type Direction = 'f' | 'b';

const headerWrapperStyle = style({
  fontFamily: 'Helvetica, Arial, sans-serif',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  padding: '30px 20px',
  display: 'flex',
  justifyContent: 'space-around',
  width: '80vw',
});

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  showModal,
  historicity,
  history,
  changeRandomCurrency,
  currencies,
  setIncreased,
  changeCurrency,
}) => {
  const [indexCurrencyArray, setIndexCurrencyArray] = useState(0);
  const siteNav = useRouter();
  function randomCurrency(size: number): number {
    const maxNumber = size - 2; // remove undef from currencies list
    return Math.floor(Math.random() * (maxNumber + 1));
  }
  const handleChangeCurrency = (direction: Direction) => {
    if (history.length === 0) return;
    if (
      historicity &&
      direction === 'f' &&
      indexCurrencyArray < history.length - 1
    ) {
      setIndexCurrencyArray(indexCurrencyArray + 1);
      changeCurrency(history[indexCurrencyArray]);
      setIncreased(undefined);
    } else if (historicity && direction === 'b' && indexCurrencyArray > 0) {
      setIndexCurrencyArray(indexCurrencyArray - 1);
      changeCurrency(history[indexCurrencyArray]);
      setIncreased(undefined);
    } else if (
      historicity &&
      direction === 'f' &&
      indexCurrencyArray === history.length - 1
    ) {
      changeCurrency(history[history.length - 1]);
    } else if (historicity && direction === 'b' && indexCurrencyArray === 0) {
      changeCurrency(history[0]);
      setIncreased(undefined);
    }
  };
  const handleExit = () => {
    window.localStorage.removeItem('name');
    siteNav.push('/');
  };
  return (
    <header>
      <div className={headerWrapperStyle}>
        <div>
          <IconButton
            icon={Icons.backward}
            disabled={!historicity}
            onClickAction={() => handleChangeCurrency('b')}
          ></IconButton>
          <IconButton
            icon={Icons.forward}
            disabled={!historicity}
            onClickAction={() => handleChangeCurrency('f')}
          ></IconButton>
          <IconButton
            icon={Icons.shuffle}
            onClickAction={() => {
              changeRandomCurrency(randomCurrency(currencies.length));
            }}
          ></IconButton>
          <IconButton
            icon={Icons.settings}
            onClickAction={showModal}
          ></IconButton>
          <IconButton icon={Icons.exit} onClickAction={handleExit}></IconButton>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state: State) => ({
  historicity: state.historicity,
  history: state.history,
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
  return {
    changeRandomCurrency: (ind: number) =>
      dispatch({
        type: ActionTypes.CHANGE_RANDOM_CURRENCY,
        payload: ind,
      }),
    setIncreased: (increased: IncreasedType) =>
      dispatch({
        type: ActionTypes.SET_INCREASED,
        payload: increased,
      }),
    changeCurrency: (currency: string) =>
      dispatch({
        type: ActionTypes.CHANGE_CURRENCY,
        payload: currency,
      }),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PreControlButtonsProps = ConnectedProps<typeof connector>;

interface ControlButtonsProps extends PreControlButtonsProps {
  showModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default connector(ControlButtons);
