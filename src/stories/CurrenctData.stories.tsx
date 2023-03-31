import React from 'react';
import CurrencyData from '../components/CurrencyData';
import { Provider } from 'react-redux';
import { store } from '../state/store';

export default {
  title: 'Example/Data',
  component: CurrencyData,
};
const CurrData = (args: any) => (
  <Provider store={store}>
    <CurrencyData {...args} />
  </Provider>
);

export const ExampleData = CurrData.bind({});
ExampleData.args = {
  exchangeRate: 485,
  increased: undefined,
};
