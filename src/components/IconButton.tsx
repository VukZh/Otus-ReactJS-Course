import React, { useEffect } from 'react';
import './iconButton.css';
import forwardIcon from '../../public/assets/forward.png';
import backwardIcon from '../../public/assets/backward.png';

type TypeIcon = 'forward' | 'backward';
interface IconButtonsProps {
  icon: TypeIcon;
}

export const IconButton: React.FC<IconButtonsProps> = ({ icon, ...props }) => {
  const iconImage = icon === 'forward' ? forwardIcon : backwardIcon;
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
