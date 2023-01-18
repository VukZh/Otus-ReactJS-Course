import React from 'react';
import './button.css';

interface ButtonProps {
  active?: boolean;
  label: string;
}

const clickTimePeriodHandler = (time: string) =>
  console.log(`clicked on time period: ${time}`);
export const Button: React.FC<ButtonProps> = ({ active, label, ...props }) => {
  const mode = active ? 'button--active' : 'button--no-active';

  return (
    <div
      className={'button-wrapper'}
      onClick={() => {
        clickTimePeriodHandler(label);
      }}
    >
      <button type='button' className={['button', mode].join(' ')} {...props}>
        {label}
      </button>
    </div>
  );
};
