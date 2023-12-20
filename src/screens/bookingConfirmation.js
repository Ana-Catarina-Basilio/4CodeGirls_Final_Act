
import React, {useEffect} from 'react';
import './bookingConfirmation.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QRCodeGenerator from '../QRCode/QRCode';
import Snow from '../snow-effect/Snow';
import BackToMap from '../map/back-to-map';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstName, userEmail , bookingDetails} = location.state;
  const eventDetails = useSelector((state) => state.eventDetails);
 

  useEffect(() => {
    //console.log('eventDetails:', eventDetails);
    //console.log('bookingDetails:', bookingDetails);
  }, [eventDetails, bookingDetails]);

  const onReturnHomeClick = () => {
    navigate('/welcome');
  };

  const handleExit = () => {
    navigate('/');
  }

  return (
    <div className="bookingBox">
    <BackToMap />
    <Snow />
    
    <div className="naviButton">
      <button className="BackButton" type="button" onClick={onReturnHomeClick}>
        Home
      </button>
      <button className="BackButton" type="button" onClick={handleExit}>
        Exit
      </button>
      </div>
      <h1>Winter WonderMap</h1>
      <div className= "booking-container">
      <h1>Your reservation is in, {firstName}!</h1>
      <h2>We have sent a booking confirmation to {userEmail}</h2>
      <p> Reservation no: {bookingDetails}</p>
      <p> Name: {eventDetails[0][0].name}</p>
      <p> Date: {eventDetails[0][0].event_date}</p>
      <p> Time: {eventDetails[0][0].event_time}</p>
      <p> Location: {eventDetails[0][0].location}</p>
      <h1 className= 'qr-code-title'>Your QR Code</h1>
      <p className ='qr-info'> Scan to add to your iphone calender</p>
      <QRCodeGenerator />
      </div>
</div>
  );
};

export default BookingConfirmation;
