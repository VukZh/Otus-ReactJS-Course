import React from 'react';

import { Settings } from '../components/Settings';

export default {
  title: 'Example/Settings',
  component: Settings,
};

const Set = () => <Settings />;

export const SettingsPart = Set.bind({});
SettingsPart.args = {};
