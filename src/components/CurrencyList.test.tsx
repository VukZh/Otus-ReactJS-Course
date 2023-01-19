/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CurrencyList, clickListHandler } from './CurrencyList';

describe('Currencies list test', () => {
  test('List"s item handler test', () => {
    const log = jest.spyOn(global.console, 'log').mockImplementation(() => {});
    clickListHandler('EUR');
    expect(log).toHaveBeenCalledWith('clicked on currency: EUR');
    clickListHandler('GBP');
    expect(log).toHaveBeenCalledWith('clicked on currency: GBP');
    clickListHandler('JPY');
    expect(log).toHaveBeenCalledWith('clicked on currency: JPY');
    expect(log).not.toHaveBeenCalledWith('clicked on currency: RUB');
  });
  test('List component test', () => {
    render(
      <CurrencyList
        activated='EUR'
        currencies={['EUR', 'JPY', 'GBP']}
      ></CurrencyList>
    );
    expect(screen.queryByText('EUR')).not.toBeNull();
    expect(screen.queryByRole('list'));
  });
});
