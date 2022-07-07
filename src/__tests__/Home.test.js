import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
    expect(screen.getByText(/Wikipedia/)).toBeInTheDocument();
    expect(screen.getByText(/Digitopolis/)).toBeInTheDocument();
    expect(screen.debug()).toMatchSnapshot();
  });
});
