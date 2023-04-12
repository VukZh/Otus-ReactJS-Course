/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './404';
describe('NotFound test', () => {
  test('NotFound test text', async () => {
    render(<NotFound />);
    expect(screen.getByText(/Oops/i)).toBeInTheDocument();
    expect(screen.queryByText(/Ooops/i)).not.toBeInTheDocument();
  });
});
