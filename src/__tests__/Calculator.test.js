import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/Calculator.js';

describe('Calculator', () => {
  test('renders Calculator component', () => {
    render(<App />);
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryByText(/Todo List React/)).toBeNull();
    expect(screen.getByText(/Let's do some math!/)).toBeTruthy();
    expect(screen.getByRole('table')).toBeVisible();
    const total = screen.getByRole('columnheader');
    screen.debug(total);
    fireEvent.click(screen.getByText('5'));
    screen.debug(total);
  });
});