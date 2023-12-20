
import React from 'react';
import './CategoryBox.css';

function CategoryBox({ checkboxCategory, onChange }) {
  const handleCheckboxChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox-container">
    <label className="checkboxes">
      {checkboxCategory}
      <input type="checkbox" onChange={handleCheckboxChange} />
      <span className="checkmark"></span>
    </label>
       </div>
  );
}

export default CategoryBox;
