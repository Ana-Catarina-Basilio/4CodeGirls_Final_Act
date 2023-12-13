// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your MySQL password
  database: 'wondermap'// Replace with your WonderMap database name
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
const submitForm = (userFirstName, userSurname, userEmail, callback) => {
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!userFirstName || !userSurname || !userEmail || !isValidEmail(userEmail)) {
    return callback({ error: 'Invalid form data or email format' });
  }

  const storedProcedure = 'CALL AddUserAndBooking(?, ?, ?)';
  const validationQuery = 'SELECT * FROM events LIMIT 1';

  connection.query(validationQuery, (validationError, validationResults) => {
    if (validationError) {
      console.error('Error executing validation query:', validationError);
      return callback({ error: 'Internal Server Error during validation' });
    }

    connection.query(storedProcedure, [userFirstName, userSurname, userEmail], (error) => {
      if (error) {
        console.error('Failed to store data in the database:', error);
        return callback({ error: 'Failed to store data in the database' });
      } else {
        return callback(null, { message: 'Data successfully stored in the database' });
      }
    });
  });
};

module.exports = {
  getEventsByCategory,
  getAllCategories,
  submitForm,
};
