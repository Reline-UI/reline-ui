import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/index.css";
import { RelineThemeProvider } from "../src";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RelineThemeProvider>
      <App />
    </RelineThemeProvider>
  </React.StrictMode>
);
