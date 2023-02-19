import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "regenerator-runtime/runtime"; // tambahkan ini untuk menjalankan regenerator runtime untuk menjalankan react-table GlobalSearch

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
