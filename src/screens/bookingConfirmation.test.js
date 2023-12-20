import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BookingConfirmation from './bookingConfirmation';

const mockStore = configureStore();

test('renders BookingConfirmation without errors', () => {
  // Arrange: mock store
  const store = mockStore({
    eventDetails: [[]], 
  });

  // Mock location object with mock data
  const mockLocation = {
    state: {
      firstName: 'User Test',
      userEmail: 'test@test.com',
      bookingDetails: '123',
    },
  };

  // Act:
  render(
    <Provider store={store}>
      <BrowserRouter>
        <BookingConfirmation />
      </BrowserRouter>
    </Provider>,
    {
      // useLocation hook
      wrapper: ({ children }) => (
        <BrowserRouter>
          <Provider store={store} value={{ location: mockLocation }}>
            {children}
          </Provider>
        </BrowserRouter>
      ),
    }
  );

  // Assert: Verify that the component renders without errors
});
