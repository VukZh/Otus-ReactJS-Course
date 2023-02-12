/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Settings } from './Settings';

test('Settings test', () => {
  render(<Settings></Settings>);
  expect(screen.queryByText('111')).toBeNull();
  expect(screen.queryByText('Please select options:')).not.toBeNull();
  expect(screen.queryByText('Set update time:')).not.toBeNull();
  expect(screen.queryByText('Set history:')).not.toBeNull();
  expect(screen.queryByRole('button'));
  expect(screen.queryByRole('form'));
  expect(screen.queryByRole('checkbox'));
  expect(screen.getAllByRole('option').length).toBe(4);
  expect(screen.getAllByRole('option')[0]).toHaveTextContent('1 minute');
  expect(screen.getAllByRole('option')[3]).toHaveTextContent('2 seconds');
});
