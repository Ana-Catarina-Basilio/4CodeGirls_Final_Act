import React from 'react';
import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WelcomePage from './welcomePage';

test('renders WelcomePage correctly', () => {
  render(<BrowserRouter><WelcomePage username="TestUser" /></BrowserRouter>);

  expect(screen.getByText(/Happy holidays TestUser!/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome to Winter WonderMap/i)).toBeInTheDocument();
  expect(screen.getByText(/Your Festive Adventure Begins Here/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Explore/i })).toBeInTheDocument();
});
