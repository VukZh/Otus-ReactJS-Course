import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import CurrencyGraph from "../components/currencyGraph";
export default {
  title: 'Example/CurrencyGraph',
  component: CurrencyGraph,
};
const CurrencyGraph_Sample = (args: any) => (
  <Provider store={store}>
    <CurrencyGraph {...args} />
  </Provider>
);

export const Currency_Graph = CurrencyGraph_Sample.bind({});
Currency_Graph.args = {};
