import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Rehab</div>
      {isOpen && (
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/membership" onClick={closeMenu}>
            Membership
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link
          to={props.set ? '/logout' : '/singin'}
          className="log"
            style={{ color: 'black' }}
            onClick={closeMenu}
          >
            {props.signin}
          </Link>

        </div>
      )}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/membership" onClick={closeMenu}>
          Membership
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link
          to={props.set ? '/logout' : '/signin'}
          className="log"
          style={{ color: 'black' }}
          onClick={closeMenu}
        >
          {props.signin}
        </Link>


      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
