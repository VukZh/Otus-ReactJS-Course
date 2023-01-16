/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

test('IconButton test', () => {
  render(<IconButton icon='forward'></IconButton>);
  expect(screen.queryByText('111')).toBeNull();
  expect(screen.queryByRole('button'));
});
