
const express = require('express');
const cors = require('cors');
const { getEventsByCategory, getAllCategories, submitForm } = require('./db');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint to retrieve events by category
app.get('/api/events', (req, res) => {
  const category = req.query.category;
  
  getEventsByCategory(category, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  });
});


// GET endpoint to retrieve all categories
app.get('/api/categories', (req, res) => {
  getAllCategories((error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const categories = results.map((result) => ({ id: result.category, label: result.category }));
    res.json(categories);
  });
});

// POST endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const userFirstName = req.body.first_name;
  const userSurname = req.body.surname;
  const userEmail = req.body.email;
  const events_id = req.body.events_id;
  console.log('Received data:', req.body);

  submitForm(userFirstName, userSurname, userEmail, events_id, (error, result) => {
    if (error) {
      console.error('Error processing request:', error);
      res.status(500).json(error);
      return;
    }

    res.json({ success: true, bookingId: result.bookingId })
  });
});

app.get('/', (req, res) => {
  res.send('Hello, this is the WonderMap backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
