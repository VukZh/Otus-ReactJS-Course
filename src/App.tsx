import React from 'react';
import ControlSection from './components/controlSection';
import CurrencyGraph from './components/currencyGraph';

export const App: React.FC = () => {
  return (
    <>
      <ControlSection />
      <div></div>
      <CurrencyGraph />
    </>
  );
};
