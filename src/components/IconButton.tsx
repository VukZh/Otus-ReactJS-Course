import React, { useEffect } from 'react';
import forwardIcon from '../../public/assets/forward.png';
import backwardIcon from '../../public/assets/backward.png';
import settingsIcon from '../../public/assets/settings.png';
import shuffleIcon from '../../public/assets/shuffle.png';
import exitIcon from '../../public/assets/exit.png';
import { style } from 'typestyle';

type TypeIcon = 'forward' | 'backward' | 'settings' | 'shuffle' | 'exit';
interface IconButtonsProps {
  icon: TypeIcon;
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
  const iconImage =
    icon === 'forward'
      ? forwardIcon
      : icon === 'backward'
      ? backwardIcon
      : icon === 'shuffle'
      ? shuffleIcon
      : icon === 'exit'
      ? exitIcon
      : settingsIcon;
  const iconStyle = {
    background: `url(${iconImage})`,
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {});
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
