import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#f50057', borderBottom: '2px solid #f50057' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: '#fff', fontWeight: 'bold' }}>Fashio<span style={{ color: 'orange' }}>NEXUS</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/" style={{ color: location.pathname === "/" ? 'orange' : '#fff', textDecoration: 'none', padding: '10px 15px', transition: 'all 0.3s ease' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/designoutfit" ? "active" : ""}`} to="/designoutfit" style={{ color: location.pathname === "/designoutfit" ? 'orange' : '#fff', textDecoration: 'none', padding: '10px 15px', transition: 'all 0.3s ease' }}>DesignOutfit</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/vote" ? "active" : ""}`} to="/vote" style={{ color: location.pathname === "/vote" ? 'orange' : '#fff', textDecoration: 'none', padding: '10px 15px', transition: 'all 0.3s ease' }}>DesignVoting</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`} to="/profile" style={{ color: location.pathname === "/profile" ? 'orange' : '#fff', textDecoration: 'none', padding: '10px 15px', transition: 'all 0.3s ease' }}>UserProfile</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: 'none', padding: '10px', transition: 'background-color 0.3s ease' }} />
            <button className="btn btn-outline-success" type="submit" style={{ color: '#fff', borderColor: '#fff', marginLeft: '10px', transition: 'all 0.3s ease' }}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
