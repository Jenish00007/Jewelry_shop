// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for Navbar-specific styles
import logoImage from '../Assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src={logoImage} alt="Company Logo" style={{ height: 50 }} /> */}
        <div className="company-info">
          <img src={logoImage} alt="Company Logo" />
          <h3>RemarkablyAI</h3>
        </div>

      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Features</Link>
          </li>
          <li>
            <Link to="/products">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      
      <div className="menu-icon">
        <i className="ri-menu-fill" />
      </div>
    </nav>
  );
}

export default Navbar;