import React from "react";
import DarkBackground from "../images/dark-background-.jpg";

export default function Home() {
  return (
    <div className="top-header-container">
      <div className="header-title-wrapper">
        Welcome to my Front End Capstone Project!
      </div>

      <div className="pic-name-msg-container">
        <img
          id="darkbackground"
          src={DarkBackground}
          alt="Digital Background!"
        />
        <div className="text-container-wrapper">
          <div className="text-container2">
            Code, Design, Improve.....Repeat!
          </div>
        </div>
      </div>
    </div>
  );
}
