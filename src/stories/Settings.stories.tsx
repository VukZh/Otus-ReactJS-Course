import React from 'react';

import { Settings } from '../components/settings/Settings';

export default {
  title: 'Example/Settings',
  component: Settings,
};

const Set = () => <Settings close={() => null} />;

export const SettingsPart = Set.bind({});
SettingsPart.args = {};
