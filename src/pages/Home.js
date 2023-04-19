import React from "react";
import BAndWPicture from "../images/b&waboutpic.jpeg";

export default function Home() {
  return (
    <div className="top-header-container">
      <div className="header-title-wrapper">
        Welcome to my Front End Capstone Project!
      </div>

      <div className="pic-name-msg-container">
        <img src={BAndWPicture} alt="Black and white photo of the developer" />

        <div>
          <span className="f-l-name-wrapper">Denise Justice</span>
          <span className="msg-wrapper">Code, Design, Improve.....Repeat!</span>
        </div>
      </div>

      <div className="movie-container">
        <div className="movie-wrapper">
          <div className="circle1">
            <img src={require("../images/aquaman.jpeg").default}></img>
          </div>
          <div className="circle2">
            <img src={require("../images/carrie.png").default}></img>
          </div>
          <div className="circle3">
            <img src={require("../images/seventiesshow.webp").default}></img>
          </div>
          <div className="circle4">
            <img src={require("../images/clueless.jpeg").default}></img>
          </div>
          <div className="circle5">
            <img src={require("../images/starborn.jpeg").default}></img>
          </div>
          <div className="circle6">
            <img src={require("../images/action-movie.webp").default}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
