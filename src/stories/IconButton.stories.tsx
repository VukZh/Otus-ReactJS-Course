import React from 'react';
import { IconButton, Icons } from '../components/IconButton';
export default {
  title: 'Example/Icon Button',
  component: IconButton,
  argTypes: { onClick: { action: 'Click icon' } },
};
const IconBtn = (args: any) => <IconButton {...args} />;

export const ExampleIconButton = IconBtn.bind({});
ExampleIconButton.args = {
  icon: Icons.forward,
};
