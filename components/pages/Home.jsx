import React from "react";
import Searchbar from "./Searchbar";
import "../Styles/home.css";
export default function Home() {
  return (
    <div className="home-container">
      <div className="image-container"></div>
      <Searchbar />
    </div>
  );
}
