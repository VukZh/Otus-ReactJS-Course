/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import StartPage from '../pages/start';
jest.mock('next/router', () => require('next-router-mock'));
describe('StartPage test', () => {
  test('StartPage test', () => {
    render(<StartPage></StartPage>);
    expect(screen.getByText(/Cryptocurrency checker app/i)).toBeInTheDocument();
    expect(screen.getByText(/Input your name/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
