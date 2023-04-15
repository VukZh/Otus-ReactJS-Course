import React from 'react';
import { style } from 'typestyle';
import ControlButtons from './ControlButtons';
import CurrencyList from './CurrencyList';

interface ControlsProps {
  showModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const controlsStyle = style({
  margin: '20px',
  display: 'flex',
});

const welcomePartStyle = style({
  fontFamily: 'Arial, SansSerif',
  fontSize: '12px',
  color: 'darkblue',
  textAlign: 'center',
  backgroundColor: 'lightsalmon',
});

export const Controls: React.FC<ControlsProps> = ({ showModal }) => {
  const welcomeString =
    typeof window !== 'undefined'
      ? `Hi ${window.localStorage.getItem('name')} !`
      : 'Hi !';
  return (
    <>
      <div className={welcomePartStyle}> {welcomeString} </div>
      <div className={controlsStyle}>
        <ControlButtons showModal={showModal} />
        <CurrencyList />
      </div>
    </>
  );
};
