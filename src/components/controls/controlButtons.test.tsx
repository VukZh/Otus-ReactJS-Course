/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import ControlButtons from './ControlButtons';
import { store } from '../../state/store';

test('Button test', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ControlButtons showModal={() => null}></ControlButtons>
      </BrowserRouter>
    </Provider>
  );
  const text = screen.getAllByText(/Please/i);
  expect(text[0]).toBeInTheDocument();
  const buttons = screen.getAllByRole('button');
  expect(buttons[4]).toBeInTheDocument();
  expect(buttons).toHaveLength(8);
  expect(screen.getByRole('button', {name: '15' })).toBeInTheDocument();
  expect(screen.getByRole('button', {name: '30' })).toBeInTheDocument();
  expect(screen.getByRole('button', {name: '60' })).toBeInTheDocument();
});
