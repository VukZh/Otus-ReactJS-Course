import React from 'react';
import './iconButton.css';
import forwardIcon from '../../public/assets/forward.png';
import backwardIcon from '../../public/assets/backward.png';

type TypeIcon = 'forward' | 'backward';
interface IconButtonsProps {
  icon: TypeIcon;
}

export class IconButton extends React.Component<IconButtonsProps> {
  render() {
    // const { icon, ...props } = this.props;
    const iconImage =
      this.props.icon === 'forward' ? forwardIcon : backwardIcon;
    const iconStyle = {
      background: `url(${iconImage})`,
    };
    return (
      <div className='iconButton-wrapper'>
        <button
          type='button'
          className='icon-button'
          style={iconStyle}
          {...this.props}
        ></button>
      </div>
    );
  }
}
