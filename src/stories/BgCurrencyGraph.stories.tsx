import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import SliderBackground from "../components/bgCurrencyGraph";
export default {
  title: 'Example/BgCurrencyGraph',
  component: SliderBackground,
};
const BgCurrencyGraph_Sample = (args: any) => (
  <Provider store={store}>
    <SliderBackground {...args} />
  </Provider>
);

export const Slider_Background = BgCurrencyGraph_Sample.bind({});
Slider_Background.args = {};
