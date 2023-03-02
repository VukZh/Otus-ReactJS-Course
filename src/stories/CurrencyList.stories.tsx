import React from 'react';
import { CurrencyList } from '../components/controls/CurrencyList';
export default {
  title: 'Example/CurrencyList',
  component: CurrencyList,
  argTypes: { onClick: { action: 'Select currency' } },
};
const Lst = (args: any) => <CurrencyList {...args} />;

export const List = Lst.bind({});
List.args = {
  currencies: ['EUR', 'JPY', 'GBP'],
  activated: 'JPY',
};
