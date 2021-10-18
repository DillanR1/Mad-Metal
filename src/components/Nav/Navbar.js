import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/" className="navbar-logo">
              Mad Metal <i className="fas fa-wrench"></i>
            </a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
