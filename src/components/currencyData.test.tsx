/** *
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CurrencyData from './CurrencyData';
import { Provider } from 'react-redux';
import { store } from '@/state/store';

describe('Currencies test', () => {
  test('CurrencyData test with exchangeRate', () => {
    render(
      <Provider store={store}>
        <CurrencyData />
      </Provider>
    );
    expect(screen.queryByText('0')).not.toBeNull();
    expect(screen.queryByText('10102')).toBeNull();
  });
});
