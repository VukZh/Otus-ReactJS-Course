/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CurrencyList from './CurrencyList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { store } from '../../state/store';
import {StateType} from "../../state/types";

const mockStore = configureStore([]);
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

  test('List component with mock store test', () => {
    const initialState: StateType = {
      currency: 0,
      currentCurrency: '',
      increased: undefined,
      historicity: true,
      history: [],
      randomCurrency: 0,
      currencies: ['BTC', 'ETH', 'ER~'],
      isLoading: false,
      error: null,
      period: 3000,
    };

    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CurrencyList />
      </Provider>
    );
    expect(screen.queryByText('EUR')).toBeNull();
    expect(screen.queryByText('ETH')).not.toBeNull();
    expect(screen.queryByText('ETC')).toBeNull();
    expect(screen.queryByRole('list'));
    expect(screen.getAllByRole('button').length).toBe(3);
  });
});
