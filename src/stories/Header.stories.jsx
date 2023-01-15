import React from 'react';

import { Header } from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header
};

const Hdr = (args) => <Header {...args} />;

export const HeaderPart = Hdr.bind({});
HeaderPart.args = {};
