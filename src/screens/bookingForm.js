
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { storeEventDetails } from '../authActions';
import { submitReservation } from '../api/booking_api';
import BackToMap from '../map/back-to-map';


const BookingForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.eventDetails);
  const [processingMessage, setProcessingMessage] = useState('');


   // eslint-disable-next-line 
  const nameRegex = /^[a-zA-Z\-]+$/; // regex to check for letters and hypen in names
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex to check for valid email

  useEffect(() => {
    if (eventDetails.length === 0){
  navigate('/map');
  return;
   }})

  
  const handleReservation = async (event) => {
    event.preventDefault();


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

  
try{
  dispatch(storeEventDetails(eventDetails));
// api call to save booking details.

  const eventsId = eventDetails.length > 0 ? eventDetails[0].events_id : null; // Assuming eventDetails is an array with at least one element
//console.log('event-details:', eventsId)

  setProcessingMessage('Making your reservation... Please wait.');

  const reservationResult = await submitReservation(firstName, surname, userEmail, eventsId);
    //console.log(reservationResult);
    
  setProcessingMessage('');

    if (reservationResult.success) {
      setFirstName('');
  setSurname('');
  setUserEmail('');

      navigate('/booking-confirmation', {
      state: {
        firstName,
        userEmail,
        bookingDetails: reservationResult.bookingId,
      },
    });
  }else {
      // Handle error
      console.error(reservationResult.error);
      alert(reservationResult.error);
      navigate('/map');
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error('Unexpected error:', error);
    alert('An unexpected error occurred');
    navigate('/map');
  }
};

return(
  <div className="form-container">
    <BackToMap />
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
        <button className="reserveButton" type="submit" onClick={handleReservation} disabled={processingMessage !== ''}>
        Reserve
      </button>
      </div>
        </form>
      {processingMessage && <p>{processingMessage}</p>}
        </div>
      )}
    
export default BookingForm;
