// bookingConfirmation.js
import React from 'react';
import './bookingConfirmation.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const eventDetails = useSelector((state) => state.eventDetails);

  const onReturnHomeClick = () => {
    navigate('/welcome');
  };

  return (
    <div className="bookingBox">
      <button className="BackButton" type="button" onClick={onReturnHomeClick}>
        Home
      </button>
      <h1>Winter WonderMap</h1>
      <h2>Your reservation is in -insert first namee!</h2>
      <h3>We have sent a booking confirmation to insert email</h3>
      <h4>Here are the details for your event:</h4>
      <p> Reservation no: {Math.floor(Math.random() * 1000000)}</p>
      <p> Name: {eventDetails[0].name}</p>
      <p> Date: {eventDetails[0].event_date}</p>
      <p> Time: {eventDetails[0].event_time}</p>
      <p> Location: {eventDetails[0].location}</p>
</div>
  );
};

export default BookingConfirmation;
