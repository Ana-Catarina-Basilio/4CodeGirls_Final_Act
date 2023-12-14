import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookButton.css";
import { storeEventDetails } from "../authActions";
import { useDispatch } from "react-redux"; // Import useDispatch



// create a function to handle the BOOK NOW button
function BookButton({eventDetails}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    function HandleBooking() {
      dispatch(storeEventDetails(eventDetails));
        navigate("/booking-form");
    }
  return (
    <button className= "bookButton" onClick ={HandleBooking}>Book Now
    </button>
  );
}
export default BookButton;
