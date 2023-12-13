import React from "react";
import "./BookButton.css";


// create a function to handle the BOOK NOW button
function BookButton() {
    function HandleBooking() {
        alert("You have booked an event");
    }
  return (
    <button className= "bookButton" onClick ={HandleBooking}>Book Now
    </button>
  );
}
export default BookButton;
