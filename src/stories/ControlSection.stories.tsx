import React from 'react';
import ControlSection from '../components/controlSection';
import { Provider } from 'react-redux';
import { store } from '../state/store';
export default {
  title: 'Example/Control',
  component: ControlSection,
};
const ControlSection_Sample = (args: any) => (
  <Provider store={store}>
    <ControlSection {...args} />
  </Provider>
);

export const Control_Section = ControlSection_Sample.bind({});
Control_Section.args = {};
