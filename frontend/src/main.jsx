import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { SessinProvider } from "./contexts/SessionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessinProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SessinProvider>
  </React.StrictMode>
);
