import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 

import LoginPage from './loginPage';

const mockStore = configureStore();

test('renders LoginPage correctly', () => {
  const store = mockStore(); 
//ARRANGE
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </Provider>
  );
//ASSERTION
  expect(screen.getByText(/To discover what lies behind/i)).toBeInTheDocument();
  expect(screen.getByText(/Type in your name and the secret password!/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/secret code, psst f_st_ve/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
});

test('handles login correctly', () => {
  const store = mockStore(); 
  const navigateMock = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => navigateMock,
  }));
//ARRANGE
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </Provider>
  );

  // ACT
  fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), { target: { value: 'TestUser' } });
  fireEvent.change(screen.getByPlaceholderText(/secret code, psst f_st_ve/i), { target: { value: 'festive' } });
  fireEvent.click(screen.getByRole('button', { name: /Login/i }));

  // ASSERTION
  expect(store.getActions()).toEqual([{ type: 'LOGIN', payload: 'TestUser' }]);
  expect(navigateMock).toHaveBeenCalledWith('/welcome');
});
