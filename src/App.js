import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const BAndWPicture = require("./images/b&waboutpic.jpeg").default;
const Aquaman = require("./images/aquaman.jpeg").default;
const Carrie = require("./images/carrie.png").default;
const SeventiesShow = require("./images/seventiesshow.webp").default;
const Clueless = require("./images/clueless.jpeg").default;
const StarIsBorn = require("./images/starborn.jpeg").default;
const ActionExplosion = require("./images/action-movie.webp").default;
const LinkedInIcon = require("./images/linkedin.svg").default;

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
