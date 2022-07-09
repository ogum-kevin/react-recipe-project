import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/pages/RecipePage/About";
import Contact from "../components/pages/RecipePage/Contact";
import Recipe from "../components/pages/RecipePage/Recipe";

export default function App() {
  return (
    <div className="main-container">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/recipes" element={<Recipe />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
}
