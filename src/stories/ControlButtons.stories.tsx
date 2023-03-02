import React from 'react';

import { ControlButtons } from '../components/controls/ControlButtons';
export default {
  title: 'Example/ControlButtons',
  component: ControlButtons,
};

const Hdr = (args: any) => <ControlButtons {...args} />;

export const HeaderPart = Hdr.bind({});
HeaderPart.args = {};
