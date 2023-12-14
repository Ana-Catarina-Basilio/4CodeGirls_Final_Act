
const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

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

// Define a route to retrieve events based on category
app.get('/api/events', (req, res) => {
    const category = req.query.category;
    let query;
  
    if (category) {
      // If a category is provided, filter events by category
      query = `SELECT * FROM events WHERE category = '${category}'`;
    } else {
      // If no category is provided, fetch all events
      query = 'SELECT * FROM events';
    }
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json(results);
    });
  });
  


// Define a route to retrieve all categories
app.get('/api/categories', (req, res) => {
  const query = 'SELECT DISTINCT category FROM events';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const categories = results.map((result) => ({ id: result.category, label: result.category }));
    res.json(categories);
  });
});

// Store user data in the users table and booking data in the bookings table

app.post('/submit_form', (req, res) => {
  try {
    // Extract data from the form
    const userFirstName = req.body.first_name;
    const userSurname = req.body.surname;
    const userEmail = req.body.email;

    // Validate form data
    if (!userFirstName || !userSurname || !userEmail) {
      return res.status(400).json({ error: 'Invalid form data' });
    }

    // Connect to the database
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
      }
      console.log('Connected to MySQL');
    });
    

    // Call the stored procedure
    const storedProcedure = 'CALL AddUserAndBooking(?, ?, ?)';
    connection.query(storedProcedure, [userFirstName, userSurname, userEmail], (error) => {
      if (error) {
        // Handle database error
        console.error('Failed to store data in the database:', error);
        res.status(500).json({ error: 'Failed to store data in the database' });
      } else {
        // Close the database connection
        connection.end();
        // Return a success message
        res.json({ message: 'Data successfully stored in the database' });
      }
    });
  } catch (error) {
    // Handle exceptions, log errors, etc.
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




  app.get('/', (req, res) => {
    res.send('Hello, this is the WonderMap backend!');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});