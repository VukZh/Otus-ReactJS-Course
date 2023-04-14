import React from 'react';
import CurrencyList from '../components/controls/CurrencyList';
import { Provider } from 'react-redux';
import { store } from '../state/store';
export default {
  title: 'Example/CurrencyList',
  component: CurrencyList,
  argTypes: { onClick: { action: 'Select currencies' } },
};
const Lst = (args: any) => (
  <Provider store={store}>
    <CurrencyList {...args} />
  </Provider>
);

export const List = Lst.bind({});
List.args = {
  currencies: ['EUR', 'JPY', 'GBP'],
  activated: 'JPY',
};
