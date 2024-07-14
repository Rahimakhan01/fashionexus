import React from 'react';
import { Link } from 'react-router-dom';
import './DesignSubmission.css'; // Import CSS file for additional styling

const DesignSubmission = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., API call, state management)
    console.log('Form submitted!');
  };

  return (
    <div className="design-submission-container">
      <h1 className="animated-heading">Design Submission</h1>
      <p className="animated-text">Please fill in your details to participate:</p>
      <form onSubmit={handleSubmit} className="animated-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>
        {/* Add more fields as needed */}
        <button type="submit" className="btn-submit">Submit</button>
      </form>

      {/* Link to DesignOutfit page */}
      <Link to="/designoutfit" className="btn-create-outfit animated-button">Create Outfit</Link>
    </div>
  );
};

export default DesignSubmission;
