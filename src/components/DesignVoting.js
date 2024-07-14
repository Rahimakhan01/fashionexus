// src/components/DesignVoting.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DesignVoting = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    axios.get('/api/designs')
      .then(response => {
        setDesigns(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleVote = (id) => {
    axios.post(`/api/designs/${id}/vote`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Vote for Designs</h1>
      <div>
        {designs.map(design => (
          <div key={design._id}>
            <img src={design.imageUrl} alt={design.title} />
            <h2>{design.title}</h2>
            <p>{design.description}</p>
            <button onClick={() => handleVote(design._id)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignVoting;
