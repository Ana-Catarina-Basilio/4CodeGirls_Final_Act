import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WelcomePage from './welcomePage';

test('renders WelcomePage correctly', () => {
  // Arrange: Render WelcomePage with a mock username
  render(<BrowserRouter><WelcomePage username="TestUser" /></BrowserRouter>);

  // Assert: Check if the expected elements are present in the rendered component
  expect(screen.getByText(/Happy holidays TestUser!/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome to Winter WonderMap/i)).toBeInTheDocument();
  expect(screen.getByText(/Your Festive Adventure Begins Here/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Explore/i })).toBeInTheDocument();
});

test('clicking Explore button calls handleExplore', () => {
  // Arrange: Mock the useNavigate function
  const navigateMock = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => navigateMock,
  }));

  // Act: Render WelcomePage and simulate a click on the Explore button
  render(<BrowserRouter><WelcomePage username="TestUser" /></BrowserRouter>);
  fireEvent.click(screen.getByRole('button', { name: /Explore/i }));

  // Assert: Check if the useNavigate function was called with the expected argument
  expect(navigateMock).toHaveBeenCalledWith('/map');
});
