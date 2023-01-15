import React from 'react';
import PropTypes from 'prop-types';
import './iconButton.css';
import forwardIcon from '../../public/assets/forward.png';
import backwardIcon from '../../public/assets/backward.png';

export const IconButton = ({ icon, ...props }) => {
  const iconImage = icon === 'forward' ? forwardIcon : backwardIcon;
  const iconStyle = {
    background: `url(${iconImage})`,
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return (
    <button
      type="button"
      className='icon-button'
      style={iconStyle}
      {...props}
    >
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  /**
   * Optional icon button
   */
  icon: PropTypes.string,
};

IconButton.defaultProps = {
  icon: "forward",
  onClick: undefined,
};
