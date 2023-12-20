
import React from 'react';
import './back_button.css';

function BackButton({ onClick }) {
  return (
    <button id="back-button" onClick={onClick}>
      Back
    </button>
  );
}

export default BackButton;
