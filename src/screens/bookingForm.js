// BookingForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingForm.css';

const BookingForm = () => {
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate('/bookingConfirmation');
  };

  return (
    <div className="form">
      <h2>You have selected: </h2>
      <button className="reserveButton" type="button" onClick={handleReserve}>
        Reserve
      </button>
    </div>
  );
};

export default BookingForm;
