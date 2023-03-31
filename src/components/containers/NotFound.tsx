import React from 'react';
import { style } from 'typestyle';

const notFoundStyle = style({
  fontFamily: 'Arial, SansSerif',
  margin: '10% auto',
  textAlign: 'center',
  color: 'red',
});

export const NotFound: React.FC = () => {
  return (
    <div className={notFoundStyle}>
      <h2>Oops - page not found</h2>
    </div>
  );
};
