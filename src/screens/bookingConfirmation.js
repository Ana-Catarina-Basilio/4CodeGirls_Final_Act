// bookingConfirmation.js
import React from 'react';
import './bookingConfirmation.css';

const BookingConfirmation = ({ onReturnHomeClick, onSyncToGoogleCalendar }) => {
    return (
    <div className="bookingBox">
    <button className="BackButton" type="button" onClick={onReturnHomeClick}>
      Home
    </button>
    <h1>Winter WonderMap</h1>
    <h2>Your reservation is in!</h2>
    <button className="SyncButton" type="button" onClick={onSyncToGoogleCalendar}>
      Sync to Google Calendar
    </button>
  </div>
);
};

export default bookingConfirmation;