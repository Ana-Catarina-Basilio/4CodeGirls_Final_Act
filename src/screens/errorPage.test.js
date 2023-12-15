import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorPage from './errorPage';

test('renders ErrorPage correctly', () => {
  render(<ErrorPage />);
  
  expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  expect(screen.getByText(/Error: Winter's hiccup. Let it code, let it code, let it code!/i)).toBeInTheDocument();
  expect(screen.getByText(/❄️ Snowflakes tangled up in our circuits. ❄️/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Return Home/i })).toBeInTheDocument();
});


test('handles Return Home button click', () => {
  const mockReturnHomeClick = jest.fn();
  render(<ErrorPage onReturnHomeClick={mockReturnHomeClick} />);
  userEvent.click(screen.getByRole('button', { name: /Return Home/i }));
  expect(mockReturnHomeClick).toHaveBeenCalledTimes(1);
});
