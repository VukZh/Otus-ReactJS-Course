import React from 'react';
import './button.css';

interface ButtonProps {
  active?: boolean;
  label: string;
}

export class Button extends React.Component<ButtonProps> {
  clickTimePeriodHandler = (time: string) =>
    console.log(`clicked on time period: ${time}`);
  render() {
    console.log('.', this.props.active);
    const mode = this.props!.active ? 'button--active' : 'button--no-active';
    return (
      <button
        type='button'
        className={['button', mode].join(' ')}
        onClick={() => {
          this.clickTimePeriodHandler(this.props.label);
        }}
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}
