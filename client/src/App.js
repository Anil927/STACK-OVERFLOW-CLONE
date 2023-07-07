import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
