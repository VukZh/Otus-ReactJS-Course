/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('Button test', () => {
  render(
    <Header
      showModal={() => null}
      historicity={true}
      history={[]}
      changeCurrency={() => null}
    ></Header>
  );
  const text = screen.getAllByText(/Please/i);
  expect(text[0]).toBeInTheDocument();
  const buttons = screen.getAllByRole('button');
  expect(buttons[4]).toBeInTheDocument();
  expect(buttons).toHaveLength(7);
});
