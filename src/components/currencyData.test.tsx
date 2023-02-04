/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CurrencyData } from './CurrencyData';

test('CurrencyData test', () => {
  render(<CurrencyData exchangeRate={10101}></CurrencyData>);
  expect(screen.queryByText('10101')).not.toBeNull();
  expect(screen.queryByText('10102')).toBeNull();
});
