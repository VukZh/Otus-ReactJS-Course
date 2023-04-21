/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Controls } from './Controls';
import { Provider } from 'react-redux';
import { store } from '../../state/store';

test('Controls test', () => {
  const fn = jest.fn();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Controls showModal={fn}></Controls>
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getAllByText(/Please/i)[0]).toBeInTheDocument();
  expect(screen.getAllByRole('button')).toHaveLength(13);
  expect(screen.getAllByRole('button')[9]).toHaveTextContent('ETH');
});
