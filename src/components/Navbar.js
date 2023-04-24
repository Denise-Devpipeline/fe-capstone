import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="left-nav">
          <div className="title-wrapper">
            <div className="name-title">Denise Justice</div>
            <div className="class-title">FE Capstone</div>
          </div>

          <div className="right-nav">
            <NavLink className="home-page" to="/">
              Home
            </NavLink>
            <NavLink className="about-page" to="/aboutme">
              About
            </NavLink>
            <NavLink className="show-page" to="/moviegallery">
              Movie Gallery
            </NavLink>
            <NavLink className="contact-page" to="/contactme">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
