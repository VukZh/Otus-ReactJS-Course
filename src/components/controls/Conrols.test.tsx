/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Controls } from './Controls';
import { Provider } from 'react-redux';
import mockRouter from 'next-router-mock';
import { store } from '../../state/store';

jest.mock('next/router', () => require('next-router-mock'));

test('Controls test', () => {
  const fn = jest.fn();
  mockRouter.push('/');
  render(
    <Provider store={store}>
      <Controls showModal={fn}></Controls>
    </Provider>
  );
  expect(screen.getAllByText(/Please/i)[0]).toBeInTheDocument();
  expect(screen.getAllByRole('button')).toHaveLength(13);
  expect(screen.getAllByRole('button')[9]).toHaveTextContent('ETH');
});
