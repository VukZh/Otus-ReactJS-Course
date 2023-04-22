import React from 'react';
import { App } from '../App';
export default {
  title: 'Example/Text',
  component: App,
};
const App_Sample = () => <App />;

export const AppSample = App_Sample.bind({});
AppSample.args = {};
