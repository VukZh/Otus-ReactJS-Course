import React from 'react';
import { CurrencyData } from '../components/CurrencyData';
export default {
  title: 'Example/Data',
  component: CurrencyData,
};
const CurrData = (args: any) => <CurrencyData {...args} />;

export const ExampleData = CurrData.bind({});
ExampleData.args = {
  exchangeRate: 485,
  increased: undefined,
};
