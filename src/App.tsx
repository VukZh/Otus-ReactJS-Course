import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getHistoricalData } from './services/getHistoricalData';
import { getTopList } from './services/getTopList';

const Text = styled.div`
  color: green;
  font-size: 20px;
`;
export const App: React.FC = () => {
  useEffect(() => {
    getHistoricalData('day', 'BTC').then((res) =>
      console.log(
        'data',
        res.Data.Data.map((el) => ({
          time: el.time,
          high: el.high,
          low: el.low,
          open: el.open,
          close: el.close,
        }))
      )
    );
    getTopList().then((res) =>
      console.log(
        'top',
        res.Data.map((el) => ({
          name: el.CoinInfo.Name,
          fullName: el.CoinInfo.FullName,
        }))
      )
    );
  });
  return <Text>Hello</Text>;
};
