import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.js";
import 'react-loading-skeleton/dist/skeleton.css'


import App from "./App.jsx";

import "./assets/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
