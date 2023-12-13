// BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingForm.css';

const BookingForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleReserve = () => {
    // Perform reservation logic with userName, userEmail, etc.
    navigate('/bookingConfirmation');
  };

  return (
    <div className="form">
      <h1>You have selected:</h1>
      {/* Display the selected item or details here */}

      <div className="detailsSection">
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>

      <button className="reserveButton" type="button" onClick={handleReserve}>
        Reserve
      </button>
    </div>
  );
};

export default BookingForm;
