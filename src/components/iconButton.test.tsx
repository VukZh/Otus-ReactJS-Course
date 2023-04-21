/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';

import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Icons, IconButton } from './IconButton';

test('IconButton test', () => {
  render(<IconButton icon={Icons.forward}></IconButton>);
  expect(screen.queryByText('111')).toBeNull();
  expect(screen.queryByRole('button'));
});
