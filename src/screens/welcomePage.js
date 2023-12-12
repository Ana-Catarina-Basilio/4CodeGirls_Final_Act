// welcomePage.js
import React from 'react';
import './welcomePage.css';

const WelcomePage = ({ onExploreClick }) => {
  return (
    <div className="mapContainer">
      <h1>Winter WonderMap</h1>
      <h2>Your Festive Adventure Begins Here</h2>
      <button className="exploreButton" type="button" onClick={onExploreClick}>
        Explore
      </button>
    </div>
  );
};

export default WelcomePage;
