import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoPage from '../components/NoPage';

describe('Tests for NoPage component', () => {
  render(<NoPage />);
  test('Check for the text 404 on screen', () => {
    expect(screen.queryByText(/404/)).toBeTruthy();
  });
  test('Check for the snapshot of debug', () => {
    expect(screen.debug()).toMatchSnapshot();
  });
});
