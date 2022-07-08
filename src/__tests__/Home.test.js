import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('Tests for the Home component', () => {
  render(<Home />);
  test('Check for the following test on screen', () => {
    expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
    expect(screen.getByText(/Wikipedia/)).toBeInTheDocument();
    expect(screen.getByText(/Digitopolis/)).toBeInTheDocument();
  });
  test('Check for the snapshot', () => {
    expect(screen.debug()).toMatchSnapshot();
  });
});
