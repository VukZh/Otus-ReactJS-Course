import React from 'react';
import './button.css';

interface ButtonProps {
  active?: boolean;
  label: string;
}
export const Button: React.FC<ButtonProps> = ({ active, label, ...props }) => {
  const mode = active ? 'button--active' : 'button--no-active';
  return (
    <button type='button' className={['button', mode].join(' ')} {...props}>
      {label}
    </button>
  );
};
