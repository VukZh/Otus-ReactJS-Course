/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CurrencyList } from './CurrencyList';
import { userEvent } from '@storybook/testing-library';

describe('Currencies list test', () => {
  test('List"s buttons test', async () => {
    jest.spyOn(console, 'log');
    render(
      <CurrencyList
        activated='EUR'
        currencies={['EUR', 'JPY', 'GBP']}
      ></CurrencyList>
    );
    const button1 = screen.getByRole('button', { name: 'EUR' });
    await userEvent.click(button1);
    expect(console.log).toHaveBeenCalledWith('clicked on currency: EUR');
    const button2 = screen.getByRole('button', { name: 'GBP' });
    await userEvent.click(button2);
    expect(console.log).toHaveBeenCalledWith('clicked on currency: GBP');
    expect(screen.getByRole('button', { name: 'JPY' })).toBeInTheDocument();
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
    expect(screen.getAllByRole('button').length).toBe(3);
  });
});
