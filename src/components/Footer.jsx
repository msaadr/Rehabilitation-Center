// Footer.js
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      
          <h3 className="text">Rehab</h3>
          
        

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-phone"></i>
            <a href="tel:+92 334 5177790" className="contact-link">
              +92 3707885899
            </a>
          </p>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a href="mailto:info@hope.org.pk" className="contact-link">
              rehab@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Rehab Center | Designed by Hassan Arif
      </div>
    </footer>
  );
}

export default Footer;
