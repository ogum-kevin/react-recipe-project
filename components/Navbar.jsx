import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="nav-container">
        <div className="logo">
          <NavLink to="/" className="links">
            Logo
          </NavLink>
        </div>
        <ul className="nav-list">
          <li className="nav-links">
            <NavLink to="/about-us" className="links">
              About Us
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/contacts" className="links">
              Contacts
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/recipes" className="links">
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
