/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, clickTimePeriodHandler } from './Button';

describe('Button test', () => {
  test('Button handler test', () => {
    const log = jest.spyOn(global.console, 'log').mockImplementation(() => {});
    clickTimePeriodHandler('15');
    expect(log).toHaveBeenCalledWith('clicked on time period: 15');
    clickTimePeriodHandler('45');
    expect(log).toHaveBeenCalledWith('clicked on time period: 45');
    expect(log).not.toHaveBeenCalledWith('clicked on time period: 45 minutes');
  });
  test('Button component test', () => {
    render(<Button label='111' active={false}></Button>);
    expect(screen.queryByText('111')).not.toBeNull();
    expect(screen.queryByRole('button'));
  });
});
