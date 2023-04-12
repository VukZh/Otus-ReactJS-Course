import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ControlButtons from '../components/controls/ControlButtons';
import { store } from '../state/store';
export default {
  title: 'Example/ControlButtons',
  component: ControlButtons,
};

export const Hdr = (args: any) => (
  <Provider store={store}>
    {/*<BrowserRouter>*/}
    <ControlButtons {...args} />
    {/*</BrowserRouter>*/}
  </Provider>
);

Hdr.args = {};
