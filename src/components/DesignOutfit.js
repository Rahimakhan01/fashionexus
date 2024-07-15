import React, { useState, useEffect } from 'react';
import itemsData from './clothes.json'; // Assuming clothes.json is in the same directory
import './DesignOutfit.css'; // Import CSS file for additional styling

const DesignOutfit = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    // Load all items initially if you want to show all items on initial load
    setFilteredItems(itemsData);
  }, []);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    // Filter items based on selected category and clear the previous filtered items
    const filtered = itemsData.filter(item => item.category.toLowerCase() === category.toLowerCase());
    setFilteredItems(filtered);
  };

  const handleItemSelection = (item) => {
    // Toggle item selection in the outfit
    if (outfit.find(i => i.id === item.id)) {
      setOutfit(outfit.filter(i => i.id !== item.id));
    } else {
      setOutfit([...outfit, item]);
    }
  };

  const handleSave = () => {
    // Placeholder function for saving the outfit
    console.log('Outfit saved:', outfit);
    // Implement actual save logic here (e.g., save to user's profile)
  };

  const handleSubmit = () => {
    // Placeholder function for submitting the outfit
    console.log('Outfit submitted:', outfit);
    // Implement actual submit logic here (e.g., navigate to DesignSubmission page)
  };

  return (
    <div className="design-outfit-container">
      <div className="white-screen">
        {outfit.map((item, index) => (
          <div key={index} className="selected-item" onClick={() => handleItemSelection(item)}>
            <img src={process.env.PUBLIC_URL + '/' + item.image} alt={item.label} className="item-image" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="sidebar">
        <h3>Select Category:</h3>
        <button onClick={() => handleCategorySelection('Dresses')}>Dresses</button>
        <button onClick={() => handleCategorySelection('Shirts')}>Shirts</button>
        <button onClick={() => handleCategorySelection('T-Shirts')}>T-Shirts</button>
        <button onClick={() => handleCategorySelection('Tops')}>Tops</button>
        <button onClick={() => handleCategorySelection('Pants')}>Pants</button>
        <button onClick={() => handleCategorySelection('Shoes')}>Shoes</button>
        {/* Add more categories as needed */}

        <div className="item-list">
          {filteredItems.map(item => (
            <div key={item.id} className={`item ${outfit.find(i => i.id === item.id) ? 'selected' : ''}`} onClick={() => handleItemSelection(item)}>
              <h4>{item.label}</h4>
              <img src={process.env.PUBLIC_URL + '/' + item.image} alt={item.label} className="item-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default DesignOutfit;

