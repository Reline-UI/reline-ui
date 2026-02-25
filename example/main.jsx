import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/index.css";
import { RelineThemeProvider } from "../src";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RelineThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RelineThemeProvider>
  </React.StrictMode>,
);
