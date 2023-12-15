import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcomePage.css';

const WelcomePage = ({ username }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/map');
  }
  return (
    <div className="mapContainer">
      <h1>Happy holidays {username}!</h1>
      <h1>Welcome to Winter WonderMap</h1>
      <h2>Your Festive Adventure Begins Here</h2>
      <button className="exploreButton" type="button" onClick={handleExplore}>
        Explore
      </button>
    </div>
  );
};

export default WelcomePage;