/**
 * * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';

import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
test('App test', () => {
  render(<App />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
