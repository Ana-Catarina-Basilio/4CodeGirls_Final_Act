import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorPage from './errorPage';

test('renders ErrorPage correctly', () => {
  // Arrange: Render the ErrorPage component
  render(<ErrorPage />);
  
  // Assert: Check if the expected elements are present in the rendered component
  expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  expect(screen.getByText(/Error: Winter's hiccup. Let it code, let it code, let it code!/i)).toBeInTheDocument();
  expect(screen.getByText(/❄️ Snowflakes tangled up in our circuits. ❄️/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Return Home/i })).toBeInTheDocument();
});

test('handles Return Home button click', () => {
  // Arrange: Mock the callback function for Return Home button click
  const mockReturnHomeClick = jest.fn();

  // Act: Render the ErrorPage component and simulate a click on the Return Home button
  render(<ErrorPage onReturnHomeClick={mockReturnHomeClick} />);
  userEvent.click(screen.getByRole('button', { name: /Return Home/i }));

  // Assert: Check if the callback function was called
  expect(mockReturnHomeClick).toHaveBeenCalledTimes(1);
});
