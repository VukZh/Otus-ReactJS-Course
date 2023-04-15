import React from 'react';
import { Provider } from 'react-redux';

import ControlButtons from '../components/controls/ControlButtons';
import { store } from '../state/store';

export default {
  title: 'Example/ControlButtons',
  component: ControlButtons,
};

export const Hdr = (args: any) => {
  return (
    <Provider store={store}>
      <ControlButtons {...args} />
    </Provider>
  );
};

Hdr.args = {};
