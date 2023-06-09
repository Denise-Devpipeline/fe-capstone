import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieGallery from "./pages/MovieGallery";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";
import ShowsPage from "./pages/ShowsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/showspage/:show_id" component={ShowsPage} />

        <Route path="/moviegallery">
          <MovieGallery />
        </Route>

        <Route path="/contactme">
          <ContactMe />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
