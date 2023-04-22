import React from "react";
import Carousel from "carousel-carousel-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ShowGallery from "./pages/ShowGallery";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";
import ShowsPage from "./pages/ShowsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>

        <Route path="/showspage">
          <ShowsPage></ShowsPage>
        </Route>

        <Route path="/showgallery">
          <ShowGallery></ShowGallery>
        </Route>

        <Route path="/contactme">
          <ContactMe></ContactMe>
        </Route>

        {/* <Route path="/FontAwesomeIcon">
          <FontAwesomeIcon></FontAwesomeIcon>
        </Route> */}

        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
