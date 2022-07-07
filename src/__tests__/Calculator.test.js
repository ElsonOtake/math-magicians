import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('Tests for the Calculator component', () => {
  render(<Calculator />);
  test('Check for the following tests on screen', () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getByRole('table')).not.toHaveClass();

    expect(screen.queryByText(/Todo List React/)).toBeNull();
    expect(screen.getByText(/Let's do some math!/)).toBeTruthy();

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeVisible();
    expect(screen.getByRole('heading')).not.toHaveClass();
    expect(screen.getByRole('heading')).toHaveTextContent("Let's do some math!");

    const total = screen.getByRole('columnheader');
    fireEvent.click(screen.getByText('5'));
    expect(screen.debug(total)).toMatchSnapshot();
  });
});
