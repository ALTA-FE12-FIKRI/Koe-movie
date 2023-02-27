import React from "react";
import ReactDOM from "react-dom/client";

import App from "./router";

import "./styles/index.css";

import { FavProvider } from "./utils/context/favContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FavProvider>
      <App />
    </FavProvider>
  </React.StrictMode>
);
