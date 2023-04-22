import React from "react";
import CoolRubberDuck from "../images/cool-rubber-duck.avif";

export default function Home() {
  return (
    <div className="top-header-container">
      <div className="header-title-wrapper">
        Welcome to my Front End Capstone Project!
      </div>

      <div className="pic-name-msg-container">
        <img
          id="duck"
          src={CoolRubberDuck}
          alt="Rubber Duck, A develpers little helper!"
        />
        <div className="text-container-wrapper">
          <div className="text-container1">Denise Justice</div>

          <div className="text-container2">
            Code, Design, Improve.....Repeat!
          </div>
        </div>
      </div>
    </div>
  );
}
