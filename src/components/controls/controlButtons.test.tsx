/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import ControlButtons from './ControlButtons';
import { store } from '../../state/store';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
test('Button test', () => {
  mockRouter.push('/');
  render(
    <Provider store={store}>
      <ControlButtons showModal={() => null}></ControlButtons>
    </Provider>
  );
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(5);
});
