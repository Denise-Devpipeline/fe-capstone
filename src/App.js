import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carousel from "carousel-carousel-react";
// import MovieGallery from "./pages/MovieGallery";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MovieGallery from "./pages/MovieGallery";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/aboutme">
          <AboutMe></AboutMe>
        </Route>

        <Route path="/moviegallery">
          <MovieGallery></MovieGallery>
        </Route>

        <Route path="/contactme">
          <ContactMe></ContactMe>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
