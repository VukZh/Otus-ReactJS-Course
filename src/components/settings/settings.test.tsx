/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Settings from './Settings';
import userEvent from '@testing-library/user-event';
import { store } from '@/state/store';

test('Settings test', () => {
  render(
    <Provider store={store}>
      <Settings close={() => null} />
    </Provider>
  );
  expect(screen.queryByText('111')).toBeNull();
  expect(screen.queryByText('Please select options:')).not.toBeNull();
  expect(screen.queryByText('Set update time:')).not.toBeNull();
  expect(screen.queryByText('Set history:')).not.toBeNull();
  expect(screen.getAllByRole('button').length).toBe(2);
  expect(screen.queryByRole('checkbox')).toBeInTheDocument();
  expect(screen.getAllByRole('option').length).toBe(4);
  expect(screen.getAllByRole('option')[0]).toHaveTextContent('1 minute');
  expect(screen.getAllByRole('option')[3]).toHaveTextContent('2 seconds');
  expect(screen.getAllByRole('button')[0]).toHaveTextContent('Submit');
  expect(screen.getAllByRole('button')[1]).toHaveTextContent('Cancel');

  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: '2 seconds' })
  );
  const option2sec = screen.getByRole('option', {
    name: '2 seconds',
  }) as HTMLOptionElement;
  expect(option2sec.selected).toBe(true);
});
