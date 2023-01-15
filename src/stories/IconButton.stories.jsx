import React from 'react';

import { IconButton } from '../components/IconButton';
export default {
  title: 'Example/Icon Button',
  component: IconButton,
};
const IconBtn = (args) => <IconButton {...args} />;

export const ExampleIconButton = IconBtn.bind({});
ExampleIconButton.args = {
  icon: '1'
};

