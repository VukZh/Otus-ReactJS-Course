import React from 'react';
import styled from 'styled-components';
import { ActionTypes } from './state/types';
import { ControlSection } from './components/controlSection';
import { useTypedDispatch } from './hooks/useTypedDispatch';

const Text = styled.div`
  color: green;
  font-size: 20px;
`;
export const App: React.FC = () => {
  const dispatch = useTypedDispatch();
  const getTopListHandle = () =>
    dispatch({ type: ActionTypes.GET_TOP_CURRENCIES });
  const getHistoricalDataHandle = () =>
    dispatch({ type: ActionTypes.GET_HISTORICAL_DATA });
  return (
    <>
      <Text>Hello</Text>
      <button onClick={getTopListHandle}>GetTopList</button>
      <button onClick={getHistoricalDataHandle}>GetHistoricalData</button>
      <div></div>
      <ControlSection />
    </>
  );
};
