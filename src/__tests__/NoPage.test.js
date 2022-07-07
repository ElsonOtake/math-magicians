import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoPage from '../components/NoPage.js';

describe('NoPage', () => {
  test('renders NoPage component', () => {
    render(<NoPage />);
    expect(screen.queryByText(/404/)).toBeTruthy();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeVisible();
    expect(screen.getByRole('heading')).not.toHaveClass();
    expect(screen.getByRole('heading')).toHaveTextContent('404');
    expect(screen.debug()).toMatchSnapshot();
  });
});