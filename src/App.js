
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CategoryBox from './checkboxes/CategoryBox.js';
import BackButton from './back_button/back_button.js';
import Map from './map/map.js';
import * as authActions from './authActions';
import LoginPage from './screens/loginPage';
import WelcomePage from './screens/welcomePage';
import { useNavigate } from 'react-router-dom';
import BookingForm from './screens/bookingForm.js';
import BookingConfirmation from './screens/bookingConfirmation.js';



function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {

    fetch('http://127.0.0.1:3000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error('Error fetching categories:', error);
        dispatch(authActions.setError('Error fetching categories'));
      });
  }, [dispatch]);


  const handleCheckboxChange = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((selectedCategory) => selectedCategory !== category)
      );
    }
  };


  const handleBackClick = () => {
    dispatch(authActions.setLoginStatus(false));
    dispatch(authActions.setShowWelcome(true)); 
    navigate('/welcome'); 
  };
  

  return (
    <div className="App">
    <header className="App-header"></header>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage username={username} />} />
      <Route
          path="/map"
          element={
            <div>
            < BackButton onClick={handleBackClick} />
              <h1 className='category-intro'>Select your festive adventure </h1>
          <div className="checkboxesDiv">
            {categories.map((categoryData) => (
              <CategoryBox
                key={categoryData.id}
                id={categoryData.id.toLowerCase().replace(/\s+/g, '')}
                checkboxCategory={categoryData.label}
                onChange={(isChecked) => handleCheckboxChange(categoryData.label, isChecked)}
              />
            ))}
          </div>
          <div className="mapDiv">
            <Map selectedCategories={selectedCategories} />
          </div>
          <div className="footer">
            {/* Footer content */}
          </div>
        </div>
      }
      />
       <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
