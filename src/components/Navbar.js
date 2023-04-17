import React from "react";
import BAndWPicture from "../images/b&waboutpic.jpeg";

export default function Navbar() {
  return (
    <div class="navbar-container">
      <div class="left-nav">
        <img src={BAndWPicture} alt="Black and white photo of the developer" />
        <div class="title-wrapper">
          <div class="name-title">Denise Justice</div>
          <div class="class-title">FE Capstone</div>
        </div>

        <div class="right-nav">
          <div class="home-page">Home</div>
          <div class="home-page">About</div>
          <div class="home-page">Contact</div>
        </div>
      </div>
    </div>
  );
}
