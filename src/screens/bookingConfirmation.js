// bookingConfirmation.js
import React from 'react';
import './bookingConfirmation.css';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { storeEventDetails } from '../authActions';



const BookingConfirmation = () => {
  const navigate = useNavigate();
  const eventDetails = useSelector((state) => state.eventDetails);
 

  const onReturnHomeClick= () => {
    navigate('/welcome');
  };

    return (
    <div className="bookingBox">
    <button className="BackButton" type="button" onClick={onReturnHomeClick}>
      Home
    </button>
    <h1>Winter WonderMap</h1>
    <h2>Your reservation is in!</h2>
    <div className = "event-details">
    {eventDetails && (
          <div>
            {eventDetails.name}. <br />
            {eventDetails.event_info}
            <br />
            Location: {eventDetails.location} <br />
            Date: {eventDetails.event_date} <br />
            Time: {eventDetails.event_time} <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingConfirmation;