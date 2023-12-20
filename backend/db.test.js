const { submitForm } = require('./db');

// Mocking the mysql module
jest.mock('mysql', () => ({
  createConnection: jest.fn(),
  connect: jest.fn(),
  query: jest.fn(),
}));

describe('submitForm function', () => {
  beforeEach(() => {
    // Clear all instances and calls to the mock functions before each test
    jest.clearAllMocks();
  });


  it('should handle form submission successfully', async () => {
    // Arrange
    const userFirstName = 'John';
    const userSurname = 'Doe';
    const userEmail = 'john.doe@example.com';
    const events_id = 1;
    const callback = jest.fn();

    // Mocking the query results
    const queryResults = [
      [{ BookingID: 123 }]
    ];

    // Mocking the validation query results
    const validationResults = [
      { Category :"Romantic"}
    ];

    require('mysql').query.mockImplementationOnce((query, callback) => {
      if (query === 'SELECT * FROM events LIMIT 1') {
        callback(null, validationResults);
      } else if (query === 'CALL AddUserAndBooking(?, ?, ?, ?)') {
        callback(null, queryResults);
      }
    });


    // Act
    await submitForm(userFirstName, userSurname, userEmail, events_id, callback);

    // Assert
    expect(callback).toHaveBeenCalledWith(null, { message: 'Data successfully stored in the database', bookingId: 123 });
  });

  it('should handle form submission with invalid email', async () => {
    // Arrange
    const userFirstName = 'John';
    const userSurname = 'Doe';
    const userEmail = 'invalid-email'; // Invalid email
    const events_id = 1;
    const callback = jest.fn();


    // Act
    await submitForm(userFirstName, userSurname, userEmail, events_id, callback);

    // Assert
    expect(callback).toHaveBeenCalledWith({ error: 'Invalid form data or email format' });
  });

});
