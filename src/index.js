import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/scss/navbar.scss";
import "./assets/scss/common.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
