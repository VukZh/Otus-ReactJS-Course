import React from 'react';
import { Button } from '../components/Button';
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { onClick: { action: 'Change active' } },
};
const Btn = (args: any) => <Button {...args} />;

export const Active = Btn.bind({});
Active.args = {
  active: true,
  label: '5',
};

export const NoActive = Btn.bind({});
NoActive.args = {
  label: '15',
};


