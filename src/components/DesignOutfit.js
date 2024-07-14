import React, { useState } from 'react';

const DesignOutfit = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    setSelectedCategory(null); // Reset selected category when gender changes
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const renderDesigns = () => {
    // Logic to render designs based on selected category
    if (selectedCategory === 'T-Shirts') {
      return (
        <div>
          <h4>T-Shirts Designs</h4>
          {/* Render designs for T-Shirts */}
          <img src="path_to_image" alt="T-Shirt Design 1" />
          <img src="path_to_image" alt="T-Shirt Design 2" />
          {/* Add more images or components for designs */}
        </div>
      );
    } else if (selectedCategory === 'Dresses') {
      return (
        <div>
          <h4>Dresses Designs</h4>
          {/* Render designs for Dresses */}
          <img src="path_to_image" alt="Dress Design 1" />
          <img src="path_to_image" alt="Dress Design 2" />
          {/* Add more images or components for designs */}
        </div>
      );
    }
    // Add more categories as needed
    return null;
  };

  return (
    <div>
      <h2>Design Outfit</h2>

      <div>
        <h3>Choose Gender:</h3>
        <button onClick={() => handleGenderSelection('men')}>Men</button>
        <button onClick={() => handleGenderSelection('women')}>Women</button>
      </div>

      {selectedGender && (
        <div>
          <h3>Choose Category:</h3>
          {selectedGender === 'men' ? (
            <div>
              <button onClick={() => handleCategorySelection('Topwear')}>Topwear</button>
              <button onClick={() => handleCategorySelection('Indian & Festive Wear')}>Indian & Festive Wear</button>
              <button onClick={() => handleCategorySelection('Bottomwear')}>Bottomwear</button>
              <button onClick={() => handleCategorySelection('Footwear')}>Footwear</button>
              <button onClick={() => handleCategorySelection('Fashion Accessories')}>Fashion Accessories</button>
            </div>
          ) : (
            <div>
              <button onClick={() => handleCategorySelection('Indian & Fusion Wear')}>Indian & Fusion Wear</button>
              <button onClick={() => handleCategorySelection('Western Wear')}>Western Wear</button>
              <button onClick={() => handleCategorySelection('Bottomwear')}>Bottomwear</button>
              <button onClick={() => handleCategorySelection('Footwear')}>Footwear</button>
              <button onClick={() => handleCategorySelection('Fashion Accessories')}>Fashion Accessories</button>
            </div>
          )}
        </div>
      )}

      {selectedCategory && (
        <div>
          <h3>Selected Category: {selectedCategory}</h3>
          {renderDesigns()}
        </div>
      )}
    </div>
  );
};

export default DesignOutfit;
