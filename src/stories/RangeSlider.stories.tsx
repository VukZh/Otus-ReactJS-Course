import React from 'react';
import RangeSlider from '../components/rangeSlider';
import { Provider } from 'react-redux';
import { store } from '../state/store';
export default {
  title: 'Example/RangeSlider',
  component: RangeSlider,
};
const RangeSlider_Sample = (args: any) => (
  <Provider store={store}>
    <RangeSlider {...args} />
  </Provider>
);

export const Range_Slider = RangeSlider_Sample.bind({});
Range_Slider.args = {};
