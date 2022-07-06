import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote.js';

describe('Quote', () => {
  test('renders Quote component', () => {
    render(<Quote />);
    expect(screen.getByText('Refresh your screen to read a new quote')).toBeInTheDocument();
    expect(screen.getByText('Refresh your screen to read a new quote')).toBeVisible();
    expect(screen.getByText('Refresh your screen to read a new quote')).not.toHaveClass();
  });
});