/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

import '@testing-library/react';

import '@testing-library/jest-dom';
import * as React from 'react';
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import { render, screen } from '@testing-library/react';
import { NavBar } from '@/components/NavBar';
jest.mock('next/router', () => require('next-router-mock'));
test('NavBar test', () => {
  mockRouter.push('/');
  render(<NavBar />);
  const links = screen.queryAllByRole('link');
  expect(links.length).toBe(2);
  expect(screen.getByText(/Start/i)).toBeInTheDocument();
  expect(screen.getByText(/Currency/i)).toBeInTheDocument();
});
