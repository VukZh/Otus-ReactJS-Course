/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CurrencyList } from './CurrencyList';

describe('Currencies list test', () => {
  test('List component test', () => {
    render(
      <CurrencyList
        activated='EUR'
        currencies={['EUR', 'JPY', 'GBP']}
        changeCurrency={() => null}
      ></CurrencyList>
    );
    expect(screen.queryByText('EUR')).not.toBeNull();
    expect(screen.queryByRole('list'));
    expect(screen.getAllByRole('button').length).toBe(3);
  });
});
