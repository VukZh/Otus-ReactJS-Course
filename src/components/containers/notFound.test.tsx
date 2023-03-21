/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';
describe('NotFound test', () => {
  test('NotFound test text', async () => {
    render(<NotFound />);
    expect(screen.getByText(/Oops/i)).toBeInTheDocument();
    expect(screen.queryByText(/Ooops/i)).not.toBeInTheDocument();
  });
});
