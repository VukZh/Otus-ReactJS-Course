import React from 'react';

import { IconButton } from '../components/IconButton';
export default {
  title: 'Example/Icon Button',
  component: IconButton,
  argTypes: { onClick: { action: 'Click icon' } },
};
const IconBtn = (args: any) => <IconButton {...args} />;

export const ExampleIconButton = IconBtn.bind({});
ExampleIconButton.args = {
  icon: 'forward'
};

