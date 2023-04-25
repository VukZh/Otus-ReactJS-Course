/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ControlSection from './controlSection';
import { Provider } from 'react-redux';
import { store } from '../state/store';
describe('ControlSection test', () => {
  test('ControlSection test text', async () => {
    render(
      <Provider store={store}>
        <ControlSection />
      </Provider>
    );
    expect(screen.getByText(/Select currency:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Select currencies:/i)).not.toBeInTheDocument();
  });
});
