
import React from 'react';
import './errorPage.css';

const ErrorPage = ({ onReturnHomeClick }) => {
  return (
    <div className="errorBox">
      <h1>Oops!</h1>
      <h2>Error: Winter's hiccup. Let it code, let it code, let it code!</h2>
      <p>❄️ Snowflakes tangled up in our circuits. ❄️</p>
      <button className="returnHomeButton" type="button" onClick={onReturnHomeClick}>
        Return Home
      </button>
    </div>
  );
};

export default ErrorPage;
