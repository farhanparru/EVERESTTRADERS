// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navabar from "./pages/Navabar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <Navabar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
