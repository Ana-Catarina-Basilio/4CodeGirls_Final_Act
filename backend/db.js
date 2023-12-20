
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your MySQL password
  database: 'wondermap'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Function to retrieve events based on category
const getEventsByCategory = (category, callback) => {
  const query = category
    ? `SELECT * FROM events WHERE category = '${category}'`
    : 'SELECT * FROM events';

  connection.query(query, callback);
};

// Function to retrieve all categories
const getAllCategories = (callback) => {
  const query = 'SELECT DISTINCT category FROM events';
  connection.query(query, callback);
};

// Function to handle form submission
const submitForm = (userFirstName, userSurname, userEmail, events_id, callback) => {
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!userFirstName || !userSurname || !userEmail || !isValidEmail(userEmail)) {
    return callback({ error: 'Invalid form data or email format' });
  }

  const storedProcedure = 'CALL AddUserAndBooking(?, ?, ?, ?)';
  const validationQuery = 'SELECT * FROM events LIMIT 1';

  // check if the database is connected using a simple query
  connection.query(validationQuery, (validationError, validationResults) => {
    if (validationError) {
      console.error('Error executing validation query:', validationError);
      return callback({ error: 'Internal Server Error during validation' });
    }

    // execute the stored procedure
    connection.query(storedProcedure, [userFirstName, userSurname, userEmail, events_id], (error, results) => {
      if (error) {
        console.error('Failed to store data in the database:', error);
        return callback({ error: 'Failed to store data in the database' });
      } else {
        console.log(results)
        const bookingId = results[0][0].BookingID; 
        console.log('Booking ID:', bookingId)  
        return callback(null, { message: 'Data successfully stored in the database', bookingId });
      }
    });
  });
};

module.exports = {
  getEventsByCategory,
  getAllCategories,
  submitForm,
};
