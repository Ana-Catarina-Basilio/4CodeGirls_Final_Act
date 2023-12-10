import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryBox from './checkboxes/CategoryBox.js';
import BackButton from './back_button/back_button.js';
import Map from './map/map.js';
import wonderMapCategories from './events/wonderMapCatergories';
import getWonderMapEvents from './events/wonderMapEvents';
import WelcomePage from './screens/welcomePage'; 


function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleCheckboxChange = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((selectedCategory) => selectedCategory !== category)
      );
    }
  };

  const handleEventCheckboxChange = (event, isChecked) => {
    if (isChecked) {
      setSelectedEvents((prevEvents) => [...prevEvents, event]);
    } else {
      setSelectedEvents((prevEvents) =>
        prevEvents.filter((selectedEvent) => selectedEvent !== event)
      );
    }
  };

  const handleSubmit = () => {
    console.log('Selected Categories:', selectedCategories);
    console.log('Selected Events:', selectedEvents);
  };

  const handleExploreClick = () => {
    setShowWelcome(false); // Hide the welcome page when Explore is clicked
  };

  const handleBackClick = () => {
    setShowWelcome(true); // Show the welcome page when Back is clicked
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Conditionally render BackButton based on showWelcome */}
        {!showWelcome && <BackButton onClick={handleBackClick} />}
      </header>
      {showWelcome ? (
        <WelcomePage onExploreClick={handleExploreClick} />
      ) : (
        <div>
          <div className="checkboxesDiv">
            {categories.map((categoryData) => (
              <CategoryBox
                key={categoryData.id}
                id={categoryData.id.toLowerCase().replace(/\s+/g, '')}
                checkboxCategory={categoryData.label}
                onChange={(isChecked) => handleCheckboxChange(categoryData.label, isChecked)}
              />
            ))}
            {wonderMapCategories.map((category) => (
              <CategoryBox
                key={category.toLowerCase().replace(/\s+/g, '')}
                id={category.toLowerCase().replace(/\s+/g, '')}
                checkboxCategory={category}
                onChange={(isChecked) => handleCheckboxChange(category, isChecked)}
              />
            ))}
          </div>

          <div className="footer">
            <button onClick={getWonderMapEvents}>Submit</button>
            <div className="mapDiv">
              <Map selectedEvents={selectedEvents} />
            </div>
            <p>4 Code Girls!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;