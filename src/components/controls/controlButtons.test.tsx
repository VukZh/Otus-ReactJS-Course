/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ControlButtons } from './ControlButtons';

test('Button test', () => {
  render(
    <ControlButtons
      showModal={() => null}
      historicity={true}
      history={[]}
      changeCurrency={() => null}
      listSize={3}
      changeRandomCurrency={() => null}
    ></ControlButtons>
  );
  const text = screen.getAllByText(/Please/i);
  expect(text[0]).toBeInTheDocument();
  const buttons = screen.getAllByRole('button');
  expect(buttons[4]).toBeInTheDocument();
  expect(buttons).toHaveLength(7);
});
