import React from 'react';
import './button.css';

interface ButtonProps {
  active?: boolean;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ active, label, ...props }) => {
  const mode = active ? 'button--active' : 'button--no-active';
  const clickTimePeriodHandler = (time: string) =>
    console.log(`clicked on time period: ${time}`);
  return (
    <button
      type='button'
      className={['button', mode].join(' ')}
      onClick={() => {
        clickTimePeriodHandler(label);
      }}
      {...props}
    >
      {label}
    </button>
  );
};
