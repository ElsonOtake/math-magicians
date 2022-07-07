import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoPage from '../components/NoPage';

describe('Tests for NoPage component', () => {
  render(<NoPage />);
  test('Check for the following tests on screen', () => {
    expect(screen.queryByText(/404/)).toBeTruthy();

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeVisible();
    expect(screen.getByRole('heading')).not.toHaveClass();
    expect(screen.getByRole('heading')).toHaveTextContent('404');
  });
  test('Check for the snapshot of debug', () => {
    expect(screen.debug()).toMatchSnapshot();
  });
});
