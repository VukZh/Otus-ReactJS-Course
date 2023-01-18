/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CurrencyList } from './CurrencyList';

test('Button test', () => {
  render(
    <CurrencyList
      activated='EUR'
      currencies={['EUR', 'JPY', 'GBP']}
    ></CurrencyList>
  );
  expect(screen.queryByText('EUR')).not.toBeNull();
  expect(screen.queryByRole('list'));
});
