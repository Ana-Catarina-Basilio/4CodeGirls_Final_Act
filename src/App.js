// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryBox from './checkboxes/CategoryBox.js';
import BackButton from './back_button/back_button.js';
import Map from './map/map.js';
import WelcomePage from './screens/welcomePage'; 

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Fetch categories from the api url at the first render
  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // handle change of checkbox using filter and spread operator
  const handleCheckboxChange = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((selectedCategory) => selectedCategory !== category)
      );
    }
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
        <>
          <div className="checkboxesDiv">
            {categories.map((categoryData) => {
              console.log('categoryData', categoryData); // Check the categoryData in the console
              return (
                <CategoryBox
                  key={categoryData.id}
                  id={categoryData.id.toLowerCase().replace(/\s+/g, '')}
                  checkboxCategory={categoryData.label}
                  onChange={(isChecked) => handleCheckboxChange(categoryData.label, isChecked)}
                />
              );
            })}
          </div>
          <div className="mapDiv">
            <Map selectedCategories={selectedCategories} />
          </div>
          <div className="footer">
            {/* Footer content */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
