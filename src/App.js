// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DesignOutfit from './components/DesignOutfit';
import DesignVoting from './components/DesignVoting';
import UserProfile from './components/UserProfile';
import DesignSubmission from './components/DesignSubmission';
import ContestDetails from './components/ContestDetails'; // Import ContestDetails component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designoutfit" element={<DesignOutfit />} />
        <Route path="/designvoting" element={<DesignVoting />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/designsubmission" element={<DesignSubmission />} />
        <Route path="/contest/:contestId" element={<ContestDetails />} /> {/* Dynamic route for contest details */}
      </Routes>
    </Router>
  );
}

export default App;
