/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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
  test('Input change test', () => {
    render(
      <BrowserRouter>
        <StartPage></StartPage>
      </BrowserRouter>
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'vvv'}});
    expect(input.value).toBe('vvv');
  });
  test('Submit test', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
    const { container } = render(
      <BrowserRouter>
        <StartPage></StartPage>
      </BrowserRouter>
    );
    const form = container.querySelector('form');
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(0);
    fireEvent.submit(form);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
