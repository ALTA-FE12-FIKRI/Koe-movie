import React from "react";
import ReactDOM from "react-dom/client";

import App from "./router";

import "./styles/index.css";
import Details from "./pages/Details";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
