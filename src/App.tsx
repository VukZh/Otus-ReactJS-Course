import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {ActionTypes} from "./state/types";

const Text = styled.div`
  color: green;
  font-size: 20px;
`;
export const App: React.FC = () => {
  const dispatch = useDispatch();
  const getTopListHandle = () => dispatch({type: ActionTypes.GET_TOP_CURRENCIES})
  const getHistoricalDataHandle = () => dispatch({type: ActionTypes.GET_HISTORICAL_DATA})
  return (
    <>
      <Text>Hello</Text>
      <button onClick={getTopListHandle}>GetTopList</button>
      <button onClick={getHistoricalDataHandle}>GetHistoricalData</button>
    </>
  );
};
