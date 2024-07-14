// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('/api/user/profile')
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.name}'s Profile</h1>
      <p>Email: {profile.email}</p>
      <h2>Submitted Designs</h2>
      <ul>
        {profile.designs.map(design => (
          <li key={design._id}>{design.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
