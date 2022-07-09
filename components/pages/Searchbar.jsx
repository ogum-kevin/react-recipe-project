import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import Recipe from "../pages/RecipePage/Recipe";
import "../Styles/searchbar.css";
export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="search-term">
      <input
        type="text"
        className="search-input"
        placeholder="Type to search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Link to="/recipes" className="search-icon">
        <FaSistrix />
      </Link>
    </div>
  );
}
