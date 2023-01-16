/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('Button test', () => {
  render(<Button label='111' active={false}></Button>);
  expect(screen.queryByText('111')).not.toBeNull();
  expect(screen.queryByRole('button'));
});
