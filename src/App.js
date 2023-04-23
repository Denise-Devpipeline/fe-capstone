import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useLocation } from "react-router-dom";
// import Carousel from "carousel-carousel-react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MovieGallery from "./pages/MovieGallery";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";
import ShowsPage from "./pages/ShowsPage";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>

        <Route path="/showspage">
          <ShowsPage></ShowsPage>
        </Route>

        <Route path="/moviegallery">
          <MovieGallery></MovieGallery>
        </Route>

        <Route path="/contactme">
          <ContactMe></ContactMe>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer />
      <FontAwesomeIcon />
      <NavLink />
    </BrowserRouter>
  );
}
