import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {
  const [count, setCount] = useState(0);

  return <Router />;
}

export default App;
