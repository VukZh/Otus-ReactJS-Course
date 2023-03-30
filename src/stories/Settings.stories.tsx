import React from 'react';

import Settings from '../components/settings/Settings';
import { Provider } from 'react-redux';
import { store } from '../state/store';

export default {
  title: 'Example/Settings',
  component: Settings,
};

const Set = () => (
  <Provider store={store}>
    <Settings close={() => null} setGettingPeriod={() => null} />
  </Provider>
);

export const SettingsPart = Set.bind({});
SettingsPart.args = {};
