import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Green from "./components/Green";
import Violet from "./components/Violet";
import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {

return(
  <>
<div id="container">
      {/* <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/violet">Violet</Link>
      
        </div> */}
        <div id="main-section">
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/violet" element={<Violet />} />

  </Routes>
</div>
<footer>
  <Navbar />
</footer>
    </div>
</>
);
}

export default App
