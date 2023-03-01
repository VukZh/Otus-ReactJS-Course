/** *
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CurrencyData } from './CurrencyData';

describe('Currencies test', () => {
  test('CurrencyData test with exchangeRate', () => {
    render(
      <CurrencyData exchangeRate={10101} increased={undefined}></CurrencyData>
    );
    expect(screen.queryByText('10101')).not.toBeNull();
    expect(screen.queryByText('10102')).toBeNull();
  });

  test('CurrencyData test throw error', () => {
    expect(() =>
      render(
        <CurrencyData
          exchangeRate={undefined}
          increased={undefined}
        ></CurrencyData>
      )
    ).toThrow("can't get data");
  });
});
