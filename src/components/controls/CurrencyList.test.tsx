/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CurrencyList from './CurrencyList';
import { Provider } from 'react-redux';
import { store } from '../../state/store';

describe('Currencies list test', () => {
  test('List component test', () => {
    render(
      <Provider store={store}>
        <CurrencyList />
      </Provider>
    );
    expect(screen.queryByText('EUR')).toBeNull();
    expect(screen.queryByRole('list'));
    expect(screen.getAllByRole('button').length).toBe(5);
  });
});
