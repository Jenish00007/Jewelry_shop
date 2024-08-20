// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional: for Footer-specific styles

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
