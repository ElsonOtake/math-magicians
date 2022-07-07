import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout.js';

describe('Layout', () => {
  test('renders Layout component', () => {
    render(<Layout />, {wrapper: BrowserRouter});
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeVisible();
    expect(screen.getByRole('navigation')).not.toHaveClass();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeVisible();
    expect(screen.getByRole('heading')).not.toHaveClass();
    expect(screen.getByRole('heading')).toHaveTextContent('Math Magicians');
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeVisible();
    expect(screen.getByRole('list')).not.toHaveClass();
    expect(screen.getByText(/Math Magicians/)).toBeTruthy();
    expect(screen.getByText(/Home/)).toBeTruthy();
    expect(screen.getByText(/Calculator/)).toBeTruthy();
    expect(screen.getByText(/Quote/)).toBeTruthy();
    expect(screen.debug()).toMatchSnapshot();
  });
});