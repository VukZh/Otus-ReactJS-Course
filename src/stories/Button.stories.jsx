import React from 'react';

import { Button } from '../components/Button';
export default {
  title: 'Example/Button',
  component: Button,
};
const Btn = (args) => <Button {...args} />;

export const Active = Btn.bind({});
Active.args = {
  active: true,
  label: '5',
};

export const NoActive = Btn.bind({});
NoActive.args = {
  label: '15',
};


