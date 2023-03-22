/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Controls } from './Controls';

test('Controls test', () => {
  const fn = jest.fn();
  render(
    <BrowserRouter>
      <Controls
        changeCurrentCurrency={fn}
        changeRandomCurrency={fn}
        changeCurrency={fn}
        showModal={fn}
        history={[]}
        currentCurrency='USD'
        currencies={['EUR', 'USD']}
        historicity={false}
      ></Controls>
    </BrowserRouter>
  );
  expect(screen.getAllByText(/Please/i)[0]).toBeInTheDocument();
  expect(screen.getAllByRole('button')).toHaveLength(10);
  expect(screen.getAllByRole('button')[9]).toHaveTextContent('USD');
});
