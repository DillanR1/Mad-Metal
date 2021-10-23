import React, { useState } from "react";
import { Link } from "react-router-dom"; // Replaces a href="", syntactic sugar
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Mad Metal <i className="fas fa-wrench"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

//  i className={click ? "fas fa-times" : "fas fa-bars"}> ----
//  This checks for a click action, if it is clicked it sets the style to font awesome bars
//  We now have to define the click action

// const [click, setClick] = useState(false); This sets state and requires that state is imported
// setClick uses state and will update state when clicked. The initial value is set to false so that the user has to click to change state.
