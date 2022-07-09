import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Styles/footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social-links">
        <h2> Social Links</h2>
        <Link to="/about-us" className="social-item">
          <FaFacebook className="icons" /> Facebook
        </Link>
        <Link to="/about-us" className="social-item">
          <FaGithub className="icons" /> Github
        </Link>
        <Link to="/about-us" className="social-item">
          <FaInstagram className="icons" /> Instagram
        </Link>
        <Link to="/about-us" className="social-item">
          <FaLinkedinIn className="icons" />
          LinkedIn
        </Link>
      </div>
      <div className="navigation-links">
        <div className="header">
          <h2> Quick Links</h2>
        </div>
        <Link to="/" className="fnav-item">
          Home
        </Link>
        <Link to="/about-us" className="fnav-item">
          About
        </Link>
        <Link to="/contacts" className="fnav-item">
          Contacts
        </Link>
        <Link to="/recipes" className="fnav-item">
          Recipes
        </Link>
        <Link to="/recipes" className="fnav-item">
          FAQs
        </Link>
        <Link to="/recipes" className="fnav-item">
          Terms & Conditions
        </Link>
      </div>
      <div className="copyright-container">
        <div className="header">
          <h2> Contacts</h2>
        </div>
      </div>
    </div>
  );
}
