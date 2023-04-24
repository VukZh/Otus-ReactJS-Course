import React from 'react';
import ControlSection from './components/controlSection';
import CurrencyGraph from './components/currencyGraph';
import RangeSlider from './components/rangeSlider';
import BgCurrencyGraph from './components/bgCurrencyGraph';
import styled from 'styled-components';

const MainWrapper = styled.div`
  font-family: Arial, SansSerif;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
export const App: React.FC = () => {
  return (
    <MainWrapper>
      <ControlSection />
      <div></div>
      <CurrencyGraph />
      <div></div>
      <RangeSlider />
      <BgCurrencyGraph />
    </MainWrapper>
  );
};
