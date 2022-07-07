import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

describe('Tests for the Quote component', () => {
  render(<Quote />);
  test('Check for the following text on screen', () => {
    expect(screen.getByText('Refresh your screen to read a new quote')).toBeInTheDocument();
    expect(screen.getByText('Refresh your screen to read a new quote')).toBeVisible();
    expect(screen.getByText('Refresh your screen to read a new quote')).not.toHaveClass();
  });
});
