/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { StartPage } from './StartPage';

describe('StartPage test', () => {
  test('StartPage test', () => {
    render(
      <BrowserRouter>
        <StartPage></StartPage>
      </BrowserRouter>
    );
    expect(screen.getByText(/Cryptocurrency checker app/i)).toBeInTheDocument();
    expect(screen.getByText(/Input your name/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
