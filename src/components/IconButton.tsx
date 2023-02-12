import React, { useEffect } from 'react';
import './iconButton.css';
import forwardIcon from '../../public/assets/forward.png';
import backwardIcon from '../../public/assets/backward.png';
import settingsIcon from '../../public/assets/settings.png';

type TypeIcon = 'forward' | 'backward' | 'settings';
interface IconButtonsProps {
  icon: TypeIcon;
}

export const IconButton: React.FC<IconButtonsProps> = ({ icon, ...props }) => {
  const iconImage =
    icon === 'forward'
      ? forwardIcon
      : icon === 'backward'
      ? backwardIcon
      : settingsIcon;
  const iconStyle = {
    background: `url(${iconImage})`,
  };
  useEffect(() => {});
  return (
    <div className='iconButton-wrapper'>
      <button
        type='button'
        className='icon-button'
        style={iconStyle}
        {...props}
      ></button>
    </div>
  );
};
