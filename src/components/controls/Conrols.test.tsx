/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Controls } from './Controls';

test('Controls test', () => {
  render(
    <Controls
      changeCurrentCurrency={() => {}}
      changeRandomCurrency={() => null}
      changeCurrency={() => null}
      showModal={() => null}
      history={[]}
      currentCurrency='USD'
      currencies={['EUR', 'USD']}
      historicity={false}
    ></Controls>
  );
  expect(screen.getAllByText(/Please/i)[0]).toBeInTheDocument();
  expect(screen.getAllByRole('button')).toHaveLength(9);
  expect(screen.getAllByRole('button')[8]).toHaveTextContent('USD');
});
