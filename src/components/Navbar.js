import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-nav">
        <div className="title-wrapper">
          <div className="name-title">Denise Justice</div>
          <div className="class-title">FE Capstone</div>
        </div>

        <div className="right-nav">
          <div className="home-page">Home</div>
          <div className="home-page">About</div>
          <Link className="home-page" to="/moviegallery">
            Entertainment Gallery
          </Link>
          <div className="home-page">Contact</div>
        </div>
      </div>
    </div>
  );
}
