import React from 'react';
import forwardIcon from '../../public/assets/icons/forward.png';
import backwardIcon from '../../public/assets/icons//backward.png';
import settingsIcon from '../../public/assets/icons//settings.png';
import shuffleIcon from '../../public/assets/icons//shuffle.png';
import exitIcon from '../../public/assets/icons//exit.png';
import { style } from 'typestyle';

export enum Icons {
  forward,
  backward,
  settings,
  shuffle,
  exit,
}

interface IconButtonsProps {
  icon: Icons;
  onClickAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const iconButtonStyle = style({
  border: '1px solid darkgray',
  cursor: 'pointer',
  position: 'relative',
  top: '9px',
  width: '40px',
  height: '30px',
  $nest: {
    '&:hover': {
      border: '1px solid darkgray',
    },
    '&:active': {
      border: '1px solid #666',
    },
  },
});

const iconButtonWrapperStyle = style({
  display: 'inline-block',
  margin: '0 2px',
});

const iconButtonDisabledStyle = style({
  border: '1px solid white',
  position: 'relative',
  top: '9px',
  width: '40px',
  height: '30px',
  backgroundColor: 'red',
});

export const IconButton: React.FC<IconButtonsProps> = ({
  icon,
  onClickAction,
  disabled,
  ...props
}) => {
  console.log('.', icon);
  const iconImage =
    icon === Icons.forward
      ? forwardIcon
      : icon === Icons.backward
      ? backwardIcon
      : icon === Icons.shuffle
      ? shuffleIcon
      : icon === Icons.exit
      ? exitIcon
      : settingsIcon;
  const iconStyle = {
    background: `url(${iconImage.src})`,
  };

  return (
    <div className={iconButtonWrapperStyle}>
      <button
        type='button'
        className={disabled ? iconButtonDisabledStyle : iconButtonStyle}
        style={iconStyle}
        onClick={onClickAction}
        {...props}
      ></button>
    </div>
  );
};
