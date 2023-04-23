import React from 'react';
import ControlSection from './components/controlSection';
import CurrencyGraph from './components/currencyGraph';
import RangeSlider from './components/rangeSlider';

export const App: React.FC = () => {
  return (
    <>
      <ControlSection />
      <div></div>
      <CurrencyGraph />
      <div></div>
      <RangeSlider />
    </>
  );
};
