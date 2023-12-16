
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { storeEventDetails } from '../authActions';
import { submitReservation } from '../api/booking_api';


const BookingForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.eventDetails);

   // eslint-disable-next-line 
  const nameRegex = /^[a-zA-Z\-]+$/; // regex to check for letters and hypen in names
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex to check for valid email
  

  const handleReservation = async (event) => {
    event.preventDefault();

    if (eventDetails.length === 0) {
      alert('Please select an event before submitting the form');
      navigate('/map');
      return;
    }

    // Validate first name
    if (!nameRegex.test(firstName)) {
      alert('Please enter a valid first name (letters plus hypen only)');
      return;
    }

    // Validate last name
    if (!nameRegex.test(surname)) {
      alert('Please enter a valid last name (letters plus hypen only)');
      return;
    }

    // Validate email
    if (!emailRegex.test(userEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    dispatch(storeEventDetails(eventDetails));
  
 
// api call to save booking details....
    const reservationResult = await submitReservation(firstName, surname, userEmail, event.events_id);
    //console.log(reservationResult);

    if (reservationResult.success) {
      dispatch(storeEventDetails(eventDetails));
      // Example usage in BookingForm.js
      //console.log('Reservation successful');
      navigate('/booking-confirmation', {
      state: {
        firstName,
        userEmail,
        bookingDetails: reservationResult.bookingId,
      },
    });
  } else {
      // Handle error
      console.error(reservationResult.error);
      alert(reservationResult.error);
      navigate('/map');
    }
  };

return(
  <div className="form-container">
      <h1> Fantastic choice! You have selected:</h1>
      <div className = "event-details">
      {eventDetails.map((event, index) => (
        <div key={index}>
         {event.name}. <br/>
            Location: {event.location} <br/>
            Date:{(event.event_date)} <br/>
            Time: {event.event_time}  <br/> 
          
        </div>
      ))}
      </div>
      <h1>Enter your details to reserve event</h1>
      <form>
      <div className="detailsSection">
      <div className="inputGroup">
          <label htmlFor="firstName">First Name:</label><span>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          /></span>
        </div>

        <div className="inputGroup">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            id="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <button className="reserveButton" type="submit" onClick={handleReservation}>
        Reserve
      </button>
      </div>
        </form>
    </div>
  );
};

export default BookingForm;
