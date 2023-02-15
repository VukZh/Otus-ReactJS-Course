import React from 'react';
import { classes, style } from 'typestyle';

interface ButtonProps {
  active?: boolean;
  label: string;
}

const buttonStyle = style({
  color: 'black',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 'normal',
  border: '1px solid darkgray',
  cursor: 'pointer',
  fontSize: '14px',
  width: '40px',
  height: '30px',
  margin: '0 2px',
});

const buttonActiveStyle = style({
  fontWeight: 'bold',
  backgroundColor: '#ddd',
  $nest: {
    '&:hover': {
      backgroundColor: '#eee',
    },
    '&:active': {
      fontWeight: 'normal',
      backgroundColor: 'white',
    },
  },
});

const buttonNoActiveStyle = style({
  backgroundColor: 'white',
  $nest: {
    '&:hover': {
      backgroundColor: '#eee',
    },
    '&:active': {
      fontWeight: 'bold',
      backgroundColor: '#ddd',
    },
  },
});

export const Button: React.FC<ButtonProps> = ({ active, label, ...props }) => {
  const mode = active ? buttonActiveStyle : buttonNoActiveStyle;
  const clickTimePeriodHandler = (time: string) =>
    console.log(`clicked on time period: ${time}`);
  return (
    <button
      type='button'
      className={classes(buttonStyle, mode)}
      onClick={() => {
        clickTimePeriodHandler(label);
      }}
      {...props}
    >
      {label}
    </button>
  );
};
