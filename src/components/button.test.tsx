/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

describe('Button test', () => {
  test('Button handler test', async () => {
    jest.spyOn(console, 'log');
    render(<Button label='15' />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(console.log).not.toHaveBeenCalledWith('clicked on time period: 30');
    expect(console.log).toHaveBeenCalledWith('clicked on time period: 15');
  });
  test('Button component test', () => {
    render(<Button label='111' active={false}></Button>);
    expect(screen.queryByText('111')).not.toBeNull();
    expect(screen.queryByText('113')).toBeNull();
    expect(screen.queryByRole('button'));
  });
});
