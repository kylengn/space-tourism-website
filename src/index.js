import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/_global.scss";
import "./styles/_typography.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
