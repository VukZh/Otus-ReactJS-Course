import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ControlButtons } from '../components/controls/ControlButtons';
export default {
  title: 'Example/ControlButtons',
  component: ControlButtons,
};

export const Hdr = (args: any) => (
  <BrowserRouter>
    <ControlButtons {...args} />
  </BrowserRouter>
);

Hdr.args = {};
